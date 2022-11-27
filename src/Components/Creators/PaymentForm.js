import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="qualification"
            label="Name of Qualification"
            fullWidth
           
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="univeristy"
            label="Univeristy or College Name"
            fullWidth
           
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            
            id="year"
            label="Year Completed"
            fullWidth
           
            variant="standard"
          />
        </Grid>









        <Grid item xs={12} md={6}>
          <TextField
            required
            id="professionName"
            label="Name of Profession"
            fullWidth
           
            variant="standard"
          />
        </Grid>
      
     
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Tick Here If You Have No Qualifications"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}