import { data } from '@Assets/chart_data/data';
import {
  ResponsiveContainer,
  PieChart,
  Tooltip,
  Pie,
  Legend,
  Cell,
} from 'recharts';

function PieCharts({ isAnimationActive = true }) {
  const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#A855F7',
    '#EF4444',
    '#0FA82E',
  ];

  return (
    <div className="container naxatw-flex naxatw-h-screen naxatw-w-screen naxatw-items-center naxatw-justify-center naxatw-font-primary">
      <div
        className="naxatw-bg-green-100"
        style={{ width: '100%', maxWidth: 800, aspectRatio: '1.618' }}
      >
        <h3 className="naxatw-text-center">Pie Chart</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="pv"
              nameKey="name"
              cy="50%"
              cx="50%"
              outerRadius="80%"
              innerRadius="40%"
              label
              isAnimationActive
              fill="purple"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell - ${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PieCharts;
