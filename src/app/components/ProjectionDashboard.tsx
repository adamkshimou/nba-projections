import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

interface Game {
  id: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  date: string;
}

// Placeholder data - this will come from API later
const SAMPLE_GAMES: Game[] = [
  { 
    id: '1', 
    homeTeam: 'LAL', 
    awayTeam: 'GSW', 
    time: '7:30 PM ET',
    date: 'Today'
  },
  { 
    id: '2', 
    homeTeam: 'BOS', 
    awayTeam: 'MIA', 
    time: '8:00 PM ET',
    date: 'Today'
  },
  { 
    id: '3', 
    homeTeam: 'PHX', 
    awayTeam: 'DEN', 
    time: '10:30 PM ET',
    date: 'Today'
  }
];

const ProjectionDashboard: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full p-4 pt-16">
      <div className="w-[90%] max-w-7xl bg-blue-100 rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 border-b border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 text-center">NBA Game Projections</h2>
        </div>
        
        <Tabs.Root defaultValue="games" className="w-full">
          <Tabs.List className="flex border-b border-blue-200 bg-blue-50 justify-center">
            <Tabs.Trigger 
              value="games"
              className="px-8 py-4 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-blue-100 hover:bg-blue-50 text-gray-900 text-lg"
            >
              Games
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="trends"
              className="px-8 py-4 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-blue-100 hover:bg-blue-50 text-gray-900 text-lg"
            >
              Trends
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="games" className="p-8">
            {!selectedGame ? (
              // Game Selection View
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SAMPLE_GAMES.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => handleGameSelect(game.id)}
                    className="bg-blue-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-200 text-left"
                  >
                    <div className="text-sm text-gray-600 mb-2">{game.date}</div>
                    <div className="text-xl font-bold text-gray-900 mb-2">
                      {game.awayTeam} @ {game.homeTeam}
                    </div>
                    <div className="text-gray-700">{game.time}</div>
                  </button>
                ))}
              </div>
            ) : (
              // Game Projection View
              <div>
                <button 
                  onClick={() => setSelectedGame(null)}
                  className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
                >
                  ← Back to Games
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-blue-50 rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900">Game Projections</h3>
                    <div className="space-y-4">
                      <div className="border border-blue-200 rounded-lg p-6 bg-white">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-600">Projected Score</h4>
                            <div className="text-2xl font-bold text-gray-900">112-108</div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-600">Win Probability</h4>
                            <div className="text-2xl font-bold text-gray-900">65%</div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-600">Total Points</h4>
                            <div className="text-2xl font-bold text-gray-900">220</div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-600">Spread</h4>
                            <div className="text-2xl font-bold text-gray-900">-4.5</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900">Key Player Projections</h3>
                    <div className="space-y-4">
                      {/* This will be populated with actual player data */}
                      <div className="border border-blue-200 rounded-lg p-4 bg-white">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-gray-900">S. Curry</div>
                            <div className="text-sm text-gray-600">GSW - PG</div>
                          </div>
                          <div className="text-right">
                            <div className="text-gray-900">28.5 PTS | 6.4 AST</div>
                            <div className="text-gray-600">4.8 3PM | 5.2 REB</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Tabs.Content>

          <Tabs.Content value="trends" className="p-8">
            <div className="bg-blue-50 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Historical Trends</h3>
              <div className="h-96 bg-white rounded-lg flex items-center justify-center">
                [Trend visualization placeholder]
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default ProjectionDashboard;