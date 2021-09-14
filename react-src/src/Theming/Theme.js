import { createTheme } from '@material-ui/core/styles';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#212121'
        }
    },

    // backgroundColor: "#000"
})

const lightTheme = createTheme({
    palette: {
        type: 'light',
    }
})

export { darkTheme, lightTheme }