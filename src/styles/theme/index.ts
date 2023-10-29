import { createTheme } from "@mui/material/styles"
import palette from "styles/palette"
import inputTheme from "./input.theme"

export default () =>
    createTheme({
        palette: palette,
        components: {
            ...inputTheme,
        },
    })
