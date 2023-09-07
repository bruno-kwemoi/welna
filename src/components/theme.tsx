import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary:{
            main: '#269BB4'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '100px'
                },
                outlinedPrimary: {
                    borderRadius: '0px'
                }
            }
        }
    }
})

export default theme