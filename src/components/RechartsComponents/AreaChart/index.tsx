import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { rangeData } from '@Assets/chart_data/rangeData';

function AreaCharts({ isAnimationActive = true }) {
  return (
    <div className="container naxatw-flex naxatw-h-screen naxatw-w-screen naxatw-items-center naxatw-justify-center naxatw-font-primary">
      <div
        className="naxatw-bg-green-100"
        style={{ width: '100%', maxWidth: 800, aspectRatio: '1.618' }}
      >
        <h3 className="naxatw-text-center">Area Chart</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={rangeData}>
            <CartesianGrid
              stroke="gray"
              strokeDasharray="5 5"
              strokeOpacity="40%"
            />
            <Area
              dataKey="temperature"
              stroke="#8884d8"
              fill="#8884d8"
              isAnimationActive={isAnimationActive}
            />
            <XAxis dataKey="day" />
            <YAxis
              domain={['auto', 'auto']}
              label={{
                position: 'insideTopLeft',
                value: 'Day',
                angle: -90,
                dy: 70,
              }}
            />
            <Tooltip />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AreaCharts;
