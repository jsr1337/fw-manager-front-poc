import { Sidebar } from './Sidebar';
import { ChatBot } from './ChatBot';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
      <ChatBot />
    </div>
  );
}
