// src/types/index.ts

const PREDICTIONS = ['Over', 'Under'] as const;
export type Prediction = typeof PREDICTIONS[number];

export interface PropCard {
  propValue: number;
  statType: string;
  confidence: number;
  prediction: Prediction;
}