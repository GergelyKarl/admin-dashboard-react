import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({
  title,
  data,
  dataKey,
  grid,
}) {
  return (
    <div className="chart">
      <h3 className="chart__title">{title}</h3>
      <ResponsiveContainer
        width="100%"
        height="100%"
        aspect={4 / 1}
      >
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#4d05e8"
            interval="preserveStartEnd"
          />

          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#4d05e8"
            dot={false}
          />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e8e8e8" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
