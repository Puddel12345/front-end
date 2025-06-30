import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ChatPage from './components/ChatPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'chat'>('landing');

  return (
    <div className="min-h-screen">
      {currentPage === 'landing' ? (
        <LandingPage onStartChat={() => setCurrentPage('chat')} />
      ) : (
        <ChatPage onBack={() => setCurrentPage('landing')} />
      )}
    </div>
  );
}

export default App;