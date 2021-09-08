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
      <Grid container item xs={2} className={classes.lul}>
        <ExtraButton mode="dark" >Extra</ExtraButton>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <NumButton mode="dark">0</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="dark">( )</NumButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="dark" >/</OperationButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="dark" >+</OperationButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="dark" >9</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="dark" >8</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="dark" >7</NumButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="dark" >-</OperationButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="dark" >6</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="dark" >5</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="dark" >4</NumButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="dark" >*</OperationButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="dark" >3</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="dark" >2</NumButton>
        </Grid>
        <Grid item xs={3}>
          <NumButton mode="dark" >1</NumButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="dark" >%</OperationButton>
        </Grid>
        <Grid item xs={3}>
          <TextButton mode="dark" >Del</TextButton>
        </Grid>
        <Grid item xs={6}>
          <TextButton mode="dark" >Clear All</TextButton>
        </Grid>
        <Grid item xs={3}>
          <OperationButton mode="dark" >=</OperationButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
