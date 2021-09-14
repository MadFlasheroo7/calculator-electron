import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import lightLogo from './assets/bulbOn.svg'
import darkLogo from './assets/bulbOff.svg'
import { darkTheme, lightTheme } from './Theming/Theme'
import { ThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from "@material-ui/core/CssBaseline";
import NumButton from './components/numBtn.tsx'
import OperationButton from './components/operationBtn.tsx'
import TextButton from './components/textBtn.tsx'
import ExtraButton from './components/extraBtn.tsx'

const useStyless = makeStyles(() => ({
  root: {
    marginBottom: '10px',
    padding: '34px',
    height: '100vh',
    display: 'grid',
    alignItems: 'end'
  },
  display: {
    height: '34vh',
  }
}));

const App = () => {
  const classes = useStyless();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={classes.root} >
        <Grid container item xs={12} justifyContent='flex-end'>
          <IconButton fullWidth style={{padding: ''}} className="darkMode_toggle">
            <img src={lightLogo} />
          </IconButton>
        </Grid>
        <Grid container >
          <Grid item xs  className={classes.display}>
            <span></span>
          </Grid>
        </Grid>
        <Grid container item xs={1}>
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
    </ThemeProvider>
  );
}

export default App;
