import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { day: "Mon", present: 1156, absent: 36, leave: 42 },
  { day: "Tue", present: 1168, absent: 28, leave: 38 },
  { day: "Wed", present: 1142, absent: 45, leave: 47 },
  { day: "Thu", present: 1175, absent: 32, leave: 27 },
  { day: "Fri", present: 1134, absent: 52, leave: 48 },
  { day: "Sat", present: 845, absent: 12, leave: 377 },
  { day: "Sun", present: 0, absent: 0, leave: 1234 },
];

export function AttendanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Attendance Overview</CardTitle>
        <CardDescription>Attendance patterns for the current week</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="day" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Bar dataKey="present" fill="#10b981" name="Present" radius={[4, 4, 0, 0]} />
            <Bar dataKey="leave" fill="#f59e0b" name="On Leave" radius={[4, 4, 0, 0]} />
            <Bar dataKey="absent" fill="#ef4444" name="Absent" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
