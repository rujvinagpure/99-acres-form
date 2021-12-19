import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import * as React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
 inputDiv: {
  display:"flex",
  margin: '10px 10px',
  },

  formControl: {
    
    minWidth: 120,
  },
  root: {
    '& > *': {
      margin: '10px 10px',
      width: '25ch',
    },
  },
main:{
  margin: "10px 10px"
},
mainPlus:{
  margin: "10px 35px"
}



});


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },



}))(MenuItem);

const currencies = [
  {
    value: 'f',
    label: 'Basement',
  },
  {
    value: 'ff',
    label: 'Lower Ground',
  },
  {
    value: 'fff',
    label: 'Ground',
  },

  {
    value: 'ffff',
    label: '1',
  },
  {                                                                                             
    value: 'fffff',
    label: '2',
  },

];


export default function Property(){
//text field select
  const [currency, setCurrency] = React.useState('EUR');
 const handleChangeTextField = (event) => {
    setCurrency(event.target.value);
  };


  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

//select for possession by field
  
  const [age, setAge] = React.useState('');
  const handleChangePossession = (event) => {
    setAge(event.target.value);
  };


  //checkbox
const [state, setState] = React.useState({
  checkedB: true,
  checkedA: true,
  checkedC: true,
  checkedD: true,
   });
 
 const handleChange = (event) => {
   setState({ ...state, [event.target.name]: event.target.checked });
 };
 //checkbox ends

  
    return(
        //main div that wraps whole thing
   <div>
  <div>
<div className={classes.main}>
    <h1>Tell us about your property</h1>
    <h3> Add Room Details </h3>
</div>
<div className={classes.mainPlus}>
<div className="bedroom section">
    <p>No of Bedrooms</p>
    <div className='buttons-numbering'>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button></div>
   <Button variant="outlined">Add Other</Button>
</div>
<div className="bedroom section">
    <p>No of Bedrooms</p>
    <div className='buttons-numbering'>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button></div>
   <Button variant="outlined">Add Other</Button>
</div>
<div className="bedroom section">
    <p>No of Bedrooms</p>
    <div className='buttons-numbering'>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button></div>
   <Button variant="outlined">Add Other</Button>
</div>
</div>
</div>

{/* div that wraps whole  area details section */}
  <div className={classes.main}>
     <div>
         <h3> Add Area Details</h3>
         <p> Atleast one area type mandatory</p>
     </div> 
    {/*  div that wraps whole input and dropdown */}
<div className={classes.inputDiv}>
<Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Plot Area"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
     </Paper>

    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          
          <ListItemText primary="sq.ft" />
        </StyledMenuItem>
        <StyledMenuItem>
          
          <ListItemText primary="sq.yards" />
        </StyledMenuItem>
        <StyledMenuItem>
         
          <ListItemText primary="sq.m" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
</div>
{/* input div ends */}

{/* another input div starts  */}
<div className={classes.inputDiv}>
<Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Built up Area"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
     </Paper>

    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          
          <ListItemText primary="sq.ft" />
        </StyledMenuItem>
        <StyledMenuItem>
          
          <ListItemText primary="sq.yards" />
        </StyledMenuItem>
        <StyledMenuItem>
         
          <ListItemText primary="sq.m" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
</div>

<div className={classes.main}>

<div className={classes.inputDiv}>
<h4>Other Rooms</h4>
<p>(optional)</p>
</div>
{/* div for 4 checkbox */}
<div className={classes.inputDiv} >
<FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
          }
        label="Servant Room"
        />
<FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
          }
        label="Pooja Room"
        />
        <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
          />
          }
        label="Study Room"
        />
        <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedD}
            onChange={handleChange}
            name="checkedD"
            color="primary"
          />
          }
        label="Store Room"
        />
        </div>
        </div>
{/* div availibility status */}
<div className={classes.main}>
  <h4>Availability Status</h4>
  <div>
  <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
  <Button>Ready To Move </Button>
  <Button>Under construction</Button>
</ButtonGroup>
  </div>
</div>

{/* div possesion by plus dropdown */}
<div className={classes.main}>
<h4>
  Possession By
</h4>
  <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Expected By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChangePossession}
        >
          <MenuItem value={10}>2020</MenuItem>
          <MenuItem value={20}>2021</MenuItem>
          <MenuItem value={30}>2022</MenuItem>
        </Select>
      </FormControl>
</div>

<div className={classes.main}>
<div>
  <h4> Add floor Details</h4>
  <p> Total no of floors and floor details</p>
</div>
<div className={classes.root}>
<TextField id="outlined-basic" label="Total Floors" variant="outlined" />
<TextField
          id="outlined-select-currency"
          select
          label="Property On Floor"
          value={currency}
          onChange={handleChangeTextField}
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


{/* add area detail section div ends here */}
  </div>

{/* whole page detail section div ends here */}
        </div>



    )
}