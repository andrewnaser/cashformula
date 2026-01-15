'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// US States for location
const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
];

const firstNames = [
  'Sarah', 'Michael', 'Jennifer', 'David', 'Lisa', 'James', 'Mary', 'Robert',
  'Patricia', 'John', 'Linda', 'William', 'Barbara', 'Richard', 'Susan', 'Joseph',
  'Jessica', 'Thomas', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Betty', 'Matthew',
  'Margaret', 'Anthony', 'Sandra', 'Mark', 'Ashley', 'Donald', 'Kimberly', 'Steven',
  'Emily', 'Paul', 'Donna', 'Andrew', 'Michelle', 'Joshua', 'Dorothy', 'Kenneth',
  'Carol', 'Kevin', 'Amanda', 'Brian', 'Melissa', 'George', 'Deborah', 'Timothy'
];

const products = [
  'Kitchen Gadget', 'Fitness Tracker', 'Smart Watch', 'Wireless Earbuds', 'Air Fryer',
  'Robot Vacuum', 'Ring Light', 'Massage Gun', 'Portable Charger', 'Yoga Mat',
  'Electric Toothbrush', 'Hair Dryer', 'Coffee Maker', 'Blender', 'Instant Pot',
  'Gaming Headset', 'Webcam', 'Standing Desk', 'Ergonomic Chair', 'Water Bottle'
];

const actions = [
  { text: 'just earned', color: 'text-cash-green', icon: '💰' },
  { text: 'made a sale of', color: 'text-cash-green', icon: '🎉' },
  { text: 'received commission of', color: 'text-cash-green', icon: '✅' },
];

interface Notification {
  id: string;
  name: string;
  initial: string;
  amount: string;
  state: string;
  product: string;
  action: typeof actions[0];
  timeAgo: string;
}

function generateNotification(): Notification {
  const name = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const amount = (Math.floor(Math.random() * 150) + 27).toString();
  
  return {
    id: Date.now().toString() + Math.random(),
    name: `${name} ${lastName}.`,
    initial: name[0],
    amount: `$${amount}`,
    state: usStates[Math.floor(Math.random() * usStates.length)],
    product: products[Math.floor(Math.random() * products.length)],
    action: actions[Math.floor(Math.random() * actions.length)],
    timeAgo: Math.random() > 0.5 ? 'just now' : `${Math.floor(Math.random() * 5) + 1} min ago`,
  };
}

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function ProofPopup() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const newNotification = generateNotification();
      setNotification(newNotification);
      setIsVisible(true);

      // Hide after 6 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    };

    // Initial delay before first notification (3 seconds)
    const initialTimeout = setTimeout(showNotification, 3000);

    // Show new notification every 12-20 seconds
    const interval = setInterval(() => {
      showNotification();
    }, 12000 + Math.random() * 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && notification && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cash-green via-cash-emerald to-cash-green opacity-80 animate-pulse" />
            
            {/* Content */}
            <div className="relative m-[2px] rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-5">
              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 p-1.5 text-navy-500 hover:text-white transition-colors rounded-lg hover:bg-navy-700"
              >
                <CloseIcon />
              </button>

              <div className="flex items-start gap-4 pr-8">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cash-green to-cash-emerald flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-cash-green/30">
                    {notification.initial}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-cash-green rounded-full flex items-center justify-center border-2 border-navy-900">
                    <CheckCircleIcon />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Verified badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cash-green text-sm font-bold flex items-center gap-1.5">
                      {notification.action.icon} VERIFIED SALE
                    </span>
                  </div>

                  {/* Main text */}
                  <p className="text-base text-white font-medium leading-snug">
                    <span className="font-bold">{notification.name}</span>{' '}
                    <span className="text-navy-300">{notification.action.text}</span>{' '}
                    <span className="text-cash-green font-bold text-lg">{notification.amount}</span>
                  </p>

                  {/* Product */}
                  <p className="text-sm text-navy-400 mt-1">
                    from {notification.product}
                  </p>

                  {/* Location and time */}
                  <div className="flex items-center gap-3 mt-2 text-xs text-navy-500">
                    <span className="flex items-center gap-1">
                      <MapPinIcon />
                      {notification.state}
                    </span>
                    <span>•</span>
                    <span>{notification.timeAgo}</span>
                  </div>
                </div>
              </div>

              {/* Bottom social proof bar */}
              <div className="mt-4 pt-3 border-t border-navy-700 flex items-center justify-between text-xs">
                <span className="text-navy-400">
                  🔥 <span className="text-white font-medium">847</span> members earning today
                </span>
                <span className="text-cash-green font-medium">
                  $24,847 earned this hour
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
