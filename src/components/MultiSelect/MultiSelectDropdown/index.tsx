import { Box, Grid, Popover } from "@mui/material"
import { useMultiSelectContext } from "../context"
import DropdownItem from "./DropdownItem"
import DropdownSection from "./DropdownSection"
import { SelectOption, SelectSection } from "../types"
import EmptyDropdown from "../EmptyDropdown"

const MultiSelectDropdown = ({ anchorEl, setAnchorEl }) => {
    const { variant, options, selectedOptions, setSelectedOptions } =
        useMultiSelectContext()

    const handleOptionClick = ({
        optionLabel,
        optionValue,
        sectionTitle = "",
    }: {
        optionLabel: string
        optionValue: string
        sectionTitle?: string
    }) => {
        const isOptionSelected = Boolean(
            variant === "withSections"
                ? selectedOptions[sectionTitle]?.[optionLabel]
                : selectedOptions[optionLabel],
        )

        if (variant === "withSections") {
            const typedSelectedOptions = selectedOptions as SelectSection
            if (isOptionSelected) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { [optionLabel]: omittedValue, ...restOfSectionOptions } =
                    typedSelectedOptions[sectionTitle]

                setSelectedOptions({
                    ...typedSelectedOptions,
                    [sectionTitle]: restOfSectionOptions,
                })
            } else {
                const newSelectedOptions = {
                    ...typedSelectedOptions,
                    [sectionTitle]: {
                        ...typedSelectedOptions[sectionTitle],
                        [optionLabel]: optionValue,
                    },
                }

                setSelectedOptions(newSelectedOptions)
            }
        } else {
            const typedSelectedOptions = selectedOptions as SelectOption
            if (isOptionSelected) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { [optionLabel]: omittedValue, ...restOfOptions } =
                    typedSelectedOptions
                setSelectedOptions(restOfOptions)
            } else {
                setSelectedOptions({
                    ...typedSelectedOptions,
                    [optionLabel]: optionValue,
                })
            }
        }
    }

    return (
        <Popover
            open={Boolean(anchorEl)}
            disableAutoFocus
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
            sx={{
                mt: 1,
            }}
            slotProps={{
                paper: {
                    sx: {
                        width: "min(100%, 400px)",
                        maxHeight: "500px",
                    },
                },
            }}
        >
            <Grid container py={1} flexDirection='column'>
                {Object.entries(options).length === 0 && <EmptyDropdown />}
                {Object.entries(options).map(([key, value]) => {
                    if (variant === "withSections") {
                        const [section, options]: [string, SelectOption] = [
                            key,
                            value,
                        ]
                        return (
                            <DropdownSection
                                key={section}
                                options={options}
                                title={section}
                                onOptionClick={({ optionLabel, optionValue }) =>
                                    handleOptionClick({
                                        optionLabel,
                                        optionValue,
                                        sectionTitle: section,
                                    })
                                }
                            />
                        )
                    } else {
                        const [optionLabel, optionValue]: [string, string] = [
                            key,
                            value,
                        ]

                        return (
                            <DropdownItem
                                key={`${optionLabel}-${optionValue}`}
                                onClick={() =>
                                    handleOptionClick({
                                        optionLabel,
                                        optionValue,
                                    })
                                }
                                checked={Boolean(
                                    (selectedOptions as SelectOption)[
                                        optionLabel
                                    ],
                                )}
                            >
                                {optionLabel}
                            </DropdownItem>
                        )
                    }
                })}
            </Grid>
        </Popover>
    )
}

export default MultiSelectDropdown
