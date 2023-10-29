import {
    Checkbox,
    FormControlLabel,
    FormControlLabelProps,
} from "@mui/material"

export interface DropdownItemProps
    extends Omit<
        FormControlLabelProps,
        "children" | "onClick" | "label" | "control"
    > {
    children: FormControlLabelProps["label"]
    onClick?: () => void
}

const DropdownItem = ({
    children,
    sx,
    onClick = () => false,
    ...formControlLabelProps
}: DropdownItemProps) => {
    const handleClick = () => {
        onClick()
    }

    return (
        <FormControlLabel
            control={<Checkbox />}
            label={children}
            onClick={handleClick}
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
            {...formControlLabelProps}
        />
    )
}

export default DropdownItem
