import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import themesection from './theme';
const useStyles = makeStyles({
    main: {
    margin: '10px 10px',
    
    },
  });

const currencies = [
  {
    value: '',
    label: '',
  },
  {
    value: '',
    label: '',
  },
  {
    value: '',
    label: '',
  },
  {
    value: '',
    label: '',
  },
];

export default function SelectTextFields() {
  const [currency, setCurrency] = React.useState('EUR');
  const classes = useStyles();
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
<div className={classes.main}>
<h1 className={themesection.palette.primary.main}>Where is your property located?</h1>
<p>An accurate location helps you connect with the right buyers</p>
<div>
<div>
        <TextField
          id="outlined-select-currency"
          select
          label="City"
          value={currency}
          onChange={handleChange}
          helperText=""
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Apartment/society(optional)"
          value={currency}
          onChange={handleChange}
          helperText=""
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Locality"
          value={currency}
          onChange={handleChange}
          helperText=""
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
</div>
</div>

        
     
    </Box>
  );
}
