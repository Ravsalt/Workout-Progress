import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import exercises from './exercises'; // Assuming exercises data is imported from './exercises.js'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import motivationalQuotes from './motivationalQuotes'; // Import motivational quotes
import './App.css'; // Custom CSS for styling

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const generateRandomWorkout = (level) => {
  const filteredExercises = exercises.filter(exercise => exercise.difficulty === level);
  const workoutCount = Math.min(4, filteredExercises.length);
  return Array.from({ length: workoutCount }, () => {
    const randomExercise = filteredExercises[Math.floor(Math.random() * filteredExercises.length)];
    return {
      ...randomExercise,
      sets: Math.floor(Math.random() * 3) + 2,
      reps: Math.floor(Math.random() * 10) + 5
    };
  });
};

const calculatePotentialGains = (workout, weeks) => {
  const totalVolume = workout.reduce((sum, ex) => sum + ex.sets * ex.reps, 0);
  const estimatedStrengthGain = Math.round(totalVolume * 0.05 * weeks);
  const estimatedCaloriesBurned = workout.reduce((sum, ex) => sum + ex.caloriesBurned * ex.sets, 0) * weeks;
  
  return {
    strengthGain: estimatedStrengthGain,
    caloriesBurned: estimatedCaloriesBurned
  };
};

const App = () => {
  const [difficulty, setDifficulty] = useState('Beginner');
  const [workout, setWorkout] = useState([]);
  const [workoutHistory, setWorkoutHistory] = useState(() => {
    const savedHistory = localStorage.getItem('workoutHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [trainingWeeks, setTrainingWeeks] = useState(4);
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [compareResults, setCompareResults] = useState(null);

  useEffect(() => {
    localStorage.setItem('workoutHistory', JSON.stringify(workoutHistory));
  }, [workoutHistory]);

  const handleGenerateWorkout = () => {
    setWorkout(generateRandomWorkout(difficulty));
  };

  const handleDownloadWorkout = () => {
    const workoutText = workout.map((exercise, index) => (
      `${index + 1}. ${exercise.name} (${exercise.muscle}): ${exercise.sets} sets of ${exercise.reps} reps\nDescription: ${exercise.description}\nTips: ${exercise.tips}\n\n`
    )).join('');
    
    const motivationalQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    const workoutPlan = `Your Workout Plan\n\n${workoutText}\n\nMotivational Quote:\n"${motivationalQuote}"`;

    const element = document.createElement('a');
    const file = new Blob([workoutPlan], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'workout_plan.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleLogWorkout = () => {
    if (workout.length > 0) {
      setWorkoutHistory(prev => [...prev, { date: selectedDate.toISOString().split('T')[0], workout }]);
      setWorkout([]);
    }
  };

  const renderTooltipContent = (exercise, index) => {
    return (
      <div className="absolute z-10 p-2 bg-gray-800 text-white text-sm rounded shadow-lg">
        <p>{exercise.description}</p>
        <p className="mt-2 font-bold">Tips: {exercise.tips}</p>
      </div>
    );
  };

  const renderWorkoutList = (workoutItems) => {
    return (
      <ul className="list-disc pl-5 space-y-2">
        {workoutItems.map((exercise, index) => (
          <li 
            key={index} 
            className="text-gray-700 relative"
            onMouseEnter={() => setTooltipIndex(index)}
            onMouseLeave={() => setTooltipIndex(null)}
          >
            {exercise.name} ({exercise.muscle}): {exercise.sets} sets of {exercise.reps} reps
            {tooltipIndex === index && renderTooltipContent(exercise, index)}
          </li>
        ))}
      </ul>
    );
  };

  const getProgressData = () => {
    const dates = workoutHistory.map(entry => entry.date);
    const totalSets = workoutHistory.map(entry => entry.workout.reduce((sum, ex) => sum + ex.sets, 0));
    const totalReps = workoutHistory.map(entry => entry.workout.reduce((sum, ex) => sum + ex.reps, 0));
    const totalVolume = workoutHistory.map(entry => entry.workout.reduce((sum, ex) => sum + ex.sets * ex.reps, 0));

    return {
      labels: dates,
      datasets: [
        {
          label: 'Total Sets',
          data: totalSets,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
        {
          label: 'Total Reps',
          data: totalReps,
          borderColor: 'rgb(153, 102, 255)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
        },
        {
          label: 'Total Volume',
          data: totalVolume,
          borderColor: 'rgb(255, 159, 64)',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
        },
      ],
    };
  };

  const handleCalendarChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mb-6 border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Calisthenic Workout Generator</h1>

        <div className="mb-6">
          <label htmlFor="difficulty" className="block text-gray-700 text-sm font-medium mb-2">Select Difficulty Level:</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <button
          onClick={handleGenerateWorkout}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Generate Workout
        </button>

        {workout.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Workout Plan:</h2>
            {renderWorkoutList(workout)}
            <button
              onClick={handleDownloadWorkout}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300 mt-4"
            >
              Download Workout Plan
            </button>
            <button
              onClick={handleLogWorkout}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 mt-4"
            >
              Log Workout
            </button>
          </div>
        )}

        {workoutHistory.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Workout History:</h2>
            <ul className="space-y-2">
              {workoutHistory.map((entry, index) => (
                <li key={index} className="text-gray-700">
                  {entry.date}: {entry.workout.length} exercises
                </li>
              ))}
            </ul>
          </div>
        )}

        {compareResults && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compare Results:</h2>
            {/* Display comparison results */}
          </div>
        )}
      </div>

      {workoutHistory.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg border border-gray-200 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Training Progress:</h2>
          <Line data={getProgressData()} />
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Calendar:</h2>
        <Calendar
          onChange={handleCalendarChange}
          value={selectedDate}
        />
      </div>
    </div>
  );
};

export default App;

