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
import CustomTooltip from '../CommonComponent/CustomTooltip';
import { ChartData } from '@Types/index';

const formatYAxisTick = (value: any): string => {
  return `${value / 1000000000} B`;
};

function AreaCharts({ chart_data }: ChartData | any) {
  const data = chart_data?.data;
  return (
    <div className="container naxatw-flex naxatw-h-screen naxatw-w-screen naxatw-items-center naxatw-justify-center naxatw-font-primary">
      <div
        className="naxatw-bg-gray-100"
        style={{ width: '100%', maxWidth: 800, aspectRatio: '1.618' }}
      >
        <h3 className="naxatw-text-center">EBIT & EBITDA Area Chart</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorEbit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorEbitda" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              stroke="gray"
              strokeDasharray="5 5"
              strokeOpacity="40%"
            />
            <Area
              type={'monotone'}
              dataKey="ebitda"
              stroke="#8884d8"
              fill="url(#colorEbitda)"
              isAnimationActive={true}
            />
            <Area
              type={'monotone'}
              dataKey="ebit"
              stroke="#8884d8"
              fill="url(#colorEbit)"
              isAnimationActive={true}
            />
            <XAxis dataKey="fiscalYear" angle={320} dy={10} dx={-10} />
            <YAxis
              domain={['auto', 'auto']}
              tickFormatter={formatYAxisTick}
              width={70}
              label={{
                position: 'insideTopLeft',
                value: 'ebit',
                angle: -90,
                dy: 70,
              }}
            />
            <Tooltip content={CustomTooltip} />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AreaCharts;
