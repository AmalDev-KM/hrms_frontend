"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Department } from ".";
import { toast } from "sonner";

interface EditDepartmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  department: Department;
  onSubmit: (department: Partial<Department>) => void;
}

export function EditDepartmentDialog({
  open,
  onOpenChange,
  department,
}: EditDepartmentDialogProps) {
  const [formData, setFormData] = useState({
    name: department.name,
    description: department.description,
    head: department.head,
    headEmail: department.headEmail,
    employeeCount: department.employeeCount,
    budget: department.budget,
    location: department.location,
    status: department.status,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.head || !formData.headEmail) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Department updated successfully!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Department</DialogTitle>
          <DialogDescription>Update department information</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Department Name *</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="e.g., Engineering"
                className="bg-input-background"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value: "active" | "inactive") =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger id="edit-status" className="bg-input-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-description">Description</Label>
            <Textarea
              id="edit-description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Brief description of the department..."
              className="bg-input-background min-h-20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-head">Department Head *</Label>
              <Input
                id="edit-head"
                value={formData.head}
                onChange={(e) =>
                  setFormData({ ...formData, head: e.target.value })
                }
                placeholder="Full name"
                className="bg-input-background"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-headEmail">Head Email *</Label>
              <Input
                id="edit-headEmail"
                type="email"
                value={formData.headEmail}
                onChange={(e) =>
                  setFormData({ ...formData, headEmail: e.target.value })
                }
                placeholder="email@company.com"
                className="bg-input-background"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-employeeCount">Employee Count</Label>
              <Input
                id="edit-employeeCount"
                type="number"
                value={formData.employeeCount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    employeeCount: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="0"
                className="bg-input-background"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-budget">Annual Budget</Label>
              <Input
                id="edit-budget"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                placeholder="e.g., $1,000,000"
                className="bg-input-background"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-location">Location</Label>
            <Input
              id="edit-location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              placeholder="e.g., Building A, Floor 3"
              className="bg-input-background"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
