import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { data } from '@Assets/chart_data/data';

export default function LineChartComp() {
  return (
    <div className="container naxatw-flex naxatw-h-screen naxatw-w-screen naxatw-items-center naxatw-justify-center">
      <div
        className="naxatw-bg-green-100"
        style={{ width: '90%', maxWidth: 600, aspectRatio: '1.618' }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              stroke="gray"
              strokeDasharray={'5 5'}
              strokeOpacity={'80%'}
            />
            <Line
              type={'monotone'}
              stroke="purple"
              strokeWidth={2}
              dataKey="uv"
            />
            <XAxis dataKey="name" />
            <YAxis
              width={60}
              label={{ value: 'PV', position: 'insideLeft', angle: -90 }}
            />
            <Legend align="center" />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
