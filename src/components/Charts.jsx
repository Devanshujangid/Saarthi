import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Charts() {
  const data = [
    { name: "Anxiety", value: 40 },
    { name: "Stress", value: 30 },
    { name: "Depression", value: 20 },
    { name: "Wellness", value: 10 },
  ];

  const barData = [
    { name: "Jan", stress: 60, sleep: 7 },
    { name: "Feb", stress: 55, sleep: 7.2 },
    { name: "Mar", stress: 62, sleep: 6.8 },
    { name: "Apr", stress: 50, sleep: 7.5 },
    { name: "May", stress: 48, sleep: 7.6 },
    { name: "Jun", stress: 53, sleep: 7.1 },
  ];

  const pieData = [
    { name: "Anxiety", value: 40 },
    { name: "Depression", value: 25 },
    { name: "Stress", value: 20 },
    { name: "Others", value: 15 },
  ];
  const COLORS = ["#3B7A57", "#6C8C7F", "#A3BFA8", "#88A09E"];

  return (
    <section className="mt-37 mb-15 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      <div className="col-span-2 bg-white rounded-2xl p-4 shadow">
        <h3 className="font-semibold mb-3">Monthly survey snapshot</h3>
        <div style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="stress" name="Avg stress (0-100)" fill="#3B7A57" />
              <Bar dataKey="sleep" name="Avg sleep (hrs)" fill="#88A09E" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow">
        <h3 className="font-semibold mb-3">Reported concerns (survey)</h3>
        <div style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
                {pieData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
