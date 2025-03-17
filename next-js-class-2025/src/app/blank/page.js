'use client';
import { useEffect, useState } from 'react';
import Menubar from "@/components/menubar";
import Link from 'next/link';

export default function Blank() {
  const [isNameMoved, setIsNameMoved] = useState(false);
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false);

  useEffect(() => {
    const hasAnimated = localStorage.getItem('hasAnimated') === 'true';
    if (hasAnimated) {
      setIsNameMoved(true);
    }
    setHasCheckedStorage(true);
  }, []);

  const handleNameClick = () => {
    if (!isNameMoved) {
      setIsNameMoved(true);
      localStorage.setItem('hasAnimated', 'true');
    }
  };

  if (!hasCheckedStorage) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 blank-page">
      <div 
        className={`centered-name text-center ${isNameMoved ? 'moved' : ''}`}
        onClick={handleNameClick}
      >
        <h1 className="text-6xl font-bold mb-4 cursor-pointer">Chanin J.</h1>
        <p className="text-2xl text-gray-600">A1198</p>
      </div>
      <nav className="nav-menu">
        <Menubar />
      </nav>
    </div>
  );
}