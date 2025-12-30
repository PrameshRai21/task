import AreaCharts from '@Components/RechartsComponents/AreaChart';
import BarCharts from '@Components/RechartsComponents/BarChart';
import LineChartComp from '@Components/RechartsComponents/LineChart/LineChartComp';
import PieCharts from '@Components/RechartsComponents/PieChart';

function Charts() {
  return (
    <div>
      <LineChartComp />
      <BarCharts />
      <AreaCharts />
      <PieCharts />
    </div>
  );
}

export default Charts;
