import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://artconnect.my.canva.site/#home">
        artconect.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
        Design
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
        <Link color="inherit" href="https://artconnect.my.canva.site/#home">

        <Button variant="contained">VIEW FULL DESIGN</Button>
        
      </Link>
         
        </Typography>
        <Typography variant="body1">The first stages of this project development a website was designed. For the results of this project to be practical and have the intended effect, rigorous research had to be conducted before anything else. In order to make my message simple to grasp and the navigation of my site or app clear, research allowed me to develop a client-oriented project (for hiring teams, audiences, and creatives). I also watched  videos and reading articles on crucial issues on the current state of creatives and graduates in SA , and all of this has an effect on the product's success and how it is seen. Additionally, identifying best practices and poor design choices by visiting websites that showcase the work of other creators, such as Tinder, Behanace, and Digital African Art. I evaluated the features of their websites and apps before choosing the finest ones to incorporate into the design and development of my own app.</Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">

        ART CONNECT
          <Typography variant="body1">
          Connecting South Africa's Best Creatives
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}