import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart3, TrendingUp, Activity, PieChart as PieChartIcon } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  LineChart as RechartsLineChart, 
  Line, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area 
} from 'recharts';

const weeklyTrends = [
  { week: 'Week 1', tasks: 45, completed: 42, efficiency: 93 },
  { week: 'Week 2', tasks: 52, completed: 48, efficiency: 92 },
  { week: 'Week 3', tasks: 48, completed: 46, efficiency: 96 },
  { week: 'Week 4', tasks: 55, completed: 51, efficiency: 93 },
];

const monthlyTrends = [
  { month: 'Jan', completed: 85, planned: 90, efficiency: 94 },
  { month: 'Feb', completed: 78, planned: 85, efficiency: 92 },
  { month: 'Mar', completed: 92, planned: 95, efficiency: 97 },
  { month: 'Apr', completed: 88, planned: 90, efficiency: 98 },
  { month: 'May', completed: 95, planned: 100, efficiency: 95 },
  { month: 'Jun', completed: 91, planned: 95, efficiency: 96 },
];

const departmentEfficiency = [
  { name: 'Development', value: 95, color: '#3b82f6' },
  { name: 'Design', value: 88, color: '#10b981' },
  { name: 'Marketing', value: 92, color: '#f59e0b' },
  { name: 'Sales', value: 85, color: '#ef4444' },
];

export default function Analytics() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Analytics Dashboard
        </h1>
        <p className="text-muted-foreground mt-2">
          Comprehensive analytics and performance insights
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Progress Trends */}
        <Card className="dashboard-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Weekly Progress Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                tasks: {
                  label: "Total Tasks",
                  color: "hsl(var(--chart-1))",
                },
                completed: {
                  label: "Completed",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyTrends}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="tasks"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.3}
                  />
                  <Area
                    type="monotone"
                    dataKey="completed"
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
        <Card className="dashboard-card hover-lift">
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
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={departmentEfficiency}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {departmentEfficiency.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RechartsPieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Performance Analytics */}
      <Card className="dashboard-card hover-lift">
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
            className="h-[400px]"
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
    </div>
  );
}