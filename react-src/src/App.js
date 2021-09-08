import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import NumButton from './components/numBtn.tsx'
import OperationButton from './components/operationBtn.tsx'
import TextButton from './components/textBtn.tsx'
import ExtraButton from './components/extraBtn.tsx'



const useStyless = makeStyles((theme) => ({
  root: {
    padding: '24px',
  },
  lul: {
    paddingBottom: '10px'
  }
}));

const App = () => {
  const classes = useStyless();
  return (
    <div className={classes.root} >
      <Grid container item xs={3} className={classes.lul}>
        <ExtraButton mode="light" >Extra</ExtraButton>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <NumButton mode="light">0</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="light">( )</NumButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="light" >/</OperationButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="light" >+</OperationButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="light" >9</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="light" >8</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="light" >7</NumButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="light" >-</OperationButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="light" >6</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="light" >5</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="light" >4</NumButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="light" >*</OperationButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="light" >3</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="light" >2</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="light" >1</NumButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="light" >%</OperationButton>
        </Grid>
        <Grid item xs={3}>
          <TextButton mode="light" >Del</TextButton>
        </Grid>
        <Grid item xs={6}>
          <TextButton mode="light" >Clear All</TextButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="light" >=</OperationButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
