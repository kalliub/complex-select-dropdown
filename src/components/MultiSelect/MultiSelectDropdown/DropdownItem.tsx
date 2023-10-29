import {
    Checkbox,
    FormControlLabel,
    FormControlLabelProps,
} from "@mui/material"

export interface DropdownItemProps
    extends Omit<FormControlLabelProps, "children" | "label" | "control"> {
    children: FormControlLabelProps["label"]
}

const DropdownItem = ({
    children,
    sx,
    ...formControlLabelProps
}: DropdownItemProps) => {
    return (
        <FormControlLabel
            control={<Checkbox />}
            label={children}
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
