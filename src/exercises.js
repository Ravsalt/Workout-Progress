const exercises = [
  {
    name: 'Push-ups',
    muscle: 'Chest, Shoulders, Triceps',
    description: 'Start in a plank position, lower body until chest almost touches the floor, then push back up.',
    tips: 'Keep core engaged and maintain a straight line from head to heels throughout the movement.',
    difficulty: 'Beginner',
    caloriesBurned: 5 // Estimated calories burned per set
  },
  {
    name: 'Pull-ups',
    muscle: 'Back, Biceps',
    description: 'Hang from a bar with hands shoulder-width apart, pull body up until chin clears the bar, then lower back down.',
    tips: 'Use a controlled motion, engage back muscles throughout the movement.',
    difficulty: 'Intermediate',
    caloriesBurned: 8 // Estimated calories burned per set
  },
  {
    name: 'Plank',
    muscle: 'Core',
    description: 'Support body on elbows and toes, keep body straight and hold position.',
    tips: 'Engage core muscles, keep breathing steady throughout the hold.',
    difficulty: 'Beginner',
    caloriesBurned: 3 // Estimated calories burned per minute
  },
  {
    name: 'Squats',
    muscle: 'Quadriceps, Hamstrings, Glutes',
    description: 'Stand with feet shoulder-width apart, lower body by bending knees, keeping chest up, and knees over toes.',
    tips: 'Keep weight on heels, engage core, and maintain proper form throughout the movement.',
    difficulty: 'Beginner',
    caloriesBurned: 6 // Estimated calories burned per set
  },
  {
    name: 'Lunges',
    muscle: 'Quadriceps, Hamstrings, Glutes',
    description: 'Step forward with one leg, lower body until both knees are bent at a 90-degree angle, then push back up to starting position.',
    tips: 'Keep front knee over ankle, back knee pointing down, and maintain upright posture throughout the movement.',
    difficulty: 'Intermediate',
    caloriesBurned: 7 // Estimated calories burned per set
  },
  {
    name: 'Dips',
    muscle: 'Triceps, Chest, Shoulders',
    description: 'Use parallel bars or a sturdy surface, lower body by bending arms until elbows are at 90 degrees, then push back up.',
    tips: 'Keep elbows close to body, engage triceps and chest muscles throughout the movement.',
    difficulty: 'Intermediate',
    caloriesBurned: 7 // Estimated calories burned per set
  },
  {
    name: 'Mountain Climbers',
    muscle: 'Core, Shoulders, Legs',
    description: 'Start in plank position, alternate bringing knees toward chest in a running motion while keeping core engaged.',
    tips: 'Maintain a steady pace, keep hips low, and focus on controlled movement.',
    difficulty: 'Intermediate',
    caloriesBurned: 8 // Estimated calories burned per minute
  },
  {
    name: 'Handstand Push-ups',
    muscle: 'Shoulders, Triceps, Upper Chest',
    description: 'Start in a handstand against a wall or freestanding, lower body by bending arms until head nearly touches the floor, then push back up.',
    tips: 'Ensure proper hand placement, engage core for stability, and practice against a sturdy surface.',
    difficulty: 'Advanced',
    caloriesBurned: 10 // Estimated calories burned per set
  },
  {
    name: 'Hanging Leg Raises',
    muscle: 'Core, Hip Flexors',
    description: 'Hang from a bar with arms extended, raise legs until they are parallel to the ground, then lower back down.',
    tips: 'Keep legs straight, engage core throughout the movement, and avoid swinging.',
    difficulty: 'Advanced',
    caloriesBurned: 9 // Estimated calories burned per set
  },
  {
    name: 'Muscle-ups',
    muscle: 'Back, Chest, Shoulders, Arms',
    description: 'Start hanging from a bar, pull body up while simultaneously transitioning into a dip position above the bar, then lower back down.',
    tips: 'Master pull-ups and dips separately before attempting muscle-ups, focus on explosive movement.',
    difficulty: 'Advanced',
    caloriesBurned: 12 // Estimated calories burned per set
  },
  {
    name: 'Pike Push-ups',
    muscle: 'Shoulders, Triceps, Upper Chest',
    description: 'Start in a downward dog position with hands shoulder-width apart, lower head toward the floor by bending elbows, then push back up.',
    tips: 'Maintain straight legs, engage core muscles, and perform controlled movements for better balance.',
    difficulty: 'Intermediate',
    caloriesBurned: 6 // Estimated calories burned per set
  },
  {
    name: 'Bulgarian Split Squats',
    muscle: 'Quadriceps, Hamstrings, Glutes',
    description: 'Stand with one leg behind on a bench or raised surface, lower the body by bending front knee, keep chest upright, then push back up.',
    tips: 'Ensure front knee does not go beyond toes, keep the back straight, and maintain balance throughout the movement.',
    difficulty: 'Intermediate',
    caloriesBurned: 7 // Estimated calories burned per set
  },
  {
    name: 'Russian Twists',
    muscle: 'Core, Obliques',
    description: 'Sit on the floor, lean back slightly, lift feet off the ground, and rotate torso from side to side, touching the ground beside hips.',
    tips: 'Engage core muscles throughout the exercise, keep breathing steady, and maintain control over the movement.',
    difficulty: 'Intermediate',
    caloriesBurned: 4 // Estimated calories burned per set
  },
  {
    name: 'Superman Exercise',
    muscle: 'Lower Back, Glutes',
    description: 'Lie face down on the floor with arms extended overhead, lift arms, chest, and legs off the ground, hold for a few seconds, then lower back down.',
    tips: 'Focus on squeezing lower back and glutes, keep neck in a neutral position, and avoid arching the back excessively.',
    difficulty: 'Beginner',
    caloriesBurned: 3 // Estimated calories burned per set
  },
  {
    name: 'Burpees',
    muscle: 'Full Body',
    description: 'Start standing, drop into a squat position with hands on the floor, kick feet back into a plank position, do a push-up, then jump back to squat position and jump up.',
    tips: 'Perform each movement with control, maintain a steady pace, and engage core muscles throughout.',
    difficulty: 'Intermediate',
    caloriesBurned: 10 // Estimated calories burned per set
  },
  {
    name: 'Inverted Rows',
    muscle: 'Back, Biceps',
    description: 'Set a bar at waist height, lie under it, grab the bar with hands shoulder-width apart, and pull body up until chest touches the bar, then lower back down.',
    tips: 'Keep body straight throughout the movement, engage back muscles, and avoid swinging.',
    difficulty: 'Intermediate',
    caloriesBurned: 7 // Estimated calories burned per set
  },
  {
    name: 'Wall Sit',
    muscle: 'Quadriceps, Glutes',
    description: 'Lean against a wall, slide down until knees are at a 90-degree angle, and hold the position for as long as possible.',
    tips: 'Keep back against the wall, thighs parallel to the ground, and breathe deeply throughout.',
    difficulty: 'Beginner',
    caloriesBurned: 4 // Estimated calories burned per minute
  },
  {
    name: 'Leg Raises',
    muscle: 'Core, Hip Flexors',
    description: 'Lie on back, lift legs off the ground, raise them until they are perpendicular to the ground, then lower back down slowly.',
    tips: 'Engage core muscles throughout the movement, keep legs straight, and avoid swinging.',
    difficulty: 'Intermediate',
    caloriesBurned: 5 // Estimated calories burned per set
  },
  {
    name: 'Box Jumps',
    muscle: 'Legs, Glutes',
    description: 'Stand in front of a sturdy box or raised surface, jump onto the box using both feet, then step back down and repeat.',
    tips: 'Land softly on the box, use arms to generate momentum, and focus on controlled movements.',
    difficulty: 'Intermediate',
    caloriesBurned: 8 // Estimated calories burned per set
  },
  {
    name: 'Diamond Push-ups',
    muscle: 'Triceps, Chest',
    description: 'Start in a plank position with hands close together under chest, lower body until chest touches hands, then push back up.',
    tips: 'Keep elbows close to body throughout the movement, engage core muscles for stability.',
    difficulty: 'Intermediate',
    caloriesBurned: 6 // Estimated calories burned per set
  },
  {
    name: 'Jumping Lunges',
    muscle: 'Legs, Glutes, Core',
    description: 'Start in a lunge position, jump explosively, switch legs mid-air, and land in a lunge position with opposite leg forward.',
    tips: 'Maintain balance, land softly on the ground, and perform movements at a controlled pace.',
    difficulty: 'Intermediate',
    caloriesBurned: 9 // Estimated calories burned per set
  },
  {
    name: 'Tricep Dips with Leg Raise',
    muscle: 'Triceps, Core',
    description: 'Perform tricep dips using parallel bars, raise one leg straight out in front of you during each dip.',
    tips: 'Keep elbows close to body during dips, engage core muscles for balance, and control leg movement.',
    difficulty: 'Intermediate',
    caloriesBurned: 7 // Estimated calories burned per set
  },
  {
    name: 'Tuck Jumps',
    muscle: 'Legs, Core',
    description: 'Start in standing position, jump explosively, bring knees up toward chest, and land softly back on the ground.',
    tips: 'Use arms to help generate momentum, maintain control throughout the movement, and focus on landing softly.',
    difficulty: 'Intermediate',
    caloriesBurned: 8 // Estimated calories burned per set
  },
  {
    name: 'L-Sit',
    muscle: 'Core, Hip Flexors',
    description: 'Sit on the ground with legs straight in front, place hands beside hips and lift body off the ground, keeping legs raised parallel to the ground.',
    tips: 'Engage core muscles to maintain balance, keep legs straight and back straight throughout the hold.',
    difficulty: 'Advanced',
    caloriesBurned: 8 // Estimated calories burned per minute
  },
  {
    name: 'Planche Progression',
    muscle: 'Shoulders, Chest, Core',
    description: 'Start in a push-up position, lean forward and lift legs off the ground while keeping body straight, aim to hold position with straight arms.',
    tips: 'Start with tuck planche and gradually extend legs as strength improves, engage core muscles and maintain balance.',
    difficulty: 'Advanced',
    caloriesBurned: 10 // Estimated calories burned per set
  },
  // Add more exercises here...
];

export default exercises;