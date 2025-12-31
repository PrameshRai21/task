import AreaCharts from '@Components/RechartsComponents/AreaChart';
import BarCharts from '@Components/RechartsComponents/BarChart';
import LineChartComp from '@Components/RechartsComponents/LineChart/LineChartComp';
import PieCharts from '@Components/RechartsComponents/PieChart';
import { useFetchChartApi } from '@Hooks/chartDataHooks/useFetchData';

function Charts() {
  const { data } = useFetchChartApi();
  return (
    <div>
      <LineChartComp chart_data={data} />
      <BarCharts />
      <AreaCharts />
      <PieCharts />
    </div>
  );
}

export default Charts;
