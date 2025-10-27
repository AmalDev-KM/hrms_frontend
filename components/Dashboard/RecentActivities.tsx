import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const activities = [
  {
    id: 1,
    user: "Sarah Johnson",
    initials: "SJ",
    action: "submitted leave request",
    type: "Leave",
    time: "5 minutes ago",
    status: "pending",
  },
  {
    id: 2,
    user: "Michael Chen",
    initials: "MC",
    action: "checked in",
    type: "Attendance",
    time: "12 minutes ago",
    status: "success",
  },
  {
    id: 3,
    user: "Emily Davis",
    initials: "ED",
    action: "completed onboarding",
    type: "Onboarding",
    time: "1 hour ago",
    status: "success",
  },
  {
    id: 4,
    user: "James Wilson",
    initials: "JW",
    action: "updated profile",
    type: "Profile",
    time: "2 hours ago",
    status: "info",
  },
  {
    id: 5,
    user: "Lisa Anderson",
    initials: "LA",
    action: "marked absent",
    type: "Attendance",
    time: "3 hours ago",
    status: "warning",
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
  success: "bg-green-100 text-green-800 border-green-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
  warning: "bg-orange-100 text-orange-800 border-orange-300",
};

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary/10 text-primary">
                  {activity.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-sm text-muted-foreground">{activity.action}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge 
                    variant="outline" 
                    className={statusColors[activity.status as keyof typeof statusColors]}
                  >
                    {activity.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
