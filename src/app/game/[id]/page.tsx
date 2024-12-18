'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/app/components/Navbar';

interface TeamRecord {
  name: string;
  last5Games: boolean[];
  last5HeadToHead: boolean[];
  prediction: 'W' | 'L';
  predictedScore: number;
}

export default function GameDetails() {
  const params = useParams();
  const router = useRouter();
  const gameId = params?.id as string;

  const homeTeam: TeamRecord = {
    name: 'GSW',
    last5Games: [true, false, true, true, false],
    last5HeadToHead: [true, true, false, true, false],
    prediction: 'W',
    predictedScore: 121
  };

  const awayTeam: TeamRecord = {
    name: 'PHX',
    last5Games: [false, true, true, false, true],
    last5HeadToHead: [false, false, true, false, true],
    prediction: 'L',
    predictedScore: 98
  };

  const WinLossIndicator = ({ wins, label }: { wins: boolean[], label: string }) => (
    <div className="py-8 flex flex-col items-center"> {/* Added flex and center alignment */}
      <div className="text-gray-400 mb-4 text-lg">{label}</div>
      <div className="flex justify-center space-x-4"> {/* Increased dot spacing */}
        {wins.map((win, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${  /* Made dots larger */
              win ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
        ))}
      </div>
    </div>
  );

  const TeamCard = ({ team }: { team: TeamRecord }) => (
    <div 
      className="border-2 rounded-lg overflow-hidden w-full"
      style={{ 
        backgroundColor: 'rgb(52, 52, 52)',
        borderColor: 'rgb(123, 78, 221)',
        height: '600px'  // Made cards even taller
      }}
    >
      {/* Team Name Section */}
      <div className="h-48 flex flex-col items-center justify-center border-b-2 space-y-6"
           style={{ borderColor: 'rgb(123, 78, 221)' }}>
        <h2 className="text-4xl font-bold text-white">{team.name}</h2>
        <div className="h-24 w-24 bg-gray-700 rounded-full">
          {/* Logo placeholder */}
        </div>
      </div>

      {/* Last 5 Games */}
      <div className="border-b-2 px-6"
           style={{ borderColor: 'rgb(123, 78, 221)' }}>
        <WinLossIndicator wins={team.last5Games} label="Last 5 Games" />
      </div>

      {/* Last 5 H2H */}
      <div className="border-b-2 px-6"
           style={{ borderColor: 'rgb(123, 78, 221)' }}>
        <WinLossIndicator wins={team.last5HeadToHead} label={`Last 5 vs ${team.name === 'GSW' ? 'PHX' : 'GSW'}`} />
      </div>

      {/* Prediction */}
      <div className="h-32 flex flex-col items-center justify-center">
        <div className="text-gray-400 mb-4 text-lg">Prediction</div>
        <span className={`text-3xl font-bold ${
          team.prediction === 'W' ? 'text-green-500' : 'text-red-500'
        }`}>
          {team.prediction}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(32, 32, 32)' }}>
      <Navbar />
      <div className="pt-16 px-4">
        <div className="max-w-[1600px] mx-auto"> {/* Increased max width */}
          <div className="grid grid-cols-7 gap-16"> {/* Increased gap further */}
            {/* Home Team Card */}
            <div className="col-span-3">
              <TeamCard team={homeTeam} />
            </div>

            {/* Game Total Card */}
            <div className="col-span-1 flex items-start justify-center pt-4">
            <div 
                className="border-2 rounded-lg px-12 py-8 w-full flex flex-col items-center" // Added flex and center alignment
                style={{ 
                backgroundColor: 'rgb(52, 52, 52)',
                borderColor: 'rgb(123, 78, 221)'
                }}
              >
                <div className="flex items-center justify-between space-x-6 mb-4">
                  <span className="text-xl font-bold text-white">GSW</span>
                  <span className="text-white">•</span>
                  <span className="text-xl font-bold text-white">PHX</span>
                </div>
                <div className="flex items-center justify-between space-x-6">
                  <span className="text-xl text-gray-300">{homeTeam.predictedScore}</span>
                  <span className="text-white">•</span>
                  <span className="text-xl text-gray-300">{awayTeam.predictedScore}</span>
                </div>
                <div className="text-center mt-8">
                  <div className="text-lg text-gray-400">Total</div>
                  <div className="text-2xl text-white font-bold">
                    {homeTeam.predictedScore + awayTeam.predictedScore}
                  </div>
                </div>
              </div>
            </div>

            {/* Away Team Card */}
            <div className="col-span-3">
              <TeamCard team={awayTeam} />
            </div>
          </div>

          {/* Navigation arrows - Lowered position */}
          <div className="fixed left-4 bottom-16 transform">
            <button 
              onClick={() => router.back()}
              className="text-[rgb(123,78,221)] hover:text-[rgb(143,98,241)] text-5xl"
            >
              ←
            </button>
          </div>
          <div className="fixed right-4 bottom-16 transform">
            <button 
              className="text-[rgb(123,78,221)] hover:text-[rgb(143,98,241)] text-5xl"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}