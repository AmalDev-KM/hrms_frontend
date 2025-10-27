import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", employees: 980, newHires: 45 },
  { month: "Feb", employees: 1020, newHires: 52 },
  { month: "Mar", employees: 1065, newHires: 48 },
  { month: "Apr", employees: 1098, newHires: 38 },
  { month: "May", employees: 1142, newHires: 55 },
  { month: "Jun", employees: 1175, newHires: 42 },
  { month: "Jul", employees: 1198, newHires: 35 },
  { month: "Aug", employees: 1234, newHires: 48 },
];

export function EmployeeGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Growth</CardTitle>
        <CardDescription>Total employees and new hires over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
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
            <Line 
              type="monotone" 
              dataKey="employees" 
              stroke="#3b82f6" 
              strokeWidth={2}
              name="Total Employees"
              dot={{ fill: "#3b82f6" }}
            />
            <Line 
              type="monotone" 
              dataKey="newHires" 
              stroke="#10b981" 
              strokeWidth={2}
              name="New Hires"
              dot={{ fill: "#10b981" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
