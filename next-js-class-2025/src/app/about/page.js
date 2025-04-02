'use client';
import { useEffect, useState } from 'react';
import Menubar from "@/components/menubar";
import Link from 'next/link';

export default function About() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About Me</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
            <p className="text-lg text-gray-600">Faculty of Architecture, Industrial design Chulalongkorn University</p>
            <p className="text-lg text-gray-600">GPA 3.21</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Objective</h2>
            <p className="text-lg text-gray-600">To challenge my knowledge and skill at the professional level for an industrial designer career path in the future and experience in the organization to sense culture and real work in the industrial.</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Activities</h2>
            <ul className="list-disc list-inside text-lg text-gray-600">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <li>What if Yves Behar project in scissor. Work on model &amp; 3d printing process. FOUR-DIMENSIONAL DESIGN BASICS class</li>
              <li>Monday Coffin immersive experience sleeping capsule project. Work on models in modeling &amp; rendering. FORM-RELATED DESIGN class</li>
              <li>Jingu Mastery the Art toy project. Work on model &amp; 3d printing process. DIGITAL TECHNOLOGY FOR DESIGN class</li>
              <li>High school get point! the gamification project. Work on models in modeling &amp; rendering. SPACE AND TIME-RELATED DESIGN class</li>
              <li>Koh Kret space design for enhancing old cultural in new way of storytelling. Work on the showing models in modeling &amp; rendering. SPACE AND TIME-RELATED DESIGN class</li>
              <li>SketchUp Festival 2023 Design CONTEST 2023 Participated</li>
              <li>SCGP 2024 Participated</li>
              <li>Product UX/UI Design Program with KASIKORN Business + Technology Group</li>
              <li>Freelance on 3D modeling (Technical drawing for DIP-CA, Model for 3D print, etc.)</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>3D Product and 3D Printing (Rhinoceros, Blender)</li>
              <li>UX/UI design (Figma)</li>
              <li>Basic Graphic design (Photoshop, Illustrator)</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Language Skill</h2>
            <p className="text-lg text-gray-600">Speak and writes fluent English (CEFR C1)</p>
          </div>
        </div>
      </div>
    </div>
  );
}