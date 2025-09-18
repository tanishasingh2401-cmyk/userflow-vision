import React, { useState } from 'react';
import { 
  Eye, 
  Building2, 
  TrendingUp, 
  Filter, 
  ArrowUpDown, 
  RefreshCw, 
  Users,
  Calendar,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface DashboardProps {
  userRole?: 'user' | 'admin';
}

const Dashboard: React.FC<DashboardProps> = ({ userRole = 'user' }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lastSync] = useState(new Date().toLocaleString());

  // Mock data for progress tracking
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      progress: 85,
      status: 'In Progress',
      department: 'Design',
      deadline: '2024-01-15',
      assignedTo: 'John Doe',
      priority: 'High',
      tasksCompleted: 17,
      totalTasks: 20
    },
    {
      id: 2,
      name: 'Mobile App Development',
      progress: 60,
      status: 'In Progress',
      department: 'Development',
      deadline: '2024-02-28',
      assignedTo: 'Jane Smith',
      priority: 'Medium',
      tasksCompleted: 12,
      totalTasks: 20
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      progress: 95,
      status: 'Nearly Complete',
      department: 'Marketing',
      deadline: '2024-01-10',
      assignedTo: 'Mike Johnson',
      priority: 'High',
      tasksCompleted: 19,
      totalTasks: 20
    },
    {
      id: 4,
      name: 'Database Migration',
      progress: 30,
      status: 'Starting',
      department: 'IT',
      deadline: '2024-03-15',
      assignedTo: 'Sarah Wilson',
      priority: 'Low',
      tasksCompleted: 6,
      totalTasks: 20
    }
  ];

  const departments = [
    { name: 'Design', members: 8, progress: 88, trend: '+12%' },
    { name: 'Development', members: 12, progress: 75, trend: '+8%' },
    { name: 'Marketing', members: 6, progress: 92, trend: '+15%' },
    { name: 'IT', members: 4, progress: 68, trend: '+5%' }
  ];

  const recentUpdates = [
    { title: 'Website Redesign milestone completed', time: '2 hours ago', type: 'success' },
    { title: 'New team member added to Development', time: '4 hours ago', type: 'info' },
    { title: 'Marketing Campaign deadline approaching', time: '6 hours ago', type: 'warning' },
    { title: 'Database Migration started', time: '1 day ago', type: 'info' }
  ];

  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'high') return project.priority === 'High';
    if (activeFilter === 'inprogress') return project.status === 'In Progress';
    if (activeFilter === 'completed') return project.progress === 100;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-500';
      case 'Nearly Complete': return 'bg-green-500';
      case 'Starting': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="space-y-8 animate-fade-in">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Project Dashboard
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time project transparency with complete visibility into progress, departments, and team performance
          </p>
          
          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">View Mode</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-green-600" />
              <span className="text-sm">My Department</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-purple-600" />
              <span className="text-sm">Trends</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <RefreshCw className="h-4 w-4" />
              <span className="text-xs">Last sync: {lastSync}</span>
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <Card className="dashboard-card hover-lift">
          <CardContent className="pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
                <div className="flex gap-2">
                  {['all', 'high', 'inprogress', 'completed'].map((filter) => (
                    <Button
                      key={filter}
                      variant={activeFilter === filter ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveFilter(filter)}
                      className="text-xs"
                    >
                      {filter === 'all' ? 'All Projects' :
                       filter === 'high' ? 'High Priority' :
                       filter === 'inprogress' ? 'In Progress' :
                       'Completed'}
                    </Button>
                  ))}
                </div>
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4" />
                Sort by Priority
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Project Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="dashboard-card hover-lift animate-fade-in-up group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-2">{project.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{project.assignedTo}</span>
                      <span>•</span>
                      <Building2 className="h-4 w-4" />
                      <span>{project.department}</span>
                    </div>
                  </div>
                  <Badge className={getPriorityColor(project.priority)}>
                    {project.priority}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress Section */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-bold">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-3" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{project.tasksCompleted}/{project.totalTasks} tasks completed</span>
                    <span className={`flex items-center gap-1 ${getStatusColor(project.status).replace('bg-', 'text-')}`}>
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Deadline */}
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Deadline:</span>
                  <span className="font-medium">{project.deadline}</span>
                </div>

                {/* Transparency Features */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/50">
                  <div className="flex items-center gap-1 text-xs">
                    <CheckCircle2 className="h-3 w-3 text-green-600" />
                    <span>Completed</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <Clock className="h-3 w-3 text-blue-600" />
                    <span>On Track</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <AlertTriangle className="h-3 w-3 text-yellow-600" />
                    <span>Monitored</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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