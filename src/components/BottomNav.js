'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, User, Mail } from 'lucide-react';

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/',
      icon: Home,
      label: 'Home',
      isActive: pathname === '/'
    },
    {
      href: '/about',
      icon: User,
      label: 'About',
      isActive: pathname === '/about'
    },
    {
      href: '/contact',
      icon: Mail,
      label: 'Contact',
      isActive: pathname === '/contact'
    }
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t border-white/20 shadow-lg md:hidden"
    >
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="relative">
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 ${
                  item.isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {item.isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-50 rounded-xl"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <Icon size={20} strokeWidth={item.isActive ? 2.5 : 2} />
                  <span className={`text-xs mt-1 font-medium ${
                    item.isActive ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {item.label}
                  </span>
                </div>
                {item.isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 w-1 h-1 bg-blue-600 rounded-full"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
      
      {/* Safe area for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-white/80 backdrop-blur-lg" />
    </motion.nav>
  );
};

export default BottomNav;