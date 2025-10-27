import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, FileText, Calendar, DollarSign } from "lucide-react";

const actions = [
  {
    icon: UserPlus,
    label: "Add Employee",
    description: "Register new employee",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: FileText,
    label: "Generate Report",
    description: "Create custom report",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Calendar,
    label: "Manage Leaves",
    description: "Review leave requests",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: DollarSign,
    label: "Process Payroll",
    description: "Run payroll cycle",
    color: "bg-orange-50 text-orange-600",
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.label}
                variant="outline"
                className="w-full justify-start h-auto p-4 hover:bg-accent"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className={`${action.color} p-2 rounded-lg`}>
                    <Icon size={20} />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-sm">{action.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {action.description}
                    </div>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
