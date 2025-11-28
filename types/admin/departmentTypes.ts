export interface Department {
  _id: string;
  departmentName: string;
  status: "active" | "inactive";
  description?: string;
  departmentHead: string;        // store ObjectId as string
  departmentHeadEmail: string;
  employeeCount: number;
  annualBudget: number;
  location?: string;
  createdAt?: string;
  updatedAt?: string;
}