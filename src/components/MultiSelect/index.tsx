import {
    Box,
    ButtonBase,
    FormLabel,
    FormLabelProps,
    Grid,
    Input,
    InputProps,
    Popover,
    Typography,
} from "@mui/material"
import style from "./style"
import Icon from "components/Icon"
import { useRef, useState } from "react"

interface MultiSelectProps extends Omit<InputProps, "label"> {
    label: FormLabelProps["children"]
}

const MultiSelect = ({ label, sx, ...inputProps }: MultiSelectProps) => {
    const inputRef = useRef(null)
    const [anchorEl, setAnchorEl] = useState(null)

    const renderEndAdornment = () => {
        return (
            <ButtonBase
                sx={{
                    borderRadius: "4px",
                    padding: "8px",
                }}
                onClick={() => {
                    setAnchorEl(inputRef.current)
                }}
            >
                <Icon name='angle-down' />
            </ButtonBase>
        )
    }

    return (
        <Grid container flexDirection='column'>
            <FormLabel>{label}</FormLabel>

            <Input
                ref={inputRef}
                disableUnderline
                onChange={({ target: { value } }) => console.log(value)}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                sx={{ ...style, ...(sx as any) }}
                endAdornment={renderEndAdornment()}
                {...inputProps}
            />

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <Box p={2}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant='body1'>Option 1</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Popover>
        </Grid>
    )
}

export default MultiSelect
