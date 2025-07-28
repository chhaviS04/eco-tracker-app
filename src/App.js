import React, { useState } from 'react';
import { Home, Leaf, Target, Award, BookOpen, User, Info, CheckCircle, Droplet, Recycle, Lightbulb, Flower2, CalendarDays, Bell, Camera, Search, TrendingUp, Users, ShoppingBag, FileText, Bot, Globe, Settings, Sun, Wind, Cloud } from 'lucide-react';

// Main App Component
const App = () => {
  // State to manage the current active page/view
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Helper function to render the correct page component
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'habits':
        return <HabitsPage />;
      case 'goals':
        return <GoalsPage />;
      case 'ecoTips':
        return <EcoTipsPage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'about':
        return <AboutPage />;
      case 'marketplace':
        return <MarketplacePage />;
      case 'summary':
        return <SummaryPage />;
      case 'community':
        return <CommunityPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 font-inter text-gray-800 flex flex-col lg:flex-row">
      {/* Sidebar for larger screens, Navbar for smaller screens */}
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {/* Main content area */}
      <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
};

// Header Component (for the top of the main content area)
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

// Sidebar Component for Desktop
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

// Navbar Component for Mobile (bottom fixed bar)
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

// Dashboard Page Component
const Dashboard = () => {
  const habits = [
    { id: 1, name: 'Reduce Plastic', icon: Recycle, color: 'blue' },
    { id: 2, name: 'Save Water', icon: Droplet, color: 'sky' },
    { id: 3, name: 'Compost Waste', icon: Flower2, color: 'yellow' }, // Changed Plant to Flower2
    { id: 4, name: 'Use Public Transport', icon: TrendingUp, color: 'purple' },
    { id: 5, name: 'Meat-Free Day', icon: Leaf, color: 'pink' },
    { id: 6, name: 'Unplug Electronics', icon: Lightbulb, color: 'orange' },
  ];

  const ecoTips = [
    {
      id: 1,
      title: 'Recycle Right: Know Your Local Rules',
      description: 'Different areas have different recycling guidelines. Check your local municipality website to ensure your items are properly sorted.',
      icon: Recycle,
      color: 'green',
    },
    {
      id: 2,
      title: 'Conserve Water: Shorten Your Showers',
      description: 'Cutting your shower time by just a few minutes can save gallons of water each week. Install a low-flow showerhead for even more savings.',
      icon: Droplet,
      color: 'blue',
    },
    {
      id: 3,
      title: 'Energy Saving: Unplug Chargers',
      description: 'Even when not charging a device, plugged-in chargers can draw "phantom" power. Unplug them to save energy and reduce your electricity bill.',
      icon: Lightbulb,
      color: 'yellow',
    },
  ];

  return (
    <div className="space-y-6 pb-20 lg:pb-4"> {/* Added padding-bottom for mobile navbar */}
      <Header title="Dashboard" />

      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">Welcome, EcoWarrior!</h2>
        <p className="text-gray-600 text-lg">Your actions make a difference. Let's track your positive impact!</p>
      </div>

      {/* Track Daily Habits Section */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Track Daily Habits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {habits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </div>
        <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
          Add Custom Habit
        </button>
      </section>

      {/* Progress Dashboard Section */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Your Progress Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProgressChart title="Habit Completion Rate" value="85%" description="Last 7 days" />
          <ProgressChart title="Current Streak" value="15 Days" description="Longest streak: 22 Days" />
          <ProgressChart title="Water Saved (Approx.)" value="500 Liters" description="This month" />
          <ProgressChart title="CO2 Reduced (Approx.)" value="20 kg" description="This month" />
        </div>
      </section>

      {/* Eco Tips Library Section */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Tips for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ecoTips.map((tip) => (
            <EcoTipCard key={tip.id} tip={tip} />
          ))}
        </div>
        <button className="mt-6 w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200">
          Explore More Tips
        </button>
      </section>
    </div>
  );
};

// Habit Card Component
const HabitCard = ({ habit }) => (
  <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className={`p-3 rounded-full bg-${habit.color}-200 text-${habit.color}-700 mb-3`}>
      <habit.icon className="w-8 h-8" />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{habit.name}</h3>
    <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors duration-200 shadow-md">
      Log Habit
    </button>
  </div>
);

// Progress Chart Placeholder Component
const ProgressChart = ({ title, value, description }) => (
  <div className="bg-green-50 p-5 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
    <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
    <div className="text-4xl font-bold text-green-800 mb-2">{value}</div>
    <p className="text-gray-600 text-sm">{description}</p>
    {/* Placeholder for actual chart, could be a simple bar or circle */}
    <div className="w-full h-4 bg-green-200 rounded-full mt-4 overflow-hidden">
      <div className="h-full bg-green-500 rounded-full" style={{ width: value }}></div>
    </div>
  </div>
);

// Eco Tip Card Component
const EcoTipCard = ({ tip }) => (
  <div className="bg-white border border-green-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
    <div className="flex items-center mb-3">
      <div className={`p-2 rounded-full bg-${tip.color}-100 text-${tip.color}-600 mr-3`}>
        <tip.icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{tip.title}</h3>
    </div>
    <p className="text-gray-600 text-sm flex-grow">{tip.description}</p>
    <button className="mt-4 text-green-600 hover:text-green-800 font-medium text-sm self-end">
      Read More &rarr;
    </button>
  </div>
);

// Placeholder Pages for Navigation
const PagePlaceholder = ({ title, icon: Icon }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white p-8 rounded-xl shadow-sm text-center">
    <Icon className="w-16 h-16 text-green-500 mb-4" />
    <h2 className="text-3xl font-bold text-green-700 mb-2">{title}</h2>
    <p className="text-gray-600 text-lg">This is the {title} page. Content coming soon!</p>
  </div>
);

const HabitsPage = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reduce Plastic', completed: false, streak: 5 },
    { id: 2, name: 'Save Water', completed: true, streak: 3 },
    { id: 3, name: 'Compost Waste', completed: false, streak: 0 },
    { id: 4, name: 'Use Public Transport', completed: true, streak: 7 },
    { id: 5, name: 'Meat-Free Day', completed: false, streak: 2 },
    { id: 6, name: 'Unplug Electronics', completed: true, streak: 4 },
  ]);

  const toggleHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  return (
    <div className="space-y-6 pb-20 lg:pb-4">
      <Header title="Track Daily Habits" />
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Today's Habits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {habits.map((habit) => (
            <div key={habit.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-green-50 transition-colors">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleHabit(habit.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    habit.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-green-400'
                  }`}
                >
                  {habit.completed && <CheckCircle className="w-4 h-4 text-white" />}
                </button>
                <span className={`font-medium ${habit.completed ? 'text-green-700' : 'text-gray-700'}`}>
                  {habit.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Streak: {habit.streak} days</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  habit.completed ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {habit.completed ? 'Done' : 'Pending'}
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

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'EcoWarrior',
    email: 'eco@warrior.com',
    joinDate: '2025-01-01',
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
            <div className="text-2xl font-bold text-blue-700">23</div>
            <div className="text-sm text-gray-600">Habits Completed</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-700">7</div>
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
  ];
  const openLink = (url) => {
    try {
      // Create a temporary anchor element to handle the navigation
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Fallback: try direct window.open
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
                  <span>Buy on Flipkart</span>
                </button>
                
                {/* Alternative text links for mobile/accessibility */}
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

const SummaryPage = () => {
  const weeklyData = [
    { day: 'Mon', habits: 5, co2: 2.5 },
    { day: 'Tue', habits: 6, co2: 3.2 },
    { day: 'Wed', habits: 4, co2: 2.1 },
    { day: 'Thu', habits: 6, co2: 3.0 },
    { day: 'Fri', habits: 5, co2: 2.8 },
    { day: 'Sat', habits: 3, co2: 1.5 },
    { day: 'Sun', habits: 4, co2: 2.2 },
  ];

  return (
    <div className="space-y-6 pb-20 lg:pb-4">
      <Header title="Summary Report" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-green-700">85%</div>
          <div className="text-sm text-gray-600">Weekly Completion</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-700">17.3 kg</div>
          <div className="text-sm text-gray-600">CO2 Saved</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-700">450L</div>
          <div className="text-sm text-gray-600">Water Saved</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-700">7</div>
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
