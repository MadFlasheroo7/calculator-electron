import Button from '@material-ui/core/Button';
import { orange, orangeText } from '../Theming/colors';
import { makeStyles } from '@material-ui/core/styles';

const optBtnStyle = makeStyles(() => ({
    light: {
        fontSize: 'calc(5px + 3vmin)',
        fontWeight: 'bold',
        backgroundColor: orange.light,
        borderRadius: '20px',
        height: '75px',
        color: orangeText.light,
        '&:hover': {
            backgroundColor: orange.light,
        }
    },
    dark: {
        fontSize: 'calc(5px + 3vmin)',
        fontWeight: 'bold',
        backgroundColor: orange.dark,
        height: '75px',
        borderRadius: '20px',
        color: orangeText.dark,
        '&:hover': {
            backgroundColor: orange.dark
        }
    }
}));

const OperationButton = (
    props: { mode: "light" | "dark", children: String }) => {
    const classes = optBtnStyle();
    return (
        <Button className={
            props.mode === "light" ? classes.light : classes.dark}
            fullWidth >
            {props.children}
        </Button>
    )
}

export default OperationButton;