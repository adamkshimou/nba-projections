// src/types/types.ts

// Define prediction type with const assertion
export const PredictionValues = ['Over', 'Under'] as const;
export type Prediction = typeof PredictionValues[number];

// PropCard interface
export interface PropCard {
  propValue: number;
  statType: string;
  confidence: number;
  prediction: Prediction;  // Using our Prediction type
}

// Variable interface
export interface Variable {
  type: string;
  value: string;
}

// Game interface
export interface Game {
  id: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  homeScore: number;
  awayScore: number;
}

// Params interface
export interface Params {
  id: string;
}