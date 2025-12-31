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
import { ChartData } from '@Types/index';
import CustomTooltip from '../CommonComponent/CustomTooltip';

const formatAxisTick = (value: number) => {
  return `${value / 1000000000}B`;
};

export default function LineChartComp({ chart_data }: ChartData | any) {
  const data = chart_data?.data;
  return (
    <div className="container naxatw-flex naxatw-h-screen naxatw-w-screen naxatw-items-center naxatw-justify-center">
      <div
        className="naxatw-bg-green-100"
        style={{ width: '90%', maxWidth: 800, aspectRatio: '1.618' }}
      >
        <h3 className="naxatw-text-center">
          {data?.symbol} Net Income Line Chart
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              stroke="gray"
              strokeDasharray="5 5"
              strokeOpacity="50%"
            />
            <Line
              type="monotone"
              stroke="purple"
              strokeWidth={2}
              dataKey="netIncome"
            />
            <XAxis dataKey="fiscalYear" />
            <YAxis
              domain={['auto', 'auto']}
              width={100}
              tickFormatter={formatAxisTick}
              label={{
                value: 'netIncome',
                position: 'insideBottomLeft',
                angle: -90,
              }}
            />
            <Legend align="center" />
            <Tooltip
              content={CustomTooltip}
              wrapperStyle={{ width: 200, backgroundColor: '#ccc' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
