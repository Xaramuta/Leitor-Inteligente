
import React, { useState } from 'react';
import TenderAnalyzer from './components/TenderAnalyzer';
import Chatbot from './components/Chatbot';

type Page = 'analyzer' | 'chatbot';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('analyzer');

  const renderPage = () => {
    switch (activePage) {
      case 'analyzer':
        return <TenderAnalyzer />;
      case 'chatbot':
        return <Chatbot />;
      default:
        return <TenderAnalyzer />;
    }
  };

  const navButtonClasses = (page: Page) => 
    `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out ${
      activePage === page 
      ? 'bg-brand-primary text-white shadow-md' 
      : 'text-text-secondary hover:bg-base-300 hover:text-text-primary'
    }`;

  return (
    <div className="min-h-screen bg-base-100 text-text-primary flex flex-col">
      <header className="bg-base-200 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-text-primary">Assistente IA</h1>
          <nav className="flex items-center space-x-1 bg-base-100 p-1 rounded-full">
            <button 
              onClick={() => setActivePage('analyzer')}
              className={navButtonClasses('analyzer')}
            >
              Analisador de Editais
            </button>
            <button 
              onClick={() => setActivePage('chatbot')}
              className={navButtonClasses('chatbot')}
            >
              Chatbot Geral
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {renderPage()}
      </main>
      <footer className="text-center p-4 text-xs text-text-secondary">
        <p>Desenvolvido com React, Tailwind CSS e Gemini API.</p>
      </footer>
    </div>
  );
};

export default App;