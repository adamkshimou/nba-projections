// src/components/Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const getLinkStyle = (path: string) => {
    const baseStyle = "text-white hover:text-[rgb(123,78,221)] transition-colors font-bold";
    return pathname === path ? `${baseStyle} text-[rgb(123,78,221)]` : baseStyle;
  };

  return (
    <nav className="h-12 flex items-center px-6 fixed w-full top-0 z-50 border-b-2"
         style={{ 
           backgroundColor: 'rgb(32, 32, 32)',
           borderColor: 'rgb(123, 78, 221)'
         }}>
      <div className="flex space-x-8">
        <Link href="/" className={getLinkStyle('/')}>
          Games
        </Link>
        <Link href="/player" className={getLinkStyle('/player')}>
          Player
        </Link>
        <Link href="/table" className={getLinkStyle('/table')}>
          Table
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;