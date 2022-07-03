import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

function WeaknessGraph({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barSize={10}
        margin={{ top: 10, bottom: 10, left: -5, right: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="topicName" />
        <YAxis allowDecimals={false}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="correct" fill="#1BBC9B" />
        <Bar dataKey="incorrect" fill="#FE5252" />
        <Bar dataKey="skipped" fill="#B3DDD4" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default WeaknessGraph;
