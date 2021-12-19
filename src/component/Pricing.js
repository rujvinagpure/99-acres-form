import * as React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
root: {
    margin: "10px 10px",
    display: "flex",
     },
    textArea:{
        margin: "0px 10px"
   },
   main:{
       margin: "10px 10px"
   }
  });

export default function Pricing() {
    const classes = useStyles();
return (

    <div className={classes.main}>
<h1>Add Pricing And Details</h1>

<div>
    <h4>Ownership</h4>
    <div>
    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
    <Button>Freehold</Button>
  <Button>Leasehold</Button>
  <Button>Co-operative society</Button>
  <Button>Power of Attorney</Button>
  </ButtonGroup>
    </div>
</div>

<div className={classes.main} >
<h4>Price Details</h4>
<div className={classes.root}>
<TextField className={classes.textArea} id="outlined-basic" label="Expected Price" variant="outlined" />
<TextField  className={classes.textArea} id="outlined-basic" label="Price per sq.ft." variant="outlined" />
</div>
</div>

<div className={classes.main}>
    <h4>What makes your property unique?</h4>
    <TextField
          id="outlined-multiline-static"
          label="Share some details about your property"
          multiline
          rows={5}
          defaultValue=""
          variant="outlined"
        />
</div>
</div>
)

}