'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Added this import
import Navbar from '@/app/components/Navbar';

const ProjectionDashboard: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const router = useRouter(); // Added router initialization

  // Added navigation handler
  const handleGameClick = (gameId: string) => {
    router.push(`/game/${gameId}`);
  };

  const gameButtonStyle = {
    backgroundColor: 'rgb(52, 52, 52)',
    borderColor: 'rgb(123, 78, 221)'
  };

  const cardStyle = {
    backgroundColor: 'rgb(52, 52, 52)',
    borderColor: 'rgb(123, 78, 221)'
  };

  return (
    <div className="flex justify-center items-start min-h-screen w-full p-4 pt-16" 
         style={{ backgroundColor: 'rgb(32, 32, 32)' }}>
      <div className="w-[95%] max-w-7xl space-y-6">
        {/* Main Games Card */}
        <div className="rounded-lg shadow-xl overflow-hidden border-2" 
             style={cardStyle}>
          <div className="p-6 border-b-2" 
               style={{ borderColor: 'rgb(123, 78, 221)' }}>
            <h2 className="text-2xl font-bold text-white">NBA Game Projections</h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'gsw-lal', homeTeam: 'LAL', awayTeam: 'GSW', time: '7:30 PM ET', homeScore: 115, awayScore: 108 },
                { id: 'bos-mia', homeTeam: 'MIA', awayTeam: 'BOS', time: '8:00 PM ET', homeScore: 112, awayScore: 118 },
                { id: 'phx-den', homeTeam: 'DEN', awayTeam: 'PHX', time: '10:30 PM ET', homeScore: 124, awayScore: 115 }
              ].map((game) => (
                <button
                  key={game.id}
                  onClick={() => handleGameClick(game.id)} // Changed to use handleGameClick
                  className="rounded-lg p-4 text-left border-2 transition-all duration-200 hover:scale-105 flex justify-between"
                  style={gameButtonStyle}
                >
                  <div>
                    <div className="text-lg font-bold text-white">
                      {game.awayTeam} @ {game.homeTeam}
                    </div>
                    <div className="text-gray-300 font-bold">{game.time}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">{game.homeScore}</div>
                    <div className="text-gray-300 font-bold">{game.awayScore}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Picks Card */}
          <div className="rounded-lg shadow-xl overflow-hidden border-2 h-[600px]" 
               style={cardStyle}>
            <div className="p-4 border-b-2" 
                 style={{ borderColor: 'rgb(123, 78, 221)' }}>
              <h2 className="text-xl font-bold text-white">Top Picks</h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {[
                  { rank: 1, name: 'Giannis Antetokounmpo', team: 'MIL', prediction: 'Over 31.5 PTS' },
                  { rank: 2, name: 'Nikola Jokic', team: 'DEN', prediction: 'Over 28.5 PTS' },
                  { rank: 3, name: 'Shai Gilgeous-Alexander', team: 'OKC', prediction: 'Over 30.5 PTS' },
                  { rank: 4, name: 'Luka Doncic', team: 'DAL', prediction: 'Over 32.5 PTS' },
                  { rank: 5, name: 'Devin Booker', team: 'PHX', prediction: 'Over 29.5 PTS' },
                  { rank: 6, name: 'Donovan Mitchell', team: 'CLE', prediction: 'Over 28.5 PTS' }
                ].map((player, index) => (
                  <div key={index} 
                       className="flex items-center p-3 rounded border-2 transition-all duration-200 hover:scale-105"
                       style={cardStyle}>
                    <span className="w-8 text-white font-bold">{player.rank}</span>
                    <div className="flex-1">
                      <div className="font-bold text-white">{player.name}</div>
                      <div className="text-sm font-bold text-gray-300">{player.team}</div>
                    </div>
                    <span className="font-bold text-white">{player.prediction}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Injury Report Card */}
          <div className="rounded-lg shadow-xl overflow-hidden border-2 h-[600px]" 
               style={cardStyle}>
            <div className="p-4 border-b-2" 
                 style={{ borderColor: 'rgb(123, 78, 221)' }}>
              <h2 className="text-xl font-bold text-white">Injury Report</h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {[
                  { name: 'LaMelo Ball', team: 'CHA', status: 'Out - Ankle' },
                  { name: 'Luka Doncic', team: 'DAL', status: 'Questionable - Knee' },
                  { name: 'Joel Embiid', team: 'PHI', status: 'Day-to-Day - Rest' },
                  { name: 'Ja Morant', team: 'MEM', status: 'Out - Personal' },
                  { name: 'Brandon Ingram', team: 'NOP', status: 'Questionable - Knee' },
                  { name: 'Jalen Green', team: 'HOU', status: 'Day-to-Day - Rest' }
                ].map((player, index) => (
                  <div key={index} 
                       className="flex items-center p-3 rounded border-2 transition-all duration-200 hover:scale-105"
                       style={cardStyle}>
                    <div className="flex-1">
                      <div className="font-bold text-white">{player.name}</div>
                      <div className="text-sm font-bold text-gray-300">{player.team}</div>
                    </div>
                    <span className="text-sm font-bold text-red-500">{player.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Unders Card */}
          <div className="rounded-lg shadow-xl overflow-hidden border-2 h-[600px]" 
               style={cardStyle}>
            <div className="p-4 border-b-2" 
                 style={{ borderColor: 'rgb(123, 78, 221)' }}>
              <h2 className="text-xl font-bold text-white">Unders</h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {[
                  { name: 'Nikola Jokic', team: 'DEN', line: 'Under 29.5 PTS' },
                  { name: 'Giannis Antetokounmpo', team: 'MIL', line: 'Under 31.5 PTS' },
                  { name: 'Shai Gilgeous-Alexander', team: 'OKC', line: 'Under 30.5 PTS' },
                  { name: 'Jayson Tatum', team: 'BOS', line: 'Under 28.5 PTS' },
                  { name: 'Kevin Durant', team: 'PHX', line: 'Under 27.5 PTS' },
                  { name: 'Anthony Edwards', team: 'MIN', line: 'Under 26.5 PTS' }
                ].map((player, index) => (
                  <div key={index} 
                       className="flex items-center p-3 rounded border-2 transition-all duration-200 hover:scale-105"
                       style={cardStyle}>
                    <div className="flex-1">
                      <div className="font-bold text-white">{player.name}</div>
                      <div className="text-sm font-bold text-gray-300">{player.team}</div>
                    </div>
                    <span className="font-bold text-white">{player.line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectionDashboard;