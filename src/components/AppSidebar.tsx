import { BarChart3, TrendingUp, FileText, Activity, Target, Users, PieChart } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const sidebarItems = [
  {
    title: 'Dashboard Overview',
    url: '/',
    icon: Activity,
  },
  {
    title: 'Analytics',
    url: '/analytics',
    icon: BarChart3,
  },
  {
    title: 'Departments',
    url: '/departments',
    icon: Users,
  },
  {
    title: 'Insights',
    url: '/insights',
    icon: PieChart,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const getNavClass = (path: string) => {
    const active = isActive(path);
    return active 
      ? 'bg-primary/10 text-primary font-medium border-r-2 border-primary' 
      : 'hover:bg-muted/50 hover:text-foreground';
  };

  return (
    <Sidebar
      className={`${state === 'collapsed' ? 'w-14' : 'w-64'} transition-all duration-300 glass-card border-r border-border/40`}
      collapsible="icon"
    >
      <SidebarContent className="bg-transparent">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/70 px-3">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink 
                      to={item.url} 
                      end={item.url === '/'}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${getNavClass(item.url)}`}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {state !== 'collapsed' && (
                        <span className="text-sm font-medium truncate">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}