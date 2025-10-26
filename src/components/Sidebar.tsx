import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Search, GitCompare, BarChart3, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Search Device', href: '/search', icon: Search },
  { name: 'Overlapping Rules', href: '/overlapping', icon: GitCompare },
  { name: 'Rules Usage', href: '/usage', icon: BarChart3 },
  { name: 'Vendors', href: '/vendors', icon: Building2 },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col gradient-primary shadow-xl">
      <div className="flex h-16 items-center px-6 border-b border-white/10 backdrop-blur-sm">
        <h1 className="text-xl font-bold text-white tracking-tight">
          🛡️ Firewall Manager
        </h1>
      </div>
      
      <nav className="flex-1 space-y-2 px-3 py-6">
        {navigation.map((item, index) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={cn(
                'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 animate-fade-in',
                isActive
                  ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30'
                  : 'text-white/80 hover:bg-white/10 hover:text-white hover:shadow-md hover:border hover:border-white/20'
              )}
            >
              <Icon className={cn("h-5 w-5 transition-transform", isActive && "scale-110")} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-white/10">
        <div className="glass-effect rounded-xl p-4 text-center">
          <p className="text-xs text-white/70 font-medium">Powered by AI</p>
        </div>
      </div>
    </div>
  );
}
