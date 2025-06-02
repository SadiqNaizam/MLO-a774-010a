import React from 'react';
import { cn } from '@/lib/utils';
import HeaderBar from './HeaderBar';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  const projectInfo = {
    name: "Weekly Status Dashboard", // From Project Requirements
  };

  return (
    <div className={cn("flex flex-col min-h-screen bg-background text-foreground", className)}>
      <HeaderBar />
      <main
        className={cn(
          'flex-grow mt-[60px]', // Offset for fixed header (h-[60px])
          'flex flex-col gap-6 p-6 overflow-y-auto' // Styles from Layout Requirements for mainContent
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          'h-[60px] bg-card text-muted-foreground flex items-center justify-center text-xs shrink-0'
          // 'mt-auto' is implicitly handled by flex-grow on main, and this being the last flex item in a min-h-screen flex-col container.
          // If explicit control is needed, the parent of main+footer might need to be a flex-col too.
          // Given current structure, this footer will be at the bottom.
        )}
      >
        <p>
          &copy; {new Date().getFullYear()} {projectInfo.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MainAppLayout;
