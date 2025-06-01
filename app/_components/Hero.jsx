"use client";
import React, { useState } from "react";
import lookup from "../_data/Lookup";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [LogoTitle, setLogoTitle] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (!LogoTitle.trim()) {
      setShowWarning(true);
      return;
    }
    router.push(`/create?title=${encodeURIComponent(LogoTitle.trim())}`);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-slate-50 to-indigo-100 px-6 py-12 rounded-3xl shadow-xl max-w-2xl mx-auto mt-5">
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4 text-center tracking-tight">
        {lookup.HeroHeading}
      </h1>
      <h2 className="text-xl font-semibold text-indigo-500 mb-6 text-center">
        {lookup.HeroSubheading}
      </h2>
      <p className="text-sm text-gray-600 max-w-md text-center leading-relaxed mb-8">
        {lookup.HeroDesc}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <input
          type="text"
          value={LogoTitle}
          onChange={(e) => {
            setLogoTitle(e.target.value);
            if (showWarning) setShowWarning(false);
          }}
          placeholder={lookup.InputTitlePlaceholder}
          className="px-4 py-3 rounded-xl border border-indigo-200 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64"
        />
        <button
          onClick={handleClick}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-400 text-white font-bold text-base shadow-md hover:from-indigo-600 hover:to-indigo-500 transition-all cursor-pointer"
        >
          Get Started
        </button>
      </div>

      {showWarning && (
        <p className="text-red-600 mt-4 text-sm font-medium">
          Please enter a logo title before continuing.
        </p>
      )}
    </section>
  );
};

export default Hero;
