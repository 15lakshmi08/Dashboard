import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function FunctionLabel() {
  return (
   <>
     <h3>
      Sales Report
     </h3>
    <BarChart
      {...props}
      series={[
        { data: [180, 90, 135,114,120,145,170,200,170,230,210,180], label: 'Income' },
        { data: [120, 45, 78,150,168,99,180,220,180,210,220,200], label: 'Cost of Sales' },
      ]}
    />
   </>

  );
}

const props = {
  height: 300,
  xAxis: [{ data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] }],
  yAxis: [{ width: 50 }],
};