// src/app/player/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';

interface Player {
  number: string;
  name: string;
  position: string;
  height: string;
  weight: number;
  dob: string;
  age: number;
  college: string;
}

export default function PlayerSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  // This will be replaced with NBA API data
  const samplePlayers: Player[] = [
    {
      number: "2",
      name: "Cade Cunningham",
      position: "PG",
      height: "6'6\"",
      weight: 220,
      dob: "9/25/2001",
      age: 23,
      college: "Oklahoma State"
    },
    // Add more sample players...
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(32, 32, 32)' }}>
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search players, stats or odds"
              className="w-full px-4 py-3 rounded-full bg-[rgb(52,52,52)] text-white border-2"
              style={{ borderColor: 'rgb(123, 78, 221)' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              🔍
            </button>
          </div>
        </div>

        {/* Players Table */}
        <div className="bg-[rgb(52,52,52)] rounded-lg border-2 overflow-hidden"
             style={{ borderColor: 'rgb(123, 78, 221)' }}>
          <table className="w-full">
            <thead>
              <tr className="border-b-2" style={{ borderColor: 'rgb(123, 78, 221)' }}>
                <th className="px-4 py-3 text-left text-white">#</th>
                <th className="px-4 py-3 text-left text-white">NAME</th>
                <th className="px-4 py-3 text-left text-white">POS</th>
                <th className="px-4 py-3 text-left text-white">HEIGHT</th>
                <th className="px-4 py-3 text-left text-white">WEIGHT</th>
                <th className="px-4 py-3 text-left text-white">AGE</th>
                <th className="px-4 py-3 text-left text-white">COLLEGE</th>
              </tr>
            </thead>
            <tbody>
              {samplePlayers.map((player, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-[rgb(62,62,62)]">
                  <td className="px-4 py-3 text-white">{player.number}</td>
                  <td className="px-4 py-3 text-white font-bold">{player.name}</td>
                  <td className="px-4 py-3 text-white">{player.position}</td>
                  <td className="px-4 py-3 text-white">{player.height}</td>
                  <td className="px-4 py-3 text-white">{player.weight}</td>
                  <td className="px-4 py-3 text-white">{player.age}</td>
                  <td className="px-4 py-3 text-white">{player.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}