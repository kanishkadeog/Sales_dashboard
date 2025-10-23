"use client";

interface Props {
  chartType: "bar" | "line" | "pie";
  setChartType: (type: "bar" | "line" | "pie") => void;
}

export const ChartSelector = ({ chartType, setChartType }: Props) => (
  <div className="mb-4 flex gap-4">
    {["bar", "line", "pie"].map((type) => (
      <button
        key={type}
        className={`px-4 py-2 rounded ${
          chartType === type ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
        onClick={() => setChartType(type as "bar" | "line" | "pie")}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    ))}
  </div>
);
