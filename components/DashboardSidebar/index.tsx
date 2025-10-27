import { 
  Building2, 
  LayoutDashboard, 
  Users, 
  Calendar, 
  ClipboardList, 
  DollarSign, 
  Settings, 
  FileText,
  Briefcase,
  X
} from "lucide-react";
import { cn } from "@/components/ui/utils";

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem?: string;
  onNavigateToSettings?: () => void;
  onNavigateToDepartments?: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Employees" },
  { icon: Briefcase, label: "Departments" },
  { icon: Calendar, label: "Attendance" },
  { icon: ClipboardList, label: "Leave Management" },
  { icon: DollarSign, label: "Payroll" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

export function DashboardSidebar({ isOpen, onClose, activeItem = "Dashboard", onNavigateToSettings, onNavigateToDepartments }: DashboardSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border flex flex-col transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-border">
          <div className="flex items-center gap-2">
            <Building2 size={24} />
            <span className="text-lg">HRMS Admin</span>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-accent rounded-md"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;
            return (
              <button
                key={item.label}
                onClick={() => {
                  if (item.label === "Settings" && onNavigateToSettings) {
                    onNavigateToSettings();
                    onClose();
                  } else if (item.label === "Departments" && onNavigateToDepartments) {
                    onNavigateToDepartments();
                    onClose();
                  }
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:bg-accent"
                )}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground">
            © 2025 HRMS System
          </div>
        </div>
      </aside>
    </>
  );
}
