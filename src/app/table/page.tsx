// src/app/table/page.tsx
'use client';

import React from 'react';
import Navbar from '@/app/components/Navbar';

interface TeamStanding {
  rank: number;
  team: string;
  wins: number;
  losses: number;
  pct: number;
  gb: number;
}

export default function Standings() {
  // This will be replaced with NBA API data
  const eastTeams: TeamStanding[] = [
    { rank: 1, team: "Cavaliers", wins: 23, losses: 4, pct: 0.852, gb: 0 },
    // Add more teams...
  ];

  const westTeams: TeamStanding[] = [
    { rank: 1, team: "Timberwolves", wins: 20, losses: 6, pct: 0.769, gb: 0 },
    // Add more teams...
  ];

  const StandingsTable = ({ teams, conference }: { teams: TeamStanding[], conference: string }) => (
    <div className="bg-[rgb(52,52,52)] rounded-lg border-2 overflow-hidden p-4"
         style={{ borderColor: 'rgb(123, 78, 221)' }}>
      <h2 className="text-xl font-bold text-white mb-4">{conference}</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b-2" style={{ borderColor: 'rgb(123, 78, 221)' }}>
            <th className="px-4 py-2 text-left text-white">Rank</th>
            <th className="px-4 py-2 text-left text-white">Team</th>
            <th className="px-4 py-2 text-right text-white">W</th>
            <th className="px-4 py-2 text-right text-white">L</th>
            <th className="px-4 py-2 text-right text-white">PCT</th>
            <th className="px-4 py-2 text-right text-white">GB</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} className="border-b border-gray-700 hover:bg-[rgb(62,62,62)]">
              <td className="px-4 py-2 text-white">{team.rank}</td>
              <td className="px-4 py-2 text-white font-bold">{team.team}</td>
              <td className="px-4 py-2 text-white text-right">{team.wins}</td>
              <td className="px-4 py-2 text-white text-right">{team.losses}</td>
              <td className="px-4 py-2 text-white text-right">{team.pct.toFixed(3)}</td>
              <td className="px-4 py-2 text-white text-right">{team.gb}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(32, 32, 32)' }}>
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StandingsTable teams={eastTeams} conference="Eastern Conference" />
          <StandingsTable teams={westTeams} conference="Western Conference" />
        </div>
      </div>
    </div>
  );
}