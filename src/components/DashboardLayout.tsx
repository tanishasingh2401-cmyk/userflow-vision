import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { Bell, Search, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole?: 'user' | 'admin';
}

export function DashboardLayout({ children, userRole = 'user' }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background via-background/95 to-background/90">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-glass backdrop-blur-md border-b border-border/40 z-50 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="hover:bg-muted/50" />
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                ProjectSync
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hover:bg-muted/50">
              <Search className="h-4 w-4" />
            </Button>
            
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="hover:bg-muted/50 relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-red-500 border-0">
                3
              </Badge>
            </Button>
            
            {/* Settings */}
            <Button variant="ghost" size="icon" className="hover:bg-muted/50">
              <Settings className="h-4 w-4" />
            </Button>
            
            {/* User Role Badge */}
            <Badge variant="outline" className="glass-card px-3 py-1">
              <User className="h-3 w-3 mr-1" />
              {userRole === 'admin' ? 'Admin' : 'User'}
            </Badge>
          </div>
        </header>

        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 pt-16 p-6">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}