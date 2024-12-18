'use client';

import ProjectionDashboard from '@/app/components/ProjectionDashboard';
import Navbar from '@/app/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: 'rgb(32, 32, 32)' }}>
        <ProjectionDashboard />
      </main>
    </div>
  );
}