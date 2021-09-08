import Button from '@material-ui/core/Button';
import { red, redText } from '../Theming/colors';
import { makeStyles } from '@material-ui/core/styles';

const textBtnStyle = makeStyles(() => ({
    light: {
        fontSize: 'calc(10px + 3vmin)',
        fontWeight: 'bold',
        backgroundColor: red.light,
        borderRadius: '20px',
        height: '75px',
        color: redText.light,
        '&:hover': {
            backgroundColor: red.light,
        }
    },
    dark: {
        fontSize: 'calc(10px + 3vmin)',
        fontWeight: 'bold',
        backgroundColor: red.dark,
        height: '75px',
        borderRadius: '20px',
        color: redText.dark,
        '&:hover': {
            backgroundColor: red.dark
        }
    }
}));

const TextButton = (
    props: { mode: "light" | "dark", children: String }) => {
    const classes = textBtnStyle();
    return (
        <Button className={
            props.mode === "light" ? classes.light : classes.dark}
            fullWidth >
            {props.children}
        </Button>
    )
}

export default TextButton;
