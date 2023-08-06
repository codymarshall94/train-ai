interface Step {
  title: string;
  description: string;
  multiple?: boolean;
  formName?: string;
  options: {
    title: string;
    description: string;
    value: string;
  }[];
}

export const STEPS: Record<number, Step> = {
  1: {
    title: "What is your client's goal?",
    description: "Select the goal that best describes your client's goal",
    multiple: false,
    formName: "goal",
    options: [
      {
        title: "Lose Weight",
        description: "Lose weight and get leaner",
        value: "lose weight",
      },
      {
        title: "Build Muscle",
        description: "Build muscle and get stronger",
        value: "build muscle",
      },
      {
        title: "Maintain Weight",
        description: "Maintain current weight",
        value: "maintain weight",
      },
    ],
  },
  2: {
    title: "What is your client's experience level?",
    description: "Select the experience level that best describes your client",
    multiple: false,
    formName: "experience",
    options: [
      {
        title: "Beginner",
        description: "New to working out",
        value: "beginner",
      },
      {
        title: "Intermediate",
        description: "Some experience working out",
        value: "intermediate",
      },
      {
        title: "Advanced",
        description: "A lot of experience working out",
        value: "advanced",
      },
    ],
  },
  3: {
    title: "How long should the program be?",
    description: "Select the length of the program",
    multiple: false,
    formName: "length",
    options: [
      {
        title: "1 Session",
        description: "1 Session",
        value: "1 Session",
      },
      {
        title: "4 Weeks",
        description: "4 Weeks",
        value: "4 Weeks",
      },
      {
        title: "8 Weeks",
        description: "8 Weeks",
        value: "8 Weeks",
      },
      {
        title: "12 Weeks",
        description: "12 Weeks",
        value: "12 Weeks",
      },
      {
        title: "Custom",
        description: "Custom",
        value: "custom",
      },
    ],
  },
  4: {
    title: "How many days per week can your client workout?",
    description: "Select the number of days per week your client can workout",
    multiple: false,
    formName: "days",
    options: [
      {
        title: "1-2",
        description: "1-2 days per week",
        value: "1-2",
      },
      {
        title: "3-4",
        description: "3-4 days per week",
        value: "3-4",
      },
      {
        title: "5-6",
        description: "5-6 days per week",
        value: "5-6",
      },
    ],
  },
  5: {
    title: "Does your client have access to equipment?",
    description:
      "If your client has access to equipment, select all that apply",
    multiple: true,
    formName: "equipment",
    options: [
      {
        title: "Barbell",
        description: "Barbell",
        value: "barbell",
      },
      {
        title: "Dumbbell",
        description: "Dumbbell",
        value: "dumbbell",
      },
      {
        title: "Kettlebell",
        description: "Kettlebell",
        value: "kettlebell",
      },
      {
        title: "Machine",
        description: "Machine",
        value: "machine",
      },
      {
        title: "Bodyweight",
        description: "Bodyweight",
        value: "bodyweight",
      },
    ],
  },
  6: {
    title: "Is the program sport specific?",
    description: "Select the sport that best describes your client's sport",
    multiple: false,
    formName: "sport",
    options: [
      {
        title: "None",
        description: "None",
        value: "none",
      },
      {
        title: "Basketball",
        description: "Basketball",
        value: "basketball",
      },
      {
        title: "Football",
        description: "Football",
        value: "football",
      },
      {
        title: "Soccer",
        description: "Soccer",
        value: "soccer",
      },
      {
        title: "Baseball",
        description: "Baseball",
        value: "baseball",
      },
      {
        title: "Hockey",
        description: "Hockey",
        value: "hockey",
      },
      {
        title: "Custom",
        description: "Custom",
        value: "custom",
      },
    ],
  },
  7: {
    title: "Any Injuries?",
    description: "Select body parts to be careful with exercises",
    multiple: true,
    formName: "injuries",
    options: [
      {
        title: "None",
        description: "None",
        value: "none",
      },
      {
        title: "Shoulders",
        description: "Shoulders",
        value: "shoulders",
      },
      {
        title: "Knees",
        description: "Knees",
        value: "knees",
      },
      {
        title: "Back",
        description: "Back",
        value: "back",
      },
      {
        title: "Neck",
        description: "Neck",
        value: "neck",
      },
      {
        title: "Elbows",
        description: "Elbows",
        value: "elbows",
      },
    ],
  },
};
