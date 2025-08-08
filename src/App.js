import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, MessageCircle, Settings } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-card p-8 rounded-3xl mb-8 max-w-sm w-full"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4"
              >
                Hello World! 👋
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                Welcome to your mobile-friendly React app with beautiful glassmorphism design.
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="grid grid-cols-2 gap-4 w-full max-w-sm"
            >
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-sm text-gray-300">Fast</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">📱</div>
                <div className="text-sm text-gray-300">Mobile</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">✨</div>
                <div className="text-sm text-gray-300">Modern</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">🎨</div>
                <div className="text-sm text-gray-300">Beautiful</div>
              </div>
            </motion.div>
          </motion.div>
        );
      
      case 'profile':
        return (
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <div className="glass-card p-8 rounded-3xl max-w-sm w-full">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User size={40} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Your Profile</h2>
              <p className="text-gray-300">Manage your account settings and preferences.</p>
            </div>
          </motion.div>
        );
      
      case 'messages':
        return (
          <motion.div
            key="messages"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <div className="glass-card p-8 rounded-3xl max-w-sm w-full">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <MessageCircle size={40} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Messages</h2>
              <p className="text-gray-300">Stay connected with your conversations.</p>
            </div>
          </motion.div>
        );
      
      case 'settings':
        return (
          <motion.div
            key="settings"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <div className="glass-card p-8 rounded-3xl max-w-sm w-full">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Settings size={40} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Settings</h2>
              <p className="text-gray-300">Customize your app experience.</p>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-3xl"
        >
          <div className="animate-spin w-8 h-8 border-4 border-purple-400 border-t-transparent rounded-full mx-auto"></div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-header p-4 backdrop-blur-md bg-white/10 border-b border-white/20"
      >
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <h1 className="text-xl font-bold text-white">Hello World App</h1>
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden pb-20">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-0 left-0 right-0 glass-nav backdrop-blur-md bg-white/10 border-t border-white/20 px-4 py-2"
      >
        <div className="flex justify-around items-center max-w-sm mx-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                aria-label={tab.label}
              >
                <motion.div
                  animate={{ 
                    scale: isActive ? 1.1 : 1,
                    rotate: isActive ? [0, 10, -10, 0] : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent size={20} />
                </motion.div>
                <span className="text-xs mt-1 font-medium">{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 pb-20 pointer-events-none"
      >
        <div className="text-center">
          <p className="text-xs text-gray-400 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block">
            Made using PantheraBuilder
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;