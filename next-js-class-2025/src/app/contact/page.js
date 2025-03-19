'use client';
import { useEffect, useState } from 'react';
import Menubar from "@/components/menubar";
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div 
        className="centered-name text-center moved"
        id="nameSection"
      >
        <Link href="/blank">
          <h1 className="text-6xl font-bold mb-4">Chanin J.</h1>
        </Link>
        <p className="text-2xl text-gray-600">A1198</p>
      </div>
      <Menubar />
      <div className="content-container">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Contact Me</h1>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/Afadas" 
              className="social-icon hover:scale-110 transition-transform" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-5xl text-gray-700 hover:text-gray-900"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/cha-j-412a44305/" 
              className="social-icon hover:scale-110 transition-transform" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-5xl text-[#0A66C2] hover:text-[#004182]"></i>
            </a>
            <a 
              href="mailto:ffck.8256@gmail.com" 
              className="social-icon hover:scale-110 transition-transform"
            >
              <i className="fas fa-envelope text-5xl text-gray-700 hover:text-gray-900"></i>
            </a>
            <a 
              href="https://a1198.itch.io/" 
              className="social-icon hover:scale-110 transition-transform" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-itch-io text-5xl text-[#FA5C5C] hover:text-[#E13E3E]"></i>
            </a>
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">Feel free to reach out!</p>
            <p>I'm always open to discussing new projects and opportunities. I'm broke pls hire me.</p>
          </div>
        </div>
      </div>
    </div>
  );
}