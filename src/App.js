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

const HabitsPage = () => <PagePlaceholder title="Track Daily Habits" icon={CheckCircle} />;
const GoalsPage = () => <PagePlaceholder title="Set Goals" icon={Target} />;
const EcoTipsPage = () => <PagePlaceholder title="Eco Tips Library" icon={Leaf} />;
const AchievementsPage = () => <PagePlaceholder title="Achievements" icon={Award} />;
const ProfilePage = () => <PagePlaceholder title="Profile Customization" icon={User} />;
const AboutPage = () => <PagePlaceholder title="About & Mission" icon={Info} />;
const MarketplacePage = () => <PagePlaceholder title="Eco Marketplace" icon={ShoppingBag} />;
const SummaryPage = () => <PagePlaceholder title="Habit Summary Report" icon={FileText} />;
const CommunityPage = () => <PagePlaceholder title="Community Impact" icon={Users} />;

export default App;
