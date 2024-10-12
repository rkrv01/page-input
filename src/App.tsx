import React, { useState, useCallback } from 'react';
import { X } from 'lucide-react';

function App() {
  const [inputText, setInputText] = useState('');
  const [lastSpaceTime, setLastSpaceTime] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleDelete = useCallback(() => {
    setInputText('');
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === ' ') {
      const currentTime = new Date().getTime();
      if (currentTime - lastSpaceTime < 300) { // 300ms threshold for double-click
        e.preventDefault();
        handleDelete();
      }
      setLastSpaceTime(currentTime);
    }
  }, [lastSpaceTime, handleDelete]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative">
      <button
        onClick={handleDelete}
        className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
        aria-label="Delete"
      >
        <X size={24} />
      </button>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="flex-grow w-full p-4 text-lg border-none outline-none resize-none bg-transparent"
        placeholder="Start typing here... (Double-click space to clear)"
      />
    </div>
  );
}

export default App;