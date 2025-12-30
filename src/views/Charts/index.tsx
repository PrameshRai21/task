import AreaCharts from '@Components/RechartsComponents/AreaChart';
import BarCharts from '@Components/RechartsComponents/BarChart';
import LineChartComp from '@Components/RechartsComponents/LineChart/LineChartComp';

function Charts() {
  return (
    <div>
      <LineChartComp />
      <BarCharts />
      <AreaCharts />
    </div>
  );
}

export default Charts;
