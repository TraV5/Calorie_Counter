import { create } from 'zustand';

export type ActivityLevel = 'minimal' | 'low' | 'medium' | 'high' | 'veryHigh';

interface CalorieState {
  gender: 'male' | 'female';
  age: number;
  height: number;
  weight: number;
  activity: ActivityLevel;
  result: {
    basic: number;
    withActivity: number;
  };
  errors: {
    age: string;
    height: string;
    weight: string;
  };
  showResult: boolean;
  showForm: boolean;
  
  setGender: (gender: 'male' | 'female') => void;
  setAge: (age: number) => void;
  setHeight: (height: number) => void;
  setWeight: (weight: number) => void;
  setActivity: (activity: ActivityLevel) => void;
  calculate: () => void;
  reset: () => void;
  showFormOnly: () => void;
}

const useCalorieStore = create<CalorieState>((set, get) => ({
  gender: 'male',
  age: 30,
  height: 175,
  weight: 70,
  activity: 'medium',
  result: {
    basic: 0,
    withActivity: 0,
  },
  errors: {
    age: '',
    height: '',
    weight: '',
  },
  showResult: false,
  showForm: true,

  setGender: (gender) => set({ gender }),

  setAge: (age) => {
    let correctedAge = age;
    if (age > 150) correctedAge = 150;
    if (age < 1) correctedAge = 0;
    
    set({ age: correctedAge });
  },

  setHeight: (height) => {
    let correctedHeight = height;
    if (height > 250) correctedHeight = 250;
    if (height < 1) correctedHeight = 0;
    
    set({ height: correctedHeight });
  },

  setWeight: (weight) => {
    let correctedWeight = weight;
    if (weight > 300) correctedWeight = 300;
    if (weight < 1) correctedWeight = 0;
    
    set({ weight: correctedWeight });
  },

  setActivity: (activity) => set({ activity }),

  calculate: () => {
    const { gender, age, height, weight, activity } = get();
    
    let bmr: number;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } 
    else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityMultipliers: Record<ActivityLevel, number> = {
      minimal: 1.2,
      low: 1.375,
      medium: 1.55,
      high: 1.725,
      veryHigh: 1.9,
    };

    const withActivity = Math.round(bmr * activityMultipliers[activity]);

    set({
      result: {
        basic: Math.round(bmr),
        withActivity: withActivity,
      },
      showResult: true,
      showForm: false,
    });
  },

  reset: () => {
    set({
      gender: 'male',
      age: 30,
      height: 175,
      weight: 70,
      activity: 'medium',
      errors: {
        age: '',
        height: '',
        weight: '',
      },
    });
  },

  showFormOnly: () => {
    set({
      showResult: false,
      showForm: true,
    });
  },
}));

export default useCalorieStore;