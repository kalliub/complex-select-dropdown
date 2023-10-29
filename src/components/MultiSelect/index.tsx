import { ButtonBase, FormLabel, Grid, Input } from "@mui/material"
import Icon from "components/Icon"
import { useRef, useState } from "react"
import { MultiSelectProps } from "./types"
import { MultiSelectProvider } from "./context"
import MultiSelectDropdown from "./MultiSelectDropdown"

const MultiSelect = ({
    variant,
    options,
    label,
    ...inputProps
}: MultiSelectProps) => {
    const inputRef = useRef(null)
    const [anchorEl, setAnchorEl] = useState(null)
    const [selectedOptions, setSelectedOptions] = useState<
        MultiSelectProps["options"] | null
    >(null)

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
                placeholder='Type to filter'
                onChange={({ target: { value } }) => console.log(value)}
                endAdornment={renderEndAdornment()}
                {...inputProps}
            />

            <MultiSelectProvider
                variant={variant}
                options={options}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            >
                <MultiSelectDropdown {...{ anchorEl, setAnchorEl }} />
            </MultiSelectProvider>
        </Grid>
    )
}

export default MultiSelect
