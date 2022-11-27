import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import "./home.css";





function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://artconnect.my.canva.site/#home">
        artconnect.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const tiers = [
  {
    title: 'Create',
  
    description: [
      'Publish your art and get seen by audiences. Get hired.Earn money from viewer subscriptions.',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
    buttonhref: "https://my-react-app-faneleedison-ux.vercel.app/create",
  },
  {
    title: 'Play',
   
    description: [
      "Follow  to your favourite creatives. Play free newly released videos games. Exclusive content available on Paid subscribtion. Watch cartoons. Read novels.",
      "And much more!",

    ],
    buttonText: 'PLAY NOW',
    buttonVariant: 'contained',
    buttonhref: "https://my-react-app-faneleedison-ux.vercel.app/play",
  },
  {
    title: 'Hire',
    
    description: [
      'Hire the best creatives in South Africa in one swipe.',
      'Get access to endless amount of creatives for your business.',
      
      
    ],
    buttonText: 'HIRE A CREATIVE',
    buttonVariant: 'outlined',
    buttonhref: "https://my-react-app-faneleedison-ux.vercel.app/create",
  },
];


export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
        ART CONNECT
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
     
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                    
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} href={tier.buttonhref}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer
      
        description="Connecting South Africa's Best Creatives"
      />

  
    </React.Fragment>
  );
}

