import { Grid, Typography } from "@mui/material"
import palette from "styles/palette"

function App() {
    return (
        <Grid
            container
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            width='100vw'
            height='100vh'
        >
            <Typography variant='h5'>
                This project is running on Storybook only!
            </Typography>
            <Typography variant='body1' mt={2}>
                To open Storybook, run:
            </Typography>
            <code
                style={{
                    color: palette.grey[700],
                    backgroundColor: palette.grey[100],
                    padding: "8px",
                }}
            >
                npm run storybook
            </code>
        </Grid>
    )
}

export default App
