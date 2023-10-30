import { ButtonBase, FormLabel, Grid, Input } from "@mui/material"
import Icon from "components/Icon"
import { useCallback, useMemo, useRef, useState } from "react"
import { MultiSelectProps } from "./types"
import { MultiSelectProvider } from "./context"
import MultiSelectDropdown from "./MultiSelectDropdown"
import InputBadge from "components/InputBadge"
import palette from "styles/palette"

const MultiSelect = ({
    variant,
    options,
    label,
    countBadge,
    ...inputProps
}: MultiSelectProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [anchorEl, setAnchorEl] = useState<HTMLInputElement | null>(null)
    const [selectedOptions, setSelectedOptions] = useState<
        MultiSelectProps["options"]
    >({})
    const [availableOptions, setAvailableOptions] =
        useState<MultiSelectProps["options"]>(options)
    const openDropdown = () => {
        if (inputRef.current) {
            setAnchorEl(inputRef.current)
            inputRef.current.focus()
        }
    }

    const applyFilter = useCallback(
        (searchKey: string) => {
            openDropdown()
            const filteredOptions = Object.keys(options).reduce((acc, curr) => {
                if (curr.toLowerCase().includes(searchKey.toLowerCase())) {
                    acc[curr] = options[curr]
                } else if (typeof options[curr] === "object") {
                    const filteredSubOptions = Object.keys(
                        options[curr],
                    ).reduce((acc, curr) => {
                        if (
                            curr.toLowerCase().includes(searchKey.toLowerCase())
                        ) {
                            acc[curr] = options[curr]
                        }
                        return acc
                    }, {})
                    if (Object.keys(filteredSubOptions).length > 0) {
                        acc[curr] = filteredSubOptions
                    }
                }
                return acc
            }, {})
            setAvailableOptions(filteredOptions)
        },
        [options],
    )

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
                {inputRef.current && inputRef.current.value.length > 0 && (
                    <ButtonBase
                        sx={{
                            borderRadius: "4px",
                            padding: "8px",
                        }}
                        onClick={() => {
                            if (inputRef.current) {
                                inputRef.current.value = ""
                                setAvailableOptions(options)
                            }
                        }}
                    >
                        <Icon
                            name='times'
                            style={{ color: palette.grey[500] }}
                        />
                    </ButtonBase>
                )}
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
                inputRef={inputRef}
                disableUnderline
                placeholder='Type to filter'
                onChange={({ target: { value } }) => {
                    if (value.length === 0) setAvailableOptions(options)
                    else applyFilter(value)
                }}
                endAdornment={renderEndAdornment()}
                {...inputProps}
            />

            <MultiSelectProvider
                options={availableOptions}
                {...{ variant, selectedOptions, setSelectedOptions }}
            >
                <MultiSelectDropdown {...{ anchorEl, setAnchorEl }} />
            </MultiSelectProvider>
        </Grid>
    )
}

export default MultiSelect
