import { ButtonBase, FormLabel, Grid, Input } from "@mui/material"
import Icon from "components/Icon"
import { useMemo, useRef, useState } from "react"
import { MultiSelectProps } from "./types"
import { MultiSelectProvider } from "./context"
import MultiSelectDropdown from "./MultiSelectDropdown"
import InputBadge from "components/InputBadge"

const MultiSelect = ({
    variant,
    options,
    label,
    countBadge,
    ...inputProps
}: MultiSelectProps) => {
    const inputRef = useRef(null)
    const [anchorEl, setAnchorEl] = useState(null)
    const [selectedOptions, setSelectedOptions] = useState<
        MultiSelectProps["options"]
    >({})
    const selectedOptionsCount = useMemo(() => {
        if (variant === "withSections") {
            return Object.keys(selectedOptions).reduce((acc, curr) => {
                return acc + Object.keys(selectedOptions[curr]).length
            }, 0)
        } else {
            return Object.keys(selectedOptions).length
        }
    }, [selectedOptions, variant])

    const renderEndAdornment = () => {
        return (
            <Grid
                container
                justifyContent='flex-end'
                alignItems='center'
                width='fit-content'
                flexWrap='nowrap'
            >
                {countBadge && selectedOptionsCount > 0 && (
                    <InputBadge>{selectedOptionsCount}</InputBadge>
                )}
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
            </Grid>
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
                {...{ variant, options, selectedOptions, setSelectedOptions }}
            >
                <MultiSelectDropdown {...{ anchorEl, setAnchorEl }} />
            </MultiSelectProvider>
        </Grid>
    )
}

export default MultiSelect
