import React, { useState } from 'react';
import { 
  Eye, 
  Building2, 
  TrendingUp, 
  Filter, 
  ArrowUpDown, 
  RefreshCw, 
  BarChart3,
  Users,
  Calendar,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileText,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity,
  Target,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

interface DashboardProps {
  userRole?: 'user' | 'admin';
}

const Dashboard: React.FC<DashboardProps> = ({ userRole = 'user' }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lastSync] = useState(new Date().toLocaleString());

  // Mock data for progress tracking
  const projectProgress = {
    overall: 72,
    phases: [
      { name: 'Planning', progress: 100, status: 'completed' },
      { name: 'Development', progress: 85, status: 'in-progress' },
      { name: 'Testing', progress: 45, status: 'in-progress' },
      { name: 'Deployment', progress: 0, status: 'pending' }
    ]
  };

  const departments = [
    { name: 'Engineering', progress: 78, members: 12, trend: '+5%' },
    { name: 'Design', progress: 85, members: 8, trend: '+12%' },
    { name: 'QA', progress: 65, members: 6, trend: '+3%' },
    { name: 'DevOps', progress: 92, members: 4, trend: '+8%' }
  ];

  const recentUpdates = [
    { title: 'API Integration Complete', time: '2 hours ago', type: 'success' },
    { title: 'Design Review Pending', time: '4 hours ago', type: 'warning' },
    { title: 'Database Migration Started', time: '6 hours ago', type: 'info' },
    { title: 'Security Audit Completed', time: '1 day ago', type: 'success' }
  ];

  // Analytics data
  const weeklyProgress = [
    { day: 'Mon', progress: 65, tasks: 12 },
    { day: 'Tue', progress: 68, tasks: 15 },
    { day: 'Wed', progress: 72, tasks: 18 },
    { day: 'Thu', progress: 75, tasks: 14 },
    { day: 'Fri', progress: 78, tasks: 16 },
    { day: 'Sat', progress: 80, tasks: 8 },
    { day: 'Sun', progress: 82, tasks: 6 }
  ];

  const monthlyTrends = [
    { month: 'Jan', completed: 45, planned: 50, efficiency: 90 },
    { month: 'Feb', completed: 52, planned: 55, efficiency: 95 },
    { month: 'Mar', completed: 58, planned: 60, efficiency: 97 },
    { month: 'Apr', completed: 62, planned: 65, efficiency: 95 },
    { month: 'May', completed: 68, planned: 70, efficiency: 97 },
    { month: 'Jun', completed: 72, planned: 75, efficiency: 96 }
  ];

  const departmentEfficiency = [
    { name: 'Engineering', value: 85, color: 'hsl(var(--chart-1))' },
    { name: 'Design', value: 92, color: 'hsl(var(--chart-2))' },
    { name: 'QA', value: 78, color: 'hsl(var(--chart-3))' },
    { name: 'DevOps', value: 95, color: 'hsl(var(--chart-4))' }
  ];

  const performanceMetrics = [
    { metric: 'Velocity', current: 85, target: 90, trend: '+5%' },
    { metric: 'Quality', current: 92, target: 95, trend: '+3%' },
    { metric: 'Efficiency', current: 88, target: 85, trend: '+8%' },
    { metric: 'Delivery', current: 78, target: 80, trend: '+2%' }
  ];

  const dashboardCards = [
    {
      title: 'Overview',
      icon: Eye,
      description: 'Project status and metrics',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      content: 'View comprehensive project overview and key metrics'
    },
    {
      title: 'My Department',
      icon: Building2,
      description: 'Department-specific progress',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      content: 'Track your department\'s progress and milestones'
    },
    {
      title: 'Trends',
      icon: TrendingUp,
      description: 'Analytics and trends',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      content: 'View performance trends and insights'
    },
    {
      title: 'Reports',
      icon: FileText,
      description: 'Detailed reports',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      content: 'Generate and view detailed progress reports'
    },
    {
      title: 'Analytics',
      icon: PieChartIcon,
      description: 'Performance analytics',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      content: 'View detailed performance analytics and metrics'
    },
    {
      title: 'Insights',
      icon: Zap,
      description: 'AI-powered insights',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      content: 'Get AI-powered insights and recommendations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      {/* Header with Logo */}
      <div className="flex justify-center mb-8">
        <div className="glass-card px-8 py-4 rounded-2xl">
          <h1 className="text-3xl font-bold gradient-text text-center">
            ProjectTracker Pro
          </h1>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Action Bar */}
        <div className="glass-card p-4 rounded-xl flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hover-lift">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="hover-lift">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="h-4 w-4" />
            Last sync: {lastSync}
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="dashboard-card hover-lift animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Project Progress Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {projectProgress.overall}%
                </div>
                <p className="text-muted-foreground">Overall Progress</p>
                <Progress value={projectProgress.overall} className="mt-4 h-3" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {projectProgress.phases.map((phase, index) => (
                  <div key={index} className="glass-card p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{phase.name}</span>
                      <Badge 
                        variant={
                          phase.status === 'completed' ? 'default' :
                          phase.status === 'in-progress' ? 'secondary' : 'outline'
                        }
                        className="text-xs"
                      >
                        {phase.status === 'completed' && <CheckCircle2 className="h-3 w-3 mr-1" />}
                        {phase.status === 'in-progress' && <Clock className="h-3 w-3 mr-1" />}
                        {phase.status === 'pending' && <AlertTriangle className="h-3 w-3 mr-1" />}
                        {phase.status}
                      </Badge>
                    </div>
                    <Progress value={phase.progress} className="h-2" />
                    <p className="text-sm text-muted-foreground mt-1">{phase.progress}%</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card 
                key={index} 
                className="dashboard-card hover-lift animate-fade-in-up cursor-pointer group transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <IconComponent className={`h-6 w-6 ${card.color}`} />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{card.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{card.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Analytics & Trends Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Progress Trends */}
          <Card className="dashboard-card hover-lift animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChartIcon className="h-5 w-5 text-blue-600" />
                Weekly Progress Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  progress: {
                    label: "Progress",
                    color: "hsl(var(--chart-1))",
                  },
                  tasks: {
                    label: "Tasks",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyProgress}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="progress"
                      stroke="hsl(var(--chart-1))"
                      fill="hsl(var(--chart-1))"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="tasks"
                      stroke="hsl(var(--chart-2))"
                      fill="hsl(var(--chart-2))"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Department Efficiency */}
          <Card className="dashboard-card hover-lift animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="h-5 w-5 text-green-600" />
                Department Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  efficiency: {
                    label: "Efficiency",
                  },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={departmentEfficiency}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {departmentEfficiency.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Performance Analytics */}
        <Card className="dashboard-card hover-lift animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              Monthly Performance Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                completed: {
                  label: "Completed",
                  color: "hsl(var(--chart-1))",
                },
                planned: {
                  label: "Planned",
                  color: "hsl(var(--chart-2))",
                },
                efficiency: {
                  label: "Efficiency",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyTrends}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="completed" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="planned" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Performance Metrics & Insights */}
        <Card className="dashboard-card hover-lift animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-red-600" />
              Performance Metrics & Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="glass-card p-4 rounded-lg group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">{metric.metric}</span>
                    </div>
                    <Badge variant="outline" className="text-green-600 bg-green-50">
                      {metric.trend}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current</span>
                      <span className="font-bold">{metric.current}%</span>
                    </div>
                    <Progress value={metric.current} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Target: {metric.target}%</span>
                      <span className={metric.current >= metric.target ? 'text-green-600' : 'text-orange-600'}>
                        {metric.current >= metric.target ? '✓ On Track' : '⚠ Below Target'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Department Overview */}
        <Card className="dashboard-card hover-lift animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {departments.map((dept, index) => (
                <div key={index} className="glass-card p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold">{dept.name}</h3>
                      <p className="text-sm text-muted-foreground">{dept.members} members</p>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      {dept.trend}
                    </Badge>
                  </div>
                  <Progress value={dept.progress} className="mb-2 h-2" />
                  <p className="text-sm font-medium">{dept.progress}% Complete</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Updates */}
        <Card className="dashboard-card hover-lift animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              Recent Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentUpdates.map((update, index) => (
                <div key={index} className="flex items-center gap-3 p-3 glass-card rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${
                    update.type === 'success' ? 'bg-green-500' :
                    update.type === 'warning' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{update.title}</p>
                    <p className="text-xs text-muted-foreground">{update.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Role Indicator */}
        <div className="text-center">
          <Badge variant="outline" className="glass-card px-4 py-2">
            {userRole === 'admin' ? '👑 Admin View' : '👤 User View (Read-Only)'}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;