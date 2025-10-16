import * as React from 'react';
import Chart from 'react-apexcharts';
import Box from '@mui/material/Box';

const options = {
  series: [
    {
      name: 'Page views',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35],
    },
    {
      name: 'Sessions',
      data: [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  tooltip: {
    x: {
      show: true, // Display month as is
    },
  },
};

export default function StackedAreaChart() {
  return (
    <Box sx={{ width: '100%', height: 350 }}>
      <h3>
        Unique Visitors
      </h3>
      <Chart options={options} series={options.series} type="area" height={350} />
    </Box>
  );
}