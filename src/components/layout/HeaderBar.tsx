import React from 'react';
import { cn } from '@/lib/utils';
// import { CalendarDays } from 'lucide-react'; // Example if icon was needed

interface HeaderBarProps {
  className?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ className }) => {
  const projectTitle = "WEEKLY STATUS DASHBOARD";
  // Date format based on Layout Requirements and OCR
  const dateDisplay = {
    label: "ENTER START DATE",
    separator: "->>",
    startDate: "06/19/2024",
    through: "THROUGH",
    endDate: "06/25/2024",
  };

  return (
    <header
      className={cn(
        'h-[60px] px-4 flex items-center justify-between',
        'bg-card text-card-foreground fixed top-0 w-full z-10 shadow-sm',
        className
      )}
    >
      <h1 className="text-lg font-semibold tracking-tight uppercase">
        {projectTitle}
      </h1>
      <div className="flex items-center space-x-2 text-sm">
        <span className="text-card-foreground/70 hidden md:inline">{dateDisplay.label}</span>
        <span className="text-card-foreground/70 hidden md:inline">{dateDisplay.separator}</span>
        <span className="font-medium text-card-foreground">
          {dateDisplay.startDate}
        </span>
        <span className="text-card-foreground/70 hidden sm:inline">{dateDisplay.through}</span>
        <span className="font-medium text-card-foreground">
          {dateDisplay.endDate}
        </span>
        {/* Example of how a Calendar icon could be added if DatePicker functionality was part of this component
        <Button variant="ghost" size="icon" className="text-card-foreground/70 hover:text-card-foreground">
          <CalendarDays className="h-4 w-4" />
        </Button> 
        */}
      </div>
    </header>
  );
};

export default HeaderBar;
