'use client';

import ProjectionDashboard from '@/app/components/ProjectionDashboard';
import Navbar from '@/app/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-blue-900">
        <ProjectionDashboard />
      </main>
    </div>
  );
}