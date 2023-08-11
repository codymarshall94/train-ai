export const TEST_PLAN = {
  workoutPlan: {
    daysPerWeek: "1-2",
    equipment: ["machine", "dumbbell"],
    experience: "beginner",
    goal: "lose weight",
    injuries: ["shoulders", "knees"],
    length: "1 session",
    overview:
      "This plan is designed to help a beginner who wants to lose weight and plays basketball. We will focus on strength and conditioning and will use machines and dumbbells in the program. We are also mindful of the client's shoulder and knee injuries. We will work out 1-2 times per week.",
    sport: "basketball",
    weeks: [
      {
        days: [
          {
            dayNumber: 1,
            exercises: [
              {
                name: "Squats",
                setsReps: "3 sets of 10 reps",
                notes: "Make sure to keep your back straight.",
              },
              {
                name: "Lunges",
                setsReps: "3 sets of 10 reps",
                notes: "Take big steps and keep your weight on your heels.",
              },
              {
                name: "Push-ups",
                setsReps: "3 sets of 10 reps",
                notes:
                  "Keep your elbows close to your body and do not let your hips sag.",
              },
              {
                name: "Plank",
                setsReps: "3 sets of 45 seconds",
                notes: "Keep your core tight and do not let your hips drop.",
              },
            ],
          },
          {
            dayNumber: 2,
            exercises: [
              {
                name: "Crunches",
                setsReps: "3 sets of 10 reps",
                notes:
                  "Keep your feet flat on the ground and your hands behind your head.",
              },
              {
                name: "Bicep Curls",
                setsReps: "3 sets of 10 reps",
                notes:
                  "Keep your elbows close to your body and squeeze at the top.",
              },
              {
                name: "Tricep Dips",
                setsReps: "3 sets of 10 reps",
                notes:
                  "Do not let your knees bend too far and keep your shoulders down.",
              },
              {
                name: "Wall Sit",
                setsReps: "3 sets of 45 seconds",
                notes:
                  "Hold your position and keep your back against the wall.",
              },
            ],
          },
        ],
      },
    ],
  },
};
