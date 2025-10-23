"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { ChartSelector } from "../molecules/ChartSelector";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const mockData = [
  { year: 2022, sales: 120000 },
  { year: 2023, sales: 150000 },
  { year: 2024, sales: 170000 },
];

export const SalesChart = () => {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Sales Data</h2>
      <ChartSelector chartType={chartType} setChartType={setChartType} />

      {chartType === "bar" && (
        <BarChart width={600} height={300} data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      )}

      {chartType === "line" && (
        <LineChart width={600} height={300} data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      )}

      {chartType === "pie" && (
        <PieChart width={400} height={300}>
          <Pie data={mockData} dataKey="sales" nameKey="year" cx="50%" cy="50%" outerRadius={80}>
            {mockData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      )}
    </div>
  );
};
