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
import CustomTooltip from '../CommonComponent/CustomTooltip';
import { ChartData } from '@Types/index';

const formatXAxisTick = (value: any): string => {
  return `${value} AD`;
};

const formatYAxisTick = (value: any): string => {
  return `${value / 1000000000} B`;
};

const customBarLabel = ({ x, y, width, value }: any) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      fontSize={14}
      dy={-7}
    >{`G.Profit: ${(value / 1000000000).toFixed(1)}B`}</text>
  );
};

function BarCharts({ chart_data }: ChartData | any) {
  const data = chart_data?.data;
  return (
    <div className="container naxatw-flex naxatw-h-screen naxatw-w-screen naxatw-items-center naxatw-justify-center naxatw-font-primary">
      <div
        className="naxatw-bg-green-100"
        style={{ width: '100%', maxWidth: 800, aspectRatio: '1.618' }}
      >
        <h3 className="naxatw-text-center">Gross Profit Bar Chart</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              stroke="gray"
              strokeDasharray={'5 5'}
              strokeOpacity={'30%'}
            />
            <Bar
              barSize={100}
              dataKey={'grossProfit'}
              fill="#8884d8"
              label={customBarLabel}
            />
            <XAxis
              stroke="#333333"
              dataKey={'fiscalYear'}
              tickFormatter={formatXAxisTick}
            />
            <YAxis
              domain={['auto', 'auto']}
              stroke="#333333"
              width={70}
              tickFormatter={formatYAxisTick}
              label={{
                position: 'insideTopLeft',
                value: 'grossProfit',
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
