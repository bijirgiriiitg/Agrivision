import { useState, useEffect } from "react";
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

function ComparisonGraph({ userScore, topperScore }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let tempData = [];
    userScore.forEach((obj, index) => {
      const tempObj = {
        topic: obj.topicName,
        Marks: obj.score || 0,
        Highest: topperScore[index].score || 0,
      };
      tempData = [...tempData, tempObj];
    });
    setData(tempData);
  }, [userScore, topperScore]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barSize={10}
        margin={{ top: 10, bottom: 10, left: -5, right: 10 }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="topic" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Marks" fill="#B3DDD4" />
        <Bar dataKey="Highest" fill="#1AB294" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ComparisonGraph;
