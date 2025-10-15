import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  p: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export default function ListDividers() {
  return (
    <>
    <h3>
      Transaction History
    </h3>
    <List sx={style} aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary="Order1" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Order2" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Order3" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Order4" />
      </ListItem>
    </List>
    </>
  );
}
