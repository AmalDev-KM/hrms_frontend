"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DepartmentList } from "./DepartmentList";
import { CreateDepartmentDialog } from "@/components/Department/CreateDepartmentDialoug";
import { DepartmentStats } from "@/components/Department/DepartmentStats";

export interface Department {
  id: string;
  name: string;
  description: string;
  head: string;
  headEmail: string;
  employeeCount: number;
  budget: string;
  location: string;
  status: "active" | "inactive";
  createdAt: string;
}

export function DepartmentsPage() {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [departments, setDepartments] = useState<Department[]>([
    {
      id: "1",
      name: "Engineering",
      description: "Software development and technology infrastructure",
      head: "John Smith",
      headEmail: "john.smith@acme.com",
      employeeCount: 342,
      budget: "$2,500,000",
      location: "Building A, Floor 3",
      status: "active",
      createdAt: "2023-01-15",
    },
    {
      id: "2",
      name: "Sales",
      description: "Revenue generation and client acquisition",
      head: "Sarah Johnson",
      headEmail: "sarah.johnson@acme.com",
      employeeCount: 245,
      budget: "$1,800,000",
      location: "Building B, Floor 2",
      status: "active",
      createdAt: "2023-01-15",
    },
    {
      id: "3",
      name: "Marketing",
      description: "Brand development and market strategy",
      head: "Michael Chen",
      headEmail: "michael.chen@acme.com",
      employeeCount: 156,
      budget: "$1,200,000",
      location: "Building B, Floor 1",
      status: "active",
      createdAt: "2023-02-01",
    },
    {
      id: "4",
      name: "Human Resources",
      description: "Employee relations and talent management",
      head: "Emily Davis",
      headEmail: "emily.davis@acme.com",
      employeeCount: 89,
      budget: "$950,000",
      location: "Building A, Floor 1",
      status: "active",
      createdAt: "2023-01-15",
    },
    {
      id: "5",
      name: "Finance",
      description: "Financial planning and accounting operations",
      head: "David Williams",
      headEmail: "david.williams@acme.com",
      employeeCount: 134,
      budget: "$1,100,000",
      location: "Building A, Floor 2",
      status: "active",
      createdAt: "2023-01-15",
    },
    {
      id: "6",
      name: "Operations",
      description: "Business operations and process management",
      head: "Lisa Anderson",
      headEmail: "lisa.anderson@acme.com",
      employeeCount: 268,
      budget: "$1,650,000",
      location: "Building C, Floor 1",
      status: "active",
      createdAt: "2023-03-10",
    },
  ]);

  const handleCreateDepartment = (
    newDept: Omit<Department, "id" | "createdAt">
  ) => {
    const department: Department = {
      ...newDept,
      id: (departments.length + 1).toString(),
      createdAt: new Date().toISOString().split("T")[0],
    };
    setDepartments([...departments, department]);
    setCreateDialogOpen(false);
  };

  const handleEditDepartment = (
    id: string,
    updatedDept: Partial<Department>
  ) => {
    setDepartments(
      departments.map((dept) =>
        dept.id === id ? { ...dept, ...updatedDept } : dept
      )
    );
  };

  const handleDeleteDepartment = (id: string) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
  };

  return (
    <>
      <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 overflow-auto">
        {/* Page Title */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl">Department Management</h1>
            <p className="text-muted-foreground mt-1">
              Create and manage company departments
            </p>
          </div>
          <Button onClick={() => setCreateDialogOpen(true)} className="gap-2">
            <Plus size={18} />
            Create Department
          </Button>
        </div>

        {/* Stats */}
        <DepartmentStats departments={departments} />

        {/* Department List */}
        <Card>
          <CardHeader>
            <CardTitle>All Departments</CardTitle>
            <CardDescription>
              View and manage all departments in your organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DepartmentList
              departments={departments}
              onEdit={handleEditDepartment}
              onDelete={handleDeleteDepartment}
            />
          </CardContent>
        </Card>
      </main>
      <CreateDepartmentDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onSubmit={handleCreateDepartment}
      />
    </>
  );
}
