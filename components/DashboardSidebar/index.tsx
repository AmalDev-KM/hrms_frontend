"use client";

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
} from "lucide-react";
import { cn } from "@/components/ui/utils";
import { useRouter, usePathname } from "next/navigation";

interface DashboardSidebarProps {
  isOpen: boolean;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Users, label: "Employees", path: "/employees" },
  { icon: Briefcase, label: "Departments", path: "/department" },
  { icon: Calendar, label: "Attendance", path: "/attendance" },
  { icon: ClipboardList, label: "Leave Management", path: "/leave-management" },
  { icon: DollarSign, label: "Payroll", path: "/payroll" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function DashboardSidebar({ isOpen }: DashboardSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (route: string) => router.push(route);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" />}

      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border flex flex-col transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-border">
          <div className="flex items-center gap-2">
            <Building2 size={24} />
            <span className="text-lg">HRMS Admin</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.path);

            return (
              <button
                key={item.label}
                onClick={() => navigateTo(item.path)}
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

        <div className="p-4 border-t border-border text-xs text-muted-foreground">
          © 2025 HRMS System
        </div>
      </aside>
    </>
  );
}
