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
      <BarCharts chart_data={data} />
      <AreaCharts chart_data={data} />
      <PieCharts chart_data={data} />
    </div>
  );
}

export default Charts;
