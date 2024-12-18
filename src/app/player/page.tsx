// src/app/player/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/Navbar';

export default function PlayerSearch() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handlePlayerClick = (playerId: string) => {
    // Navigate to the player's stats page
    router.push(`/player/${playerId}`);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(32, 32, 32)' }}>
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-3xl mx-auto mb-8">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search players, stats or odds"
              className="w-full px-4 py-3 rounded-full bg-[rgb(52,52,52)] text-white border-2"
              style={{ borderColor: 'rgb(123, 78, 221)' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Player List */}
        <div className="max-w-3xl mx-auto">
          {[
            { id: 'curry', name: 'Stephen Curry', team: 'GSW' },
            { id: 'jokic', name: 'Nikola Jokic', team: 'DEN' },
            { id: 'giannis', name: 'Giannis Antetokounmpo', team: 'MIL' }
          ].map((player) => (
            <div
              key={player.id}
              onClick={() => handlePlayerClick(player.id)}
              className="p-4 mb-2 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:scale-105"
              style={{ 
                backgroundColor: 'rgb(52, 52, 52)',
                borderColor: 'rgb(123, 78, 221)'
              }}
            >
              <div className="text-white font-bold">{player.name}</div>
              <div className="text-gray-300">{player.team}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}