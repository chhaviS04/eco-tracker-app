import React, { useState } from 'react';
import { Home, Leaf, Target, Award, BookOpen, User, Info, CheckCircle, Droplet, Recycle, Lightbulb, Flower2, CalendarDays, Bell, Camera, Search, TrendingUp, Users, ShoppingBag, FileText, Bot, Globe, Settings, Sun, Wind, Cloud } from 'lucide-react';
const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  const [habitCompletions, setHabitCompletions] = useState(new Set());
  const [userStats, setUserStats] = useState({
    currentStreak: 0,
    longestStreak: 0,
    totalHabitsCompleted: 0,
    waterSaved: 0,
    co2Reduced: 0,
    joinDate: new Date().toISOString().split('T')[0] 
  });
  const [notification, setNotification] = useState(null);
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard 
          setCurrentPage={setCurrentPage}
          habitCompletions={habitCompletions}
          setHabitCompletions={setHabitCompletions}
          userStats={userStats}
          setUserStats={setUserStats}
          notification={notification}
          setNotification={setNotification}
        />;
      case 'habits':
        return <HabitsPage 
          habitCompletions={habitCompletions}
          setHabitCompletions={setHabitCompletions}
          userStats={userStats}
          setUserStats={setUserStats}
        />;
      case 'goals':
        return <GoalsPage />;
      case 'ecoTips':
        return <EcoTipsPage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'profile':
        return <ProfilePage userStats={userStats} />;
      case 'about':
        return <AboutPage />;
      case 'marketplace':
        return <MarketplacePage />;
      case 'summary':
        return <SummaryPage userStats={userStats} habitCompletions={habitCompletions} />;
      case 'community':
        return <CommunityPage />;
      default:
        return <Dashboard 
          setCurrentPage={setCurrentPage}
          habitCompletions={habitCompletions}
          setHabitCompletions={setHabitCompletions}
          userStats={userStats}
          setUserStats={setUserStats}
          notification={notification}
          setNotification={setNotification}
        />;
    }
  };

  return (    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 font-inter text-gray-800 flex flex-col lg:flex-row">
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
};

const Header = ({ title }) => (
  <header className="flex items-center justify-between p-4 bg-white shadow-sm rounded-xl mb-6">
    <h1 className="text-2xl font-bold text-green-700">{title}</h1>
    <div className="flex items-center space-x-3">
      <span className="text-lg font-medium hidden sm:block">Welcome, EcoWarrior!</span>
      <div className="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center text-white font-bold text-xl ring-2 ring-green-500">
        EW
      </div>
    </div>
  </header>
);

const Sidebar = ({ setCurrentPage, currentPage }) => {
  const navItems = [
    { name: 'Dashboard', icon: Home, page: 'dashboard' },
    { name: 'Track Habits', icon: CheckCircle, page: 'habits' },
    { name: 'Set Goals', icon: Target, page: 'goals' },
    { name: 'Eco Tips', icon: Leaf, page: 'ecoTips' },
    { name: 'Achievements', icon: Award, page: 'achievements' },
    { name: 'Community', icon: Users, page: 'community' },
    { name: 'Profile', icon: User, page: 'profile' },
    { name: 'About & Mission', icon: Info, page: 'about' },
    { name: 'Marketplace', icon: ShoppingBag, page: 'marketplace' },
    { name: 'Summary Report', icon: FileText, page: 'summary' },
  ];

  return (
    <aside className="hidden lg:block w-64 bg-white shadow-lg rounded-2xl m-4 p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-10">
          <Leaf className="w-10 h-10 text-green-600 mr-3" />
          <h2 className="text-3xl font-extrabold text-green-800">EcoTracker</h2>
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-3">
                <button
                  onClick={() => setCurrentPage(item.page)}
                  className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ease-in-out
                    ${currentPage === item.page ? 'bg-green-100 text-green-700 font-semibold shadow-inner' : 'text-gray-600 hover:bg-green-50 hover:text-green-600'}
                  `}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-8 text-sm text-gray-500">
        <p>&copy; 2025 EcoTracker. All rights reserved.</p>
      </div>
    </aside>
  );
};

const Navbar = ({ setCurrentPage, currentPage }) => {
  const navItems = [
    { name: 'Dashboard', icon: Home, page: 'dashboard' },
    { name: 'Habits', icon: CheckCircle, page: 'habits' },
    { name: 'Tips', icon: Leaf, page: 'ecoTips' },
    { name: 'Goals', icon: Target, page: 'goals' },
    { name: 'Profile', icon: User, page: 'profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 flex justify-around lg:hidden z-50 rounded-t-xl">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => setCurrentPage(item.page)}
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ease-in-out
            ${currentPage === item.page ? 'text-green-700 font-semibold' : 'text-gray-500 hover:text-green-600'}
          `}
        >
          <item.icon className="w-6 h-6 mb-1" />
          <span className="text-xs">{item.name}</span>
        </button>
      ))}
    </nav>
  );
};

const Dashboard = ({ 
  setCurrentPage, 
  habitCompletions, 
  setHabitCompletions, 
  userStats, 
  setUserStats, 
  notification, 
  setNotification 
}) => {
  const [showEcoTipDetails, setShowEcoTipDetails] = useState(null);
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your eco-friendly assistant! 🌱 I can help you with environmental tips, answer questions about sustainability, and track your progress. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const habits = [
    { id: 1, name: 'Reduce Plastic', icon: Recycle, color: 'blue' },
    { id: 2, name: 'Save Water', icon: Droplet, color: 'sky' },
    { id: 3, name: 'Compost Waste', icon: Flower2, color: 'yellow' },
    { id: 4, name: 'Use Public Transport', icon: TrendingUp, color: 'purple' },
    { id: 5, name: 'Meat-Free Day', icon: Leaf, color: 'pink' },
    { id: 6, name: 'Unplug Electronics', icon: Lightbulb, color: 'orange' },
  ];

  const ecoTips = [
    {
      id: 1,
      title: 'Recycle Right: Know Your Local Rules',
      description: 'Different areas have different recycling guidelines. Check your local municipality website to ensure your items are properly sorted.',
      fullContent: 'Recycling rules vary significantly by location. Contact your local waste management facility or check your municipality\'s website for specific guidelines. Common recyclables include clean paper, cardboard, aluminum cans, glass bottles, and certain plastics. Remember to rinse containers and remove caps when required. Proper sorting helps ensure materials are actually recycled rather than sent to landfills.',
      icon: Recycle,
      color: 'green',
    },
    {
      id: 2,
      title: 'Conserve Water: Shorten Your Showers',
      description: 'Cutting your shower time by just a few minutes can save gallons of water each week. Install a low-flow showerhead for even more savings.',
      fullContent: 'A typical shower uses 2.5 gallons of water per minute. By reducing your shower time from 10 to 5 minutes, you can save 12.5 gallons per shower! Over a year, this adds up to thousands of gallons. Additional water-saving tips: fix leaky faucets immediately, turn off water while brushing teeth, and consider collecting shower water while it warms up for watering plants.',
      icon: Droplet,
      color: 'blue',
    },
    {
      id: 3,
      title: 'Energy Saving: Unplug Chargers',
      description: 'Even when not charging a device, plugged-in chargers can draw "phantom" power. Unplug them to save energy and reduce your electricity bill.',
      fullContent: 'Phantom loads or vampire power can account for up to 10% of your home\'s electricity usage. Common culprits include phone chargers, TVs, computers, and other electronics in standby mode. Use power strips to easily disconnect multiple devices at once, or invest in smart power strips that automatically cut power to devices in standby mode.',
      icon: Lightbulb,      color: 'yellow',
    },
  ];  const handleLogHabit = (habitId) => {
    const newCompletions = new Set(habitCompletions);
    const habit = habits.find(h => h.id === habitId);
    
    if (habitCompletions.has(habitId)) {
      newCompletions.delete(habitId);      setNotification(`${habit.name} unmarked. Keep going!`);
      
      setUserStats(prev => ({
        ...prev,
        totalHabitsCompleted: Math.max(0, prev.totalHabitsCompleted - 1),
        waterSaved: Math.max(0, prev.waterSaved - getHabitImpact(habit.name).water),
        co2Reduced: Math.max(0, prev.co2Reduced - getHabitImpact(habit.name).co2)
      }));    } else {
      newCompletions.add(habitId);
      const allHabitsWillBeCompleted = newCompletions.size === habits.length;
      
      if (allHabitsWillBeCompleted) {
        setNotification(`🎉 Amazing! All habits completed for today! Streak building! 🌟`);      } else {
        setNotification(`Great job! ${habit.name} completed! 🌱`);
      }
        const impact = getHabitImpact(habit.name);
      const newCompletionCount = newCompletions.size;
      const allHabitsCompleted = newCompletionCount === habits.length;
      
      setUserStats(prev => {
        const newStats = {
          ...prev,
          totalHabitsCompleted: prev.totalHabitsCompleted + 1,
          waterSaved: prev.waterSaved + impact.water,
          co2Reduced: prev.co2Reduced + impact.co2        };
        
        if (allHabitsCompleted && prev.currentStreak === newCompletionCount - 1) {
          newStats.currentStreak = prev.currentStreak + 1;
          newStats.longestStreak = Math.max(prev.longestStreak, newStats.currentStreak);
        } else if (newCompletionCount === 1 && prev.currentStreak === 0) {
          newStats.currentStreak = 0;
        }
        
        return newStats;
      });
    }    
    setHabitCompletions(newCompletions);
    
    setTimeout(() => setNotification(null), 3000);
  };

  const getHabitImpact = (habitName) => {
    const impacts = {
      'Reduce Plastic': { water: 15, co2: 2.5 },
      'Save Water': { water: 50, co2: 1.8 },
      'Compost Waste': { water: 5, co2: 3.2 },
      'Use Public Transport': { water: 8, co2: 4.5 },
      'Meat-Free Day': { water: 25, co2: 6.1 },
      'Unplug Electronics': { water: 2, co2: 2.8 }
    };    return impacts[habitName] || { water: 0, co2: 0 };
  };

  const handleReadMore = (tipId) => {
    setShowEcoTipDetails(tipId === showEcoTipDetails ? null : tipId);
  };  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: chatInput,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };
    setChatMessages(prev => [...prev, newMessage]);
    setChatInput('');

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      const lowerInput = newMessage.text.toLowerCase();
      let botResponse = generateSmartResponse(lowerInput);

      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000 + Math.random() * 1000);
  };

  const generateSmartResponse = (input) => {
    const completionRate = Math.round((habitCompletions.size / habits.length) * 100);    const hasActiveStreak = userStats.currentStreak > 0;
    const hasCompletedHabits = userStats.totalHabitsCompleted > 0;

    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      const greetings = [
        `Hello! 🌱 I see you've completed ${habitCompletions.size} habits today. How can I help you on your eco journey?`,
        `Hi there! Your current completion rate is ${completionRate}%. What would you like to know about sustainable living?`,
        hasActiveStreak 
          ? `Hey! Awesome ${userStats.currentStreak}-day streak! 🔥 How can I support your green lifestyle today?`
          : `Hello! Ready to start building some eco-friendly habits? I'm here to help! 🌿`
      ];      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    if (input.includes('progress') || input.includes('stats') || input.includes('how am i doing')) {
      return `Great question! Here's your current progress:
      
📊 Today: ${habitCompletions.size}/${habits.length} habits completed (${completionRate}%)
🔥 Current streak: ${userStats.currentStreak} days
💧 Water saved: ${userStats.waterSaved}L
🌍 CO2 reduced: ${userStats.co2Reduced.toFixed(1)}kg
🏆 Total habits completed: ${userStats.totalHabitsCompleted}

${completionRate === 100 ? "Perfect day! You're crushing it! 🎉" : 
  completionRate >= 50 ? "You're doing great! Keep it up! 💪" :   "Every step counts! Let's get those habits going! 🌱"}`;
    }

    if (input.includes('water') || input.includes('save water')) {
      const waterHabitCompleted = habitCompletions.has(2);
      return waterHabitCompleted 
        ? `Excellent! You've already logged your water-saving habit today! 💧 You've saved ${userStats.waterSaved}L so far. Try taking shorter showers, fixing leaks, and using a water-efficient dishwasher.`
        : `Water conservation is crucial! 💧 Try: shorter showers (save 12.5L per minute), fix leaky faucets, collect rainwater for plants, and run dishwashers only when full. Don't forget to log your water-saving habit!`;
    }

    if (input.includes('plastic') || input.includes('reduce plastic')) {
      const plasticHabitCompleted = habitCompletions.has(1);
      return plasticHabitCompleted 
        ? `Way to go on reducing plastic today! 🌟 Keep it up with reusable bags, water bottles, and choosing products with minimal packaging.`
        : `Reducing plastic is so important! 🚫🥤 Use reusable bags and bottles, choose glass/metal containers, buy in bulk, and avoid single-use items. Log this habit when you make plastic-free choices!`;
    }

    if (input.includes('transport') || input.includes('public transport') || input.includes('commute')) {
      const transportHabitCompleted = habitCompletions.has(4);
      return transportHabitCompleted 
        ? `Great job using eco-friendly transport today! 🚌 You're reducing CO2 emissions significantly. Consider carpooling, biking, or walking for even more impact!`        : `Sustainable transport makes a huge difference! 🚌🚲 Try public transport, carpooling, biking, or walking. Even one car-free trip per day helps! Don't forget to log it as a habit.`;
    }

    if (input.includes('motivation') || input.includes('encourage') || input.includes('hard')) {
      const motivationalResponses = [
        `Remember: every small action creates ripples of positive change! 🌊 Your ${userStats.totalHabitsCompleted} completed habits have already made a difference.`,
        hasActiveStreak 
          ? `Your ${userStats.currentStreak}-day streak shows real commitment! 🔥 You're building lasting habits that benefit our planet.`
          : `Starting is the hardest part, and you're here! 🌱 Each habit you complete builds momentum for bigger changes.`,
        `You've saved ${userStats.waterSaved}L of water and reduced ${userStats.co2Reduced.toFixed(1)}kg of CO2! 🌍 That's real impact!`
      ];      return motivationalResponses[Math.floor(Math.random() * motivationalResponses.length)];
    }

    if (input.includes('tip') || input.includes('advice') || input.includes('suggest')) {
      const currentTip = ecoTips[Math.floor(Math.random() * ecoTips.length)];
      return `Here's a great eco-tip for you! 💡

${currentTip.title}
${currentTip.description}

Want the full details? Check out the Eco Tips section on your dashboard!`;
    }

    if (input.includes('goal') || input.includes('target')) {
      return `Setting goals keeps you motivated! 🎯 Visit the Goals page to set weekly and monthly targets. Based on your current progress, I'd suggest aiming for ${Math.max(1, Math.ceil(habits.length * 0.8))} habits per day!`;
    }

    if (input.includes('achievement') || input.includes('reward')) {      return `Achievements celebrate your progress! 🏆 Check your Achievements page to see unlocked badges. You're building an impressive eco-profile!`;
    }

    if (input.includes('climate') || input.includes('global warming') || input.includes('environment')) {      return `Climate action starts with individuals like you! 🌍 Your daily habits contribute to reducing greenhouse gases, conserving resources, and protecting ecosystems. Every ${userStats.co2Reduced.toFixed(1)}kg of CO2 you've prevented matters!`;
    }

    const contextualDefaults = [
      completionRate === 0 
        ? "I'd love to help you get started! Try completing one habit today - maybe reducing plastic use or saving water? 🌱"
        : `With ${completionRate}% completion today, you're on the right track! What specific eco-topic interests you?`,
      hasCompletedHabits 
        ? `You've completed ${userStats.totalHabitsCompleted} habits total! I can help with tips, motivation, or answering any environmental questions. What's on your mind?`
        : "I'm here to support your eco journey! I can provide tips, track your progress, or answer environmental questions. What would you like to explore?",
      `Based on your ${userStats.waterSaved}L water saved and ${userStats.co2Reduced.toFixed(1)}kg CO2 reduced, you're making real impact! How can I help you do even more?`
    ];

    return contextualDefaults[Math.floor(Math.random() * contextualDefaults.length)];
  };
  return (
    <div className="space-y-6 pb-20 lg:pb-4 relative">
      <Header title="Dashboard" />

      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
          {notification}        </div>
      )}      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">Welcome, EcoWarrior!</h2>
        <p className="text-gray-600 text-lg">Your actions make a difference. Let's track your positive impact!</p>
        
        {habitCompletions.size === 0 && (
          <div className="mt-4 inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <Target className="w-5 h-5 mr-2" />
            <span className="font-medium">Ready to start your eco journey? Complete your first habit!</span>
          </div>
        )}
        
        {habitCompletions.size > 0 && habitCompletions.size < habits.length && (
          <div className="mt-4 inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">{habitCompletions.size} habit{habitCompletions.size !== 1 ? 's' : ''} completed today! Keep going!</span>
          </div>
        )}
        
        {habitCompletions.size === habits.length && (
          <div className="mt-4 inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 mr-2" />
            <span className="font-medium">🎉 Perfect day! All {habits.length} habits completed!</span>          </div>
        )}
        
        {(userStats.waterSaved > 0 || userStats.co2Reduced > 0) && (
          <div className="mt-4 text-sm text-gray-600">
            <p>Your impact so far: <span className="font-semibold text-green-600">{userStats.waterSaved}L water saved</span> & <span className="font-semibold text-green-600">{userStats.co2Reduced.toFixed(1)}kg CO2 reduced</span></p>
          </div>
        )}      </div>

      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Track Daily Habits</h2>        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {habits.map((habit) => (
            <HabitCard 
              key={habit.id} 
              habit={habit} 
              isCompleted={habitCompletions.has(habit.id)}
              onLogHabit={handleLogHabit}
            />          ))}
        </div>        <button 
          onClick={() => setCurrentPage('habits')}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
        >
          Add Custom Habit
        </button>
      </section>      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Your Progress Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProgressChart 
            title="Habit Completion Rate" 
            value={`${Math.round((habitCompletions.size / habits.length) * 100)}%`} 
            description={`${habitCompletions.size} of ${habits.length} habits completed today`} 
          />
          <ProgressChart 
            title="Current Streak" 
            value={userStats.currentStreak === 0 ? "Start Today!" : `${userStats.currentStreak} Days`} 
            description={userStats.longestStreak > 0 ? `Longest streak: ${userStats.longestStreak} Days` : "Complete all daily habits to build your streak!"} 
          />
          <ProgressChart 
            title="Water Saved" 
            value={userStats.waterSaved > 0 ? `${userStats.waterSaved} Liters` : "0 Liters"} 
            description={userStats.waterSaved > 0 ? "Great conservation!" : "Start saving by completing water-related habits"} 
          />
          <ProgressChart 
            title="CO2 Reduced" 
            value={userStats.co2Reduced > 0 ? `${userStats.co2Reduced.toFixed(1)} kg` : "0 kg"} 
            description={userStats.co2Reduced > 0 ? "Amazing climate impact!" : "Begin your carbon reduction journey today"} 
          />        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-700">{userStats.totalHabitsCompleted}</div>
            <div className="text-sm text-gray-600">Total Habits Completed</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-700">
              {Math.floor((new Date() - new Date(userStats.joinDate)) / (1000 * 60 * 60 * 24)) + 1}
            </div>
            <div className="text-sm text-gray-600">Days Active</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-700">
              {habitCompletions.size >= habits.length ? "Perfect!" : "In Progress"}
            </div>
            <div className="text-sm text-gray-600">Today's Status</div>
          </div>        </div>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Tips for You</h2>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ecoTips.map((tip) => (
            <EcoTipCard 
              key={tip.id} 
              tip={tip} 
              isExpanded={showEcoTipDetails === tip.id}
              onReadMore={handleReadMore}
            />          ))}
        </div>        <button 
          onClick={() => setCurrentPage('ecoTips')}
          className="mt-6 w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200"
        >
          Explore More Tips
        </button>
      </section>      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          aria-label="Open chatbot"
        >
          <Bot className="w-8 h-8" />        </button>
      )}

      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-gray-200">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-green-600 text-white rounded-t-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Eco Assistant</h3>
                <p className="text-sm text-green-100">Your sustainable living guide</p>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)} 
              className="text-green-100 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.sender === 'bot' 
                    ? 'bg-gray-100 text-gray-800 rounded-bl-none' 
                    : 'bg-green-600 text-white rounded-br-none'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">{msg.timestamp}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>              </div>
            )}
          </div>          <div className="p-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-3">
              <button 
                onClick={() => setChatInput("How am I doing with my progress?")}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs hover:bg-green-200 transition-colors"
              >
                📊 My Progress
              </button>
              <button 
                onClick={() => setChatInput("Give me an eco tip")}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-blue-200 transition-colors"
              >
                💡 Get Tip
              </button>
              <button 
                onClick={() => setChatInput("I need motivation")}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs hover:bg-purple-200 transition-colors"
              >
                🔥 Motivate Me
              </button>
            </div>
            
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Ask me about eco-friendly tips..."
              />
              <button 
                onClick={handleSendMessage}
                disabled={!chatInput.trim()}
                className="px-6 py-3 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const HabitCard = ({ habit, isCompleted, onLogHabit }) => (
  <div className={`p-4 rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-200 ${
    isCompleted ? 'bg-green-100 ring-2 ring-green-300' : 'bg-green-50'
  }`}>
    <div className={`p-3 rounded-full bg-${habit.color}-200 text-${habit.color}-700 mb-3 ${
      isCompleted ? 'ring-2 ring-green-400' : ''
    }`}>
      <habit.icon className="w-8 h-8" />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{habit.name}</h3>
    {isCompleted && (
      <div className="flex items-center text-green-600 mb-2">
        <CheckCircle className="w-5 h-5 mr-1" />
        <span className="text-sm font-medium">Completed!</span>
      </div>
    )}
    <button 
      onClick={() => onLogHabit(habit.id)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-md ${
        isCompleted
          ? 'bg-green-600 text-white hover:bg-green-700'
          : 'bg-green-500 text-white hover:bg-green-600'
      }`}
    >
      {isCompleted ? 'Logged ✓' : 'Log Habit'}
    </button>
  </div>
);

const ProgressChart = ({ title, value, description }) => {
  const getProgressWidth = () => {
    if (title === "Habit Completion Rate") {
      return value; // Already in percentage format    } else if (title === "Current Streak") {
      const numericValue = parseInt(value) || 0;
      return numericValue > 0 ? "100%" : "0%";
    } else {
      const numericValue = parseFloat(value) || 0;
      if (title.includes("Water")) {
        return `${Math.min((numericValue / 100) * 100, 100)}%`;
      } else if (title.includes("CO2")) {
        return `${Math.min((numericValue / 10) * 100, 100)}%`;
      }
      return "0%";
    }
  };

  return (
    <div className="bg-green-50 p-5 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">      <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
      <div className="text-4xl font-bold text-green-800 mb-2">{value}</div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="w-full h-4 bg-green-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500 rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: getProgressWidth() }}
        ></div>
      </div>
    </div>
  );
};

const EcoTipCard = ({ tip, isExpanded, onReadMore }) => (
  <div className="bg-white border border-green-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
    <div className="flex items-center mb-3">
      <div className={`p-2 rounded-full bg-${tip.color}-100 text-${tip.color}-600 mr-3`}>
        <tip.icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{tip.title}</h3>
    </div>
    <p className="text-gray-600 text-sm flex-grow mb-3">
      {isExpanded ? tip.fullContent : tip.description}
    </p>
    <button 
      onClick={() => onReadMore(tip.id)}
      className="text-green-600 hover:text-green-800 font-medium text-sm self-end transition-colors duration-200"
    >
      {isExpanded ? 'Show Less ↑' : 'Read More →'}
    </button>
  </div>
);

const PagePlaceholder = ({ title, icon: Icon }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white p-8 rounded-xl shadow-sm text-center">
    <Icon className="w-16 h-16 text-green-500 mb-4" />
    <h2 className="text-3xl font-bold text-green-700 mb-2">{title}</h2>
    <p className="text-gray-600 text-lg">This is the {title} page. Content coming soon!</p>
  </div>
);

const HabitsPage = ({ habitCompletions, setHabitCompletions, userStats, setUserStats }) => {
  const habits = [
    { id: 1, name: 'Reduce Plastic', icon: Recycle, color: 'blue', impact: { water: 5, co2: 2 } },
    { id: 2, name: 'Save Water', icon: Droplet, color: 'sky', impact: { water: 10, co2: 1 } },
    { id: 3, name: 'Compost Waste', icon: Flower2, color: 'yellow', impact: { water: 2, co2: 5 } },
    { id: 4, name: 'Use Public Transport', icon: TrendingUp, color: 'purple', impact: { water: 1, co2: 8 } },
    { id: 5, name: 'Meat-Free Day', icon: Leaf, color: 'pink', impact: { water: 15, co2: 12 } },
    { id: 6, name: 'Unplug Electronics', icon: Lightbulb, color: 'orange', impact: { water: 0, co2: 3 } },
  ];

  const toggleHabit = (habitId) => {
    const newCompletions = new Set(habitCompletions);
    if (newCompletions.has(habitId)) {
      newCompletions.delete(habitId);
    } else {
      newCompletions.add(habitId);
    }    setHabitCompletions(newCompletions);

    const habit = habits.find(h => h.id === habitId);
    if (habit) {
      const multiplier = newCompletions.has(habitId) ? 1 : -1;
      setUserStats(prev => ({
        ...prev,
        waterSaved: Math.max(0, prev.waterSaved + (habit.impact.water * multiplier)),
        co2Reduced: Math.max(0, prev.co2Reduced + (habit.impact.co2 * multiplier)),
        totalHabitsCompleted: prev.totalHabitsCompleted + multiplier
      }));
    }
  };

  return (
    <div className="space-y-6 pb-20 lg:pb-4">      <Header title="Track Daily Habits" />
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Today's Habits</h2>        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {habits.map((habit) => (
            <div key={habit.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-green-50 transition-colors">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleHabit(habit.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    habitCompletions.has(habit.id) ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-green-400'
                  }`}
                >
                  {habitCompletions.has(habit.id) && <CheckCircle className="w-4 h-4 text-white" />}
                </button>
                <span className={`font-medium ${habitCompletions.has(habit.id) ? 'text-green-700' : 'text-gray-700'}`}>
                  {habit.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Impact: {habit.impact.water}L water, {habit.impact.co2}kg CO₂</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  habitCompletions.has(habit.id) ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {habitCompletions.has(habit.id) ? 'Done' : 'Pending'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GoalsPage = () => {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Reduce Water Usage', target: 100, current: 65, unit: 'liters saved' },
    { id: 2, title: 'Plastic-Free Week', target: 7, current: 3, unit: 'days completed' },
    { id: 3, title: 'Carbon Footprint', target: 50, current: 32, unit: 'kg CO2 reduced' },
  ]);

  return (
    <div className="space-y-6 pb-20 lg:pb-4">
      <Header title="Environmental Goals" />
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Current Goals</h2>
        <div className="space-y-4">
          {goals.map((goal) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <div key={goal.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{goal.title}</h3>
                  <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {goal.current} / {goal.target} {goal.unit}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const EcoTipsPage = () => {
  const tips = [
    { id: 1, category: 'Water', title: 'Fix Leaky Faucets', description: 'A single drip per second can waste over 3,000 gallons per year.', icon: Droplet },
    { id: 2, category: 'Energy', title: 'LED Light Bulbs', description: 'LED bulbs use 75% less energy than incandescent bulbs.', icon: Lightbulb },
    { id: 3, category: 'Waste', title: 'Composting Basics', description: 'Composting reduces landfill waste and creates nutrient-rich soil.', icon: Recycle },
    { id: 4, category: 'Transport', title: 'Bike to Work', description: 'Biking just 10 miles per week saves 500 pounds of CO2 annually.', icon: Wind },
    { id: 5, category: 'Food', title: 'Plant-Based Meals', description: 'One plant-based meal saves 2.5 pounds of CO2 emissions.', icon: Leaf },
    { id: 6, category: 'Home', title: 'Smart Thermostat', description: 'Can reduce heating and cooling costs by up to 23%.', icon: Settings },
  ];

  return (
    <div className="space-y-6 pb-20 lg:pb-4">
      <Header title="Eco Tips Library" />
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Environmental Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip) => (
            <div key={tip.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <tip.icon className="w-6 h-6 text-green-600 mr-2" />
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                  {tip.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AchievementsPage = () => {
  const achievements = [
    { id: 1, title: 'Water Warrior', description: 'Saved 500+ liters of water', icon: Droplet, unlocked: true },
    { id: 2, title: 'Plastic Fighter', description: 'Avoided plastic for 7 days', icon: Recycle, unlocked: true },
    { id: 3, title: 'Green Commuter', description: 'Used public transport 20 times', icon: TrendingUp, unlocked: false },
    { id: 4, title: 'Energy Saver', description: 'Reduced energy usage by 30%', icon: Lightbulb, unlocked: true },
    { id: 5, title: 'Eco Master', description: 'Complete all habits for 30 days', icon: Award, unlocked: false },
    { id: 6, title: 'Plant Parent', description: 'Started composting', icon: Flower2, unlocked: false },
  ];

  return (
    <div className="space-y-6 pb-20 lg:pb-4">
      <Header title="Achievements" />
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Your Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`p-4 border rounded-lg text-center ${
              achievement.unlocked ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
            }`}>
              <achievement.icon className={`w-12 h-12 mx-auto mb-3 ${
                achievement.unlocked ? 'text-green-600' : 'text-gray-400'
              }`} />
              <h3 className={`text-lg font-semibold mb-2 ${
                achievement.unlocked ? 'text-green-700' : 'text-gray-500'
              }`}>
                {achievement.title}
              </h3>
              <p className={`text-sm ${
                achievement.unlocked ? 'text-green-600' : 'text-gray-400'
              }`}>
                {achievement.description}
              </p>
              {achievement.unlocked && (
                <span className="inline-block mt-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                  Unlocked!
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProfilePage = ({ userStats }) => {
  const [profile, setProfile] = useState({
    name: 'EcoWarrior',
    email: 'eco@warrior.com',
    joinDate: userStats?.joinDate || '2025-01-01',
    totalPoints: 1250,
    level: 'Green Champion'
  });

  return (
    <div className="space-y-6 pb-20 lg:pb-4">
      <Header title="Profile" />
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-green-300 rounded-full flex items-center justify-center text-white font-bold text-2xl ring-4 ring-green-500 mr-4">
            EW
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-700">{profile.name}</h2>
            <p className="text-gray-600">{profile.level}</p>
            <p className="text-sm text-gray-500">Member since {new Date(profile.joinDate).toLocaleDateString()}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-700">{profile.totalPoints}</div>
            <div className="text-sm text-gray-600">Total Points</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-700">{userStats?.totalHabitsCompleted || 0}</div>
            <div className="text-sm text-gray-600">Habits Completed</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-700">{userStats?.currentStreak || 0}</div>
            <div className="text-sm text-gray-600">Current Streak</div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              value={profile.name}
              className="w-full p-2 border rounded-lg"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              value={profile.email}
              className="w-full p-2 border rounded-lg"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="space-y-6 pb-20 lg:pb-4">
    <Header title="About & Mission" />
    
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h2>
      <p className="text-gray-600 mb-6">
        EcoTracker empowers individuals to make a positive environmental impact through daily habit tracking 
        and community engagement. Every small action counts towards a sustainable future.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <Globe className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Global Impact</h3>
          <p className="text-gray-600 text-sm">Track your contribution to global environmental goals</p>
        </div>
        <div className="text-center">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Community</h3>
          <p className="text-gray-600 text-sm">Connect with like-minded environmental enthusiasts</p>
        </div>
        <div className="text-center">
          <Target className="w-12 h-12 text-purple-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Goals</h3>
          <p className="text-gray-600 text-sm">Set and achieve meaningful environmental targets</p>
        </div>
      </div>
    </div>
  </div>
);

const MarketplacePage = () => {
  const products = [    { 
      id: 1, 
      name: 'Reusable Water Bottle', 
      price: '$25', 
      eco: '95% plastic reduction', 
      image: '🍶',
      amazonLink: 'https://amazon.com/s?k=reusable+water+bottle+stainless+steel',
      flipkartLink: 'https://flipkart.com/search?q=reusable%20water%20bottle'
    },
    { 
      id: 2, 
      name: 'Solar Power Bank', 
      price: '$45', 
      eco: '100% renewable energy', 
      image: '🔋',
      amazonLink: 'https://amazon.com/s?k=solar+power+bank+portable+charger',
      flipkartLink: 'https://flipkart.com/search?q=solar%20power%20bank'
    },
    { 
      id: 3, 
      name: 'Bamboo Toothbrush Set', 
      price: '$15', 
      eco: 'Biodegradable', 
      image: '🪥',
      amazonLink: 'https://amazon.com/s?k=bamboo+toothbrush+set+biodegradable',
      flipkartLink: 'https://flipkart.com/search?q=bamboo%20toothbrush'
    },    { 
      id: 4, 
      name: 'Organic Cotton Bags', 
      price: '$20', 
      eco: 'Zero plastic packaging', 
      image: '👜',
      amazonLink: 'https://amazon.com/s?k=organic+cotton+reusable+bags',
      flipkartLink: 'https://flipkart.com/search?q=organic%20cotton%20bags'
    },
    { 
      id: 5, 
      name: 'LED Smart Bulbs', 
      price: '$30', 
      eco: '75% energy savings', 
      image: '💡',
      amazonLink: 'https://amazon.com/s?k=led+smart+bulbs+energy+efficient',
      flipkartLink: 'https://flipkart.com/search?q=led%20smart%20bulbs'
    },
    { 
      id: 6, 
      name: 'Compost Bin', 
      price: '$40', 
      eco: 'Reduce food waste', 
      image: '🗂️',
      amazonLink: 'https://amazon.com/s?k=kitchen+compost+bin+countertop',
      flipkartLink: 'https://flipkart.com/search?q=compost%20bin'
    },
    { 
      id: 7, 
      name: 'Solar Garden Lights', 
      price: '$35', 
      eco: 'Zero electricity cost', 
      image: '🌞',
      amazonLink: 'https://www.amazon.com/s?k=solar+garden+lights',
      flipkartLink: 'https://www.flipkart.com/search?q=solar%20garden%20lights'
    },
    { 
      id: 8, 
      name: 'Stainless Steel Straws', 
      price: '$12', 
      eco: 'Eliminates plastic straws', 
      image: '🥤',
      amazonLink: 'https://www.amazon.com/s?k=stainless+steel+straws',
      flipkartLink: 'https://www.flipkart.com/search?q=stainless%20steel%20straws'
    },
    { 
      id: 9, 
      name: 'Eco-Friendly Lunch Box', 
      price: '$28', 
      eco: 'BPA-free & sustainable', 
      image: '🍱',
      amazonLink: 'https://www.amazon.com/s?k=eco+friendly+lunch+box',
      flipkartLink: 'https://www.flipkart.com/search?q=eco%20friendly%20lunch%20box'
    },
    { 
      id: 10, 
      name: 'Bamboo Cutting Board', 
      price: '$22', 
      eco: 'Renewable bamboo wood', 
      image: '🪵',
      amazonLink: 'https://www.amazon.com/s?k=bamboo+cutting+board',
      flipkartLink: 'https://www.flipkart.com/search?q=bamboo%20cutting%20board'
    },
    { 
      id: 11, 
      name: 'Reusable Food Wraps', 
      price: '$18', 
      eco: 'Replace plastic wrap', 
      image: '🌯',
      amazonLink: 'https://www.amazon.com/s?k=reusable+food+wraps',
      flipkartLink: 'https://www.flipkart.com/search?q=reusable%20food%20wraps'
    },
    { 
      id: 12, 
      name: 'Plant-Based Soap Bars', 
      price: '$16', 
      eco: 'Chemical-free & natural', 
      image: '🧼',
      amazonLink: 'https://www.amazon.com/s?k=plant+based+soap+bars',
      flipkartLink: 'https://www.flipkart.com/search?q=plant%20based%20soap%20bars'
    },
    { 
      id: 13, 
      name: 'Energy-Efficient Air Purifier', 
      price: '$120', 
      eco: 'Low power consumption', 
      image: '🌬️',
      amazonLink: 'https://www.amazon.com/s?k=energy+efficient+air+purifier',
      flipkartLink: 'https://www.flipkart.com/search?q=energy%20efficient%20air%20purifier'
    },
    { 
      id: 14, 
      name: 'Organic Cotton Towels', 
      price: '$32', 
      eco: 'Pesticide-free cotton', 
      image: '🏖️',
      amazonLink: 'https://www.amazon.com/s?k=organic+cotton+towels',
      flipkartLink: 'https://www.flipkart.com/search?q=organic%20cotton%20towels'
    },
    { 
      id: 15, 
      name: 'Smart Water Leak Detector', 
      price: '$55', 
      eco: 'Prevents water waste', 
      image: '💧',
      amazonLink: 'https://www.amazon.com/s?k=smart+water+leak+detector',
      flipkartLink: 'https://www.flipkart.com/search?q=smart%20water%20leak%20detector'
    },
    { 
      id: 16, 
      name: 'Recycled Paper Notebooks', 
      price: '$14', 
      eco: '100% recycled paper', 
      image: '📓',
      amazonLink: 'https://www.amazon.com/s?k=recycled+paper+notebooks',
      flipkartLink: 'https://www.flipkart.com/search?q=recycled%20paper%20notebooks'
    },
    { 
      id: 17, 
      name: 'Hemp Backpack', 
      price: '$65', 
      eco: 'Sustainable hemp fiber', 
      image: '🎒',
      amazonLink: 'https://www.amazon.com/s?k=hemp+backpack',
      flipkartLink: 'https://www.flipkart.com/search?q=hemp%20backpack'
    },
    { 
      id: 18, 
      name: 'Solar Phone Charger', 
      price: '$38', 
      eco: 'Renewable solar energy', 
      image: '📱',
      amazonLink: 'https://www.amazon.com/s?k=solar+phone+charger',
      flipkartLink: 'https://www.flipkart.com/search?q=solar%20phone%20charger'
    },
    { 
      id: 19, 
      name: 'Biodegradable Phone Case', 
      price: '$24', 
      eco: 'Compostable material', 
      image: '📲',
      amazonLink: 'https://www.amazon.com/s?k=biodegradable+phone+case',
      flipkartLink: 'https://www.flipkart.com/search?q=biodegradable%20phone%20case'
    },
    { 
      id: 20, 
      name: 'Rainwater Collection Kit', 
      price: '$85', 
      eco: 'Conserve water resources', 
      image: '☔',
      amazonLink: 'https://www.amazon.com/s?k=rainwater+collection+kit',
      flipkartLink: 'https://www.flipkart.com/search?q=rainwater%20collection%20kit'
    }
  ];  const openLink = (url) => {
    try {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log('Fallback: Opening link directly');
      window.open(url, '_blank');
    }
  };

  return (
    <div className="space-y-6 pb-20 lg:pb-4">
      <Header title="Eco Marketplace" />
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Sustainable Products</h2>
          <p className="text-gray-600">Discover eco-friendly alternatives for a greener lifestyle</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition-all duration-200 bg-white">
              <div className="text-4xl text-center mb-3">{product.image}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
              <div className="mb-3">
                <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  {product.eco}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-xl font-bold text-gray-800">{product.price}</span>
              </div>
                <div className="space-y-2">
                <button 
                  onClick={() => openLink(product.amazonLink)}
                  onAuxClick={() => openLink(product.amazonLink)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                  title={`Buy ${product.name} on Amazon`}
                >
                  <span>🛒</span>
                  <span>Buy on Amazon</span>
                </button>
                <button 
                  onClick={() => openLink(product.flipkartLink)}
                  onAuxClick={() => openLink(product.flipkartLink)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                  title={`Buy ${product.name} on Flipkart`}
                >
                  <span>🛍️</span>
                  <span>Buy on Flipkart</span>                </button>
                
                <div className="text-xs text-gray-500 text-center space-x-2">
                  <a 
                    href={product.amazonLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-800 underline"
                  >
                    Amazon Link
                  </a>
                  <span>|</span>
                  <a 
                    href={product.flipkartLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Flipkart Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-700 mb-2">🌱 Make a Difference</h3>
            <p className="text-green-600 text-sm">
              Every eco-friendly purchase contributes to a sustainable future. These products help reduce your carbon footprint while maintaining quality and functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryPage = ({ userStats, habitCompletions }) => {
  const habits = [
    { id: 1, name: 'Reduce Plastic', icon: Recycle, color: 'blue', impact: { water: 5, co2: 2 } },
    { id: 2, name: 'Save Water', icon: Droplet, color: 'sky', impact: { water: 10, co2: 1 } },
    { id: 3, name: 'Compost Waste', icon: Flower2, color: 'yellow', impact: { water: 2, co2: 5 } },
    { id: 4, name: 'Use Public Transport', icon: TrendingUp, color: 'purple', impact: { water: 1, co2: 8 } },
    { id: 5, name: 'Meat-Free Day', icon: Leaf, color: 'pink', impact: { water: 15, co2: 12 } },
    { id: 6, name: 'Unplug Electronics', icon: Lightbulb, color: 'orange', impact: { water: 0, co2: 3 } },
  ];

  const completionRate = habits.length > 0 ? Math.round((habitCompletions.size / habits.length) * 100) : 0;

  const weeklyData = [
    { day: 'Mon', habits: 5, co2: 2.5 },
    { day: 'Tue', habits: 6, co2: 3.2 },
    { day: 'Wed', habits: 4, co2: 2.1 },
    { day: 'Thu', habits: 6, co2: 3.0 },
    { day: 'Fri', habits: 5, co2: 2.8 },
    { day: 'Sat', habits: 3, co2: 1.5 },
    { day: 'Sun', habits: habitCompletions.size, co2: userStats?.co2Reduced || 0 },
  ];

  return (
    <div className="space-y-6 pb-20 lg:pb-4">
      <Header title="Summary Report" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-green-700">{completionRate}%</div>
          <div className="text-sm text-gray-600">Today's Completion</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-700">{userStats?.co2Reduced || 0} kg</div>
          <div className="text-sm text-gray-600">CO2 Saved</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-700">{userStats?.waterSaved || 0}L</div>
          <div className="text-sm text-gray-600">Water Saved</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-700">{userStats?.currentStreak || 0}</div>
          <div className="text-sm text-gray-600">Current Streak</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Weekly Performance</h2>
        <div className="space-y-2">
          {weeklyData.map((day, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">{day.day}</span>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{day.habits} habits</span>
                <span className="text-sm text-green-600">{day.co2} kg CO2 saved</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CommunityPage = () => {
  const leaderboard = [
    { rank: 1, name: 'GreenGuru', points: 2850, badge: '🏆' },
    { rank: 2, name: 'EcoMaster', points: 2650, badge: '🥈' },
    { rank: 3, name: 'NatureLover', points: 2400, badge: '🥉' },
    { rank: 4, name: 'You (EcoWarrior)', points: 1250, badge: '🌱' },
    { rank: 5, name: 'ClimateChamp', points: 1100, badge: '🌍' },
  ];

  return (
    <div className="space-y-6 pb-20 lg:pb-4">
      <Header title="Community Impact" />
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Global Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-700">12.5k</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-700">850 tons</div>
            <div className="text-sm text-gray-600">CO2 Saved</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-700">2.3M</div>
            <div className="text-sm text-gray-600">Habits Completed</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Leaderboard</h2>
        <div className="space-y-2">
          {leaderboard.map((user) => (
            <div key={user.rank} className={`flex items-center justify-between p-3 rounded-lg ${
              user.name.includes('You') ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{user.badge}</span>
                <div>
                  <span className="font-medium text-gray-700">{user.name}</span>
                  {user.name.includes('You') && <span className="text-green-600 text-sm ml-2">(That's you!)</span>}
                </div>
              </div>
              <span className="font-bold text-green-700">{user.points} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
