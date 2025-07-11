import React, { useState } from 'react';

const LanguageSelector = () => {
  const [selectedValue, setSelectedValue] = useState('english');

  const languages = [
    { value: 'english', label: '🌐 English' },
    { value: 'hindi', label: '🇮🇳 हिन्दी (Hindi)' },
    { value: 'mandarin', label: '🇨🇳 中文 (Mandarin)' },
    { value: 'spanish', label: '🇪🇸 Español (Spanish)' },
    { value: 'french', label: '🇫🇷 Français (French)' },
    { value: 'arabic', label: '🇦🇪 العربية (Arabic)' },
    { value: 'bengali', label: '🇧🇩 বাংলা (Bengali)' },
    { value: 'portuguese', label: '🇵🇹 Português (Portuguese)' },
    { value: 'russian', label: '🇷🇺 Русский (Russian)' },
    { value: 'japanese', label: '🇯🇵 日本語 (Japanese)' },
  ];

  return (
    <div className="relative inline-block">
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className="
          appearance-none
          h-9 sm:h-10
          min-w-[160px] max-w-[240px]
          bg-white hover:bg-gray-100
          rounded-full
          pl-4 pr-10
          text-gray-900
          font-bold
          text-sm sm:text-base
          cursor-pointer
          transition-all duration-200
          shadow-sm
          truncate
        "
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelector;
