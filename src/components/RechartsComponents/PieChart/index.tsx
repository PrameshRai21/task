import {
  ResponsiveContainer,
  PieChart,
  Tooltip,
  Pie,
  Legend,
  Cell,
} from 'recharts';
import CustomTooltip from '../CommonComponent/CustomTooltip';
import { ChartData } from '@Types/index';

function PieCharts({ chart_data }: ChartData | any) {
  const data = chart_data?.data;

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A855F7'];

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
              dataKey="netIncome"
              nameKey="fiscalYear"
              cy="50%"
              cx="50%"
              outerRadius="80%"
              label
              isAnimationActive={true}
              fill="purple"
            >
              {data?.map((_: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={CustomTooltip} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PieCharts;
