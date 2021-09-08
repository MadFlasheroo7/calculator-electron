import Button from '@material-ui/core/Button';
import { blue, blueText } from '../Theming/colors';
import { makeStyles } from '@material-ui/core/styles';

const numBtnStyle = makeStyles(() => ({
    light: {
        fontSize: 'calc(10px + 3vmin)',
        fontWeight: 'bold',
        backgroundColor: blue.light,
        borderRadius: '20px',
        height: '75px',
        color: blueText.light,
        '&:hover': {
            backgroundColor: blue.light,
        }
    },
    dark: {
        fontSize: 'calc(10px + 3vmin)',
        fontWeight: 'bold',
        backgroundColor: blue.dark,
        height: '75px',
        borderRadius: '20px',
        color: blueText.dark,
        '&:hover': {
            backgroundColor: blue.dark
        }
    }
}));

const NumButton = (
    props: { mode: "light" | "dark", children: "S" }) => {
    const classes = numBtnStyle();
    return (
        <Button className={
            props.mode === "light" ? classes.light : classes.dark}
            fullWidth >
            {props.children}
        </Button>
    )
}

export default NumButton;