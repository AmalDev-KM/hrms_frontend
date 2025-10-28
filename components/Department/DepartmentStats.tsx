"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building, DollarSign, TrendingUp } from "lucide-react";
import { Department } from ".";

interface DepartmentStatsProps {
  departments: Department[];
}

export function DepartmentStats({ departments }: DepartmentStatsProps) {
  const totalEmployees = departments.reduce((sum, dept) => sum + dept.employeeCount, 0);
  const activeDepartments = departments.filter(dept => dept.status === "active").length;
  const avgEmployeesPerDept = Math.round(totalEmployees / departments.length);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Total Departments</p>
              <p className="text-2xl mb-1">{departments.length}</p>
              <p className="text-xs text-green-600">
                {activeDepartments} active
              </p>
            </div>
            <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
              <Building size={20} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Total Employees</p>
              <p className="text-2xl mb-1">{totalEmployees.toLocaleString()}</p>
              <p className="text-xs text-green-600">
                Across all departments
              </p>
            </div>
            <div className="bg-green-50 text-green-600 p-3 rounded-lg">
              <Users size={20} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Avg. Team Size</p>
              <p className="text-2xl mb-1">{avgEmployeesPerDept}</p>
              <p className="text-xs text-blue-600">
                Employees per dept.
              </p>
            </div>
            <div className="bg-purple-50 text-purple-600 p-3 rounded-lg">
              <TrendingUp size={20} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Largest Dept.</p>
              <p className="text-2xl mb-1">
                {Math.max(...departments.map(d => d.employeeCount))}
              </p>
              <p className="text-xs text-orange-600">
                {departments.reduce((max, dept) => 
                  dept.employeeCount > max.employeeCount ? dept : max
                ).name}
              </p>
            </div>
            <div className="bg-orange-50 text-orange-600 p-3 rounded-lg">
              <DollarSign size={20} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
