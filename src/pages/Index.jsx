import { useState } from 'react';
import { Home, DollarSign, TrendingUp, Zap, Leaf, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'expenses':
        return <ExpensesContent />;
      case 'taxSavings':
        return <TaxSavingsContent />;
      case 'homeImprovements':
        return <HomeImprovementsContent />;
      case 'sustainability':
        return <SustainabilityContent />;
      case 'community':
        return <CommunityContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold py-6 text-gray-900">AI Home Manager</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 py-6 overflow-x-auto">
          <Button
            variant={activeTab === 'dashboard' ? 'default' : 'outline'}
            onClick={() => setActiveTab('dashboard')}
          >
            <Home className="mr-2 h-4 w-4" /> Dashboard
          </Button>
          <Button
            variant={activeTab === 'expenses' ? 'default' : 'outline'}
            onClick={() => setActiveTab('expenses')}
          >
            <DollarSign className="mr-2 h-4 w-4" /> Expenses
          </Button>
          <Button
            variant={activeTab === 'taxSavings' ? 'default' : 'outline'}
            onClick={() => setActiveTab('taxSavings')}
          >
            <TrendingUp className="mr-2 h-4 w-4" /> Tax Savings
          </Button>
          <Button
            variant={activeTab === 'homeImprovements' ? 'default' : 'outline'}
            onClick={() => setActiveTab('homeImprovements')}
          >
            <Zap className="mr-2 h-4 w-4" /> Home Improvements
          </Button>
          <Button
            variant={activeTab === 'sustainability' ? 'default' : 'outline'}
            onClick={() => setActiveTab('sustainability')}
          >
            <Leaf className="mr-2 h-4 w-4" /> Sustainability
          </Button>
          <Button
            variant={activeTab === 'community' ? 'default' : 'outline'}
            onClick={() => setActiveTab('community')}
          >
            <Users className="mr-2 h-4 w-4" /> Community
          </Button>
        </div>
        {renderContent()}
      </main>
    </div>
  );
};

const DashboardContent = () => {
  const monthlyExpensesData = [
    { month: 'Jan', amount: 2300 },
    { month: 'Feb', amount: 2400 },
    { month: 'Mar', amount: 2200 },
    { month: 'Apr', amount: 2600 },
    { month: 'May', amount: 2500 },
    { month: 'Jun', amount: 2700 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Home Value</CardTitle>
            <CardDescription>Current estimated value of your home</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$450,000</p>
            <p className="text-sm text-green-600">↑ 5.2% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
            <CardDescription>Average home-related expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$2,500</p>
            <p className="text-sm text-red-600">↑ 3.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Potential Tax Savings</CardTitle>
            <CardDescription>Estimated savings for this year</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$3,200</p>
            <p className="text-sm text-green-600">↑ 12% from last year</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Monthly Expenses Trend</CardTitle>
          <CardDescription>Last 6 months of home-related expenses</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyExpensesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

const ExpensesContent = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Expense Tracking</h2>
    <p>Automatically categorized expenses will be displayed here.</p>
  </div>
);

const TaxSavingsContent = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Tax Savings Recommendations</h2>
    <p>Personalized tax-saving strategies will be shown here.</p>
  </div>
);

const HomeImprovementsContent = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Home Improvement Recommendations</h2>
    <p>AI-powered suggestions for home improvements will be displayed here.</p>
  </div>
);

const SustainabilityContent = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Sustainability Score</h2>
    <p>Your home's sustainability score and improvement suggestions will be shown here.</p>
  </div>
);

const CommunityContent = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Community Insights</h2>
    <p>Connect with other homeowners and share experiences here.</p>
  </div>
);

export default Index;
