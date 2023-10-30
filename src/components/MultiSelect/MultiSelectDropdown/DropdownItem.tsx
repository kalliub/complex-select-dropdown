import {
    ButtonBase,
    Checkbox,
    CheckboxProps,
    Grid,
    SxProps,
    Typography,
} from "@mui/material"

export interface DropdownItemProps extends CheckboxProps {
    children: string
    sx?: SxProps
}

const DropdownItem = ({
    children,
    sx,
    onClick = () => false,
    ...checkboxProps
}: DropdownItemProps) => {
    const handleClick = event => {
        onClick(event)
    }

    return (
        <ButtonBase
            sx={{
                m: 0,
                px: 2,
                py: 1,
                width: "100%",
                justifyContent: "flex-start",
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
                ...sx,
            }}
            onClick={handleClick}
        >
            <Grid container alignItems='center'>
                <Checkbox {...checkboxProps} />
                <Typography>{children}</Typography>
            </Grid>
        </ButtonBase>
    )
}

export default DropdownItem
