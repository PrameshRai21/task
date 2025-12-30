import { data } from '@Assets/chart_data/data';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import CustomTooltip from './CustomTooltip';

const formatAxisTick = (value: any): string => {
  return `*${value}*`;
};

const customBarLabel = ({ x, y, width, value }: any) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
    >{`value: ${value}`}</text>
  );
};

function BarCharts() {
  return (
    <div className="container naxatw-flex naxatw-h-screen naxatw-w-screen naxatw-items-center naxatw-justify-center naxatw-font-primary">
      <div
        className="naxatw-bg-green-100"
        style={{ width: '100%', maxWidth: 800, aspectRatio: '1.618' }}
      >
        <h3 className="naxatw-text-center">Bar Chart</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              stroke="gray"
              strokeDasharray={'5 5'}
              strokeOpacity={'30%'}
            />
            <Bar
              barSize={50}
              dataKey={'uv'}
              fill="#8884d8"
              label={customBarLabel}
            />
            <XAxis
              stroke="purple"
              dataKey={'name'}
              tickFormatter={formatAxisTick}
            />
            <YAxis
              domain={['auto', 'auto']}
              stroke="purple"
              width={70}
              label={{
                position: 'insideTopLeft',
                value: 'UV',
                angle: -90,
                dy: 70,
              }}
            />
            <Legend
              width={100}
              wrapperStyle={{
                top: 10,
                right: 10,
                backgroundColor: '#f5f5f5',
                border: '1px solid #d5d5d5',
                borderRadius: 3,
                lineHeight: '40px',
              }}
            />
            <Tooltip
              content={CustomTooltip}
              defaultIndex={2}
              active
              wrapperStyle={{ width: 300, backgroundColor: '#ccc' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarCharts;
