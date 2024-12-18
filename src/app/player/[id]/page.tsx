'use client';

'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import type { PropCard, Variable, Prediction } from '@/app/types/types';

export default function PlayerStats() {
  const params = useParams();
  const playerId = params?.id as string;

  const propCards = [
    {
      propValue: 25.5,
      statType: 'PTS',
      confidence: 85,
      prediction: 'Over' as Prediction
    },
    {
      propValue: 6.5,
      statType: 'AST',
      confidence: 82,
      prediction: 'Under' as Prediction
    },
    {
      propValue: 8.5,
      statType: 'REB',
      confidence: 78,
      prediction: 'Over' as Prediction
    },
    {
      propValue: 2.5,
      statType: '3PM',
      confidence: 75,
      prediction: 'Over' as Prediction
    },
    {
      propValue: 1.5,
      statType: 'STL',
      confidence: 72,
      prediction: 'Under' as Prediction
    },
    {
      propValue: 0.5,
      statType: 'BLK',
      confidence: 70,
      prediction: 'Over' as Prediction
    },
    {
      propValue: 44.5,
      statType: 'PRA',
      confidence: 83,
      prediction: 'Over'
    },
    {
      propValue: 15.5,
      statType: 'RA',
      confidence: 82,
      prediction: 'Under'
    },
    {
      propValue: 2.5,
      statType: 'STLBLK',
      confidence: 80,
      prediction: 'Over'
    },
    {
      propValue: 1.5,
      statType: 'DD',
      confidence: 75,
      prediction: 'Over'
    },
    {
      propValue: 0.5,
      statType: 'TD',
      confidence: 70,
      prediction: 'Under'
    },

  ] as const;

  const variables: Variable[] = [
    { type: 'vs Team', value: '25.5 PPG vs PHX' },
    { type: 'Home/Away', value: '28.2 PPG Away' },
    { type: 'Matchup', value: '24.8 PPG vs Bridges' },
    { type: 'Last 5', value: '26.4 PPG' },
    { type: 'Back to Back', value: '-2.3 PPG' },
    { type: 'vs PHX Record', value: '8-2 Last 10' },
    { type: 'Team Pace', value: '99.8' },
    { type: 'Defense Rating', value: '112.4' }
  ];


  if (!playerId) return null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(32, 32, 32)' }}>
      <Navbar />
      <div className="pt-16 px-4">
        <div className="max-w-[1400px] mx-auto">
          {/* Player Name Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white capitalize">
              {playerId.replace('-', ' ')} Stats
            </h1>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {/* Left side - Prop Cards */}
            <div className="col-span-3">
              <div className="grid grid-cols-3 gap-6">
                {propCards.map((prop, index) => (
                  <div
                    key={index}
                    className="border-2 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200"
                    style={{ 
                      backgroundColor: 'rgb(52, 52, 52)',
                      borderColor: 'rgb(123, 78, 221)'
                    }}
                  >
                    {/* Top section */}
                    <div 
                      className="p-4 text-center border-b-2"
                      style={{ borderColor: 'rgb(123, 78, 221)' }}
                    >
                      <div className="text-3xl font-bold text-white">
                        {prop.propValue}
                      </div>
                      <div className="text-lg font-bold text-gray-300">
                        {prop.statType}
                      </div>
                    </div>
                    
                    {/* Bottom section */}
                    <div 
                      className="grid grid-cols-2 divide-x-2 text-center"
                      style={{ borderColor: 'rgb(123, 78, 221)' }}
                    >
                      <div className="p-2">
                        <div className="text-white font-bold">
                          {prop.confidence}%
                        </div>
                      </div>
                      <div className="p-2">
                        <div 
                          className={`font-bold ${
                            prop.prediction === 'Over' ? 'text-green-400' : 'text-red-400'
                          }`}
                        >
                          {prop.prediction}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Variables Card */}
            <div className="col-span-1">
              <div
                className="border-2 rounded-lg h-full"
                style={{ 
                  backgroundColor: 'rgb(52, 52, 52)',
                  borderColor: 'rgb(123, 78, 221)'
                }}
              >
                <div 
                  className="p-4 border-b-2 text-xl font-bold text-white"
                  style={{ borderColor: 'rgb(123, 78, 221)' }}
                >
                  Variables
                </div>
                <div className="p-4 space-y-4">
                  {variables.map((variable, index) => (
                    <div 
                      key={index} 
                      className="grid grid-cols-2 gap-4 p-2 rounded hover:bg-[rgb(62,62,62)] transition-colors duration-200"
                    >
                      <div className="text-gray-300 font-bold">
                        {variable.type}
                      </div>
                      <div className="text-white font-bold">
                        {variable.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}