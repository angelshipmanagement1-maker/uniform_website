import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
          <span className="text-white font-bold text-2xl">U</span>
        </div>
        <h2 className="text-xl font-bold text-blue-900 mb-2">UNIfactory</h2>
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-gray-600 mt-2">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
