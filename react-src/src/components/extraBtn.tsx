import Button from '@material-ui/core/Button';
import { pink, pinkText } from '../Theming/colors';
import { makeStyles } from '@material-ui/core/styles';

const extraBtnStyle = makeStyles(() => ({
    light: {
        fontSize: '20sp',
        fontWeight: 'bold',
        backgroundColor: pink.light,
        borderRadius: '20px',
        height: '60px',
        color: pinkText.light,
        '&:hover': {
            backgroundColor: pink.light,
        }
    },
    dark: {
        fontSize: 'calc(10px + 3vmin)',
        fontWeight: 'bold',
        backgroundColor: pink.dark,
        height: '60px',
        borderRadius: '20px',
        color: pinkText.dark,
        '&:hover': {
            backgroundColor: pink.dark
        }
    }
}));

const ExtraButton = (
    props: { mode: "light" | "dark", children: String }) => {
    const classes = extraBtnStyle();
    return (
        <Button className={
            props.mode === "light" ? classes.light : classes.dark}
            fullWidth >
            {props.children}
        </Button>
    )
}

export default ExtraButton;