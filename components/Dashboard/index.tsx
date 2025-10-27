"use client";
import { StatsCards } from "@/components/StatsCards";
import { EmployeeGrowthChart } from "@/components/Dashboard/Employeegrowthchart";
import { DepartmentChart } from "@/components/Dashboard/DepartmentChart";
import { AttendanceChart } from "@/components/Dashboard/AttendanceChart";
import { RecentActivities } from "@/components/Dashboard/RecentActivities";
import { QuickActions } from "@/components/Dashboard/QuickActions";

export function Dashboard() {
  return (
    <>
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">
          {`Welcome back! Here's what's happening with your organization today.`}
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EmployeeGrowthChart />
        <DepartmentChart />
      </div>

      <AttendanceChart />

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivities />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
    </>
  );
}
