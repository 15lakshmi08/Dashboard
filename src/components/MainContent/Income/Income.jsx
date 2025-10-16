import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicLabel() {
  return (
    <>
    <h3>Income Overview</h3>
    <BarChart
      {...props}
      series={[
        {
          data: [80,95,70,42,65,55,78],
          label: 'Series-1',
        },
       
      ]}
    />
    </>
  );
}

const props = {
  height: 500,
  xAxis: [{ data: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] }],
  yAxis: [{ width: 50 }],
};