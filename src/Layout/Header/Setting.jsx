import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}


export default function Setting() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: 250,
        position: 'relative',
        minHeight: 100,
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Setting" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        Edit Profile
      </TabPanel>
      <TabPanel value={value} index={0} dir={theme.direction}>
        View Profile
      </TabPanel>
      <TabPanel value={value} index={0} dir={theme.direction}>
        Social Profile
      </TabPanel>
      <TabPanel value={value} index={0} dir={theme.direction}>
        Billing
      </TabPanel>
      <TabPanel value={value} index={0} dir={theme.direction}>
        Logout
      </TabPanel>



      <TabPanel value={value} index={1} dir={theme.direction}>
        Support
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Account Setting
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Privacy Center
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Feedback
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        History
      </TabPanel>
    </Box>
  );
}