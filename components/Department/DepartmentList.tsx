"use client";
import { useState } from "react";
import { Department } from ".";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Users, Mail, MapPin, Building } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { EditDepartmentDialog } from "@/components/Department/EditDepartmentDialoug";
import { toast } from "sonner";

interface DepartmentListProps {
  departments: Department[];
  onEdit: (id: string, department: Partial<Department>) => void;
  onDelete: (id: string) => void;
}

export function DepartmentList({ departments, onEdit, onDelete }: DepartmentListProps) {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editDepartment, setEditDepartment] = useState<Department | null>(null);

  const handleDelete = () => {
    if (deleteId) {
      onDelete(deleteId);
      toast.success("Department deleted successfully!");
      setDeleteId(null);
    }
  };

  const handleEdit = (updatedDept: Partial<Department>) => {
    if (editDepartment) {
      onEdit(editDepartment.id, updatedDept);
      setEditDepartment(null);
    }
  };

  return (
    <>
      <div className="space-y-4">
        {departments.map((department) => (
          <div
            key={department.id}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="flex-1 space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary p-2 rounded-lg mt-1">
                  <Building size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-medium">{department.name}</h3>
                    <Badge
                      variant="outline"
                      className={
                        department.status === "active"
                          ? "bg-green-100 text-green-800 border-green-300"
                          : "bg-gray-100 text-gray-800 border-gray-300"
                      }
                    >
                      {department.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{department.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pl-11">
                <div className="flex items-center gap-2 text-sm">
                  <Users size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Head:</span>
                  <span>{department.head}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground truncate">{department.headEmail}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users size={16} className="text-muted-foreground" />
                  <span>{department.employeeCount} employees</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{department.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm pl-11">
                <div>
                  <span className="text-muted-foreground">Budget: </span>
                  <span className="font-medium">{department.budget}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Created: </span>
                  <span>{new Date(department.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 md:flex-col lg:flex-row md:self-start">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 flex-1 md:flex-none"
                onClick={() => setEditDepartment(department)}
              >
                <Edit size={16} />
                Edit
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-destructive hover:text-destructive flex-1 md:flex-none"
                onClick={() => setDeleteId(department.id)}
              >
                <Trash2 size={16} />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the department
              and may affect employee records associated with it.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Edit Department Dialog */}
      {editDepartment && (
        <EditDepartmentDialog
          open={!!editDepartment}
          onOpenChange={(open) => !open && setEditDepartment(null)}
          department={editDepartment}
          onSubmit={handleEdit}
        />
      )}
    </>
  );
}
