import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


//import images of creators

import Richard from './profilepics/richard.jpg';
import Monica from './profilepics/monica.jpg';
import Jared from  './profilepics/jared.jpg';
import Erlich from './profilepics/erlich.jpg';
import Dinesh from './profilepics/dinesh.jpg';
import Elaine from './profilepics/elaine.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://artconnect.my.canva.site/#home">
      artconnect.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13 ,14,15 , 16 , 17 , 18 , 19 , 20 , 21];

const theme = createTheme();

export default function Feed() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              
             CONNECT
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Follow and subscribe to your favourite creator, play video games, watch cartons, and read novels, and much more
              from South Africa's best creatives. 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">MENTOR ME</Button>
              <Button variant="outlined">EXCLUSIVE CONTENT</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image= {Elaine}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Creator Name
                    </Typography>
                    <Typography>
                      This is section will show the blurb of the creative's work, the work's ratings and amount of download / plays of the work.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  variant="contained"size="small">DOWNLOAD</Button>
                    <Button size="small">PLAY</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
       
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        Connecting South Africa's Best Creatives
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}