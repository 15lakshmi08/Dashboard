import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
  {
    id: 1,
    title: 'Total Page Views',
    description: 'You made an extra 35,000 this year',
  },
  {
    id: 2,
    title: 'Total Users',
    description: 'You made an extra 8,900 this year',
  },
  {
    id: 3,
    title: 'Total Order',
    description: 'You made an extra 1,943 this year',
  },
  {
    id: 4,
    title: 'Total Sales',
    description: 'You made an extra 20,395 this year',
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    
    <>

    <h3>Dashboard</h3>
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(350px, 100%), 1fr))',
        gap: 2,
      }}
    >
      
      {cards.map((card, index) => (
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%', width:'100%'}}>
              <Typography variant="h5 " component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </>
  );
}

export default SelectActionCard;
