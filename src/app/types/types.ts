// src/types/types.ts

export const PredictionValues = ['Over', 'Under'] as const;
export type Prediction = typeof PredictionValues[number];

export interface PropCard {
  propValue: number;
  statType: string;
  confidence: number;
  prediction: Prediction;
}

export interface Variable {
  type: string;
  value: string;
}