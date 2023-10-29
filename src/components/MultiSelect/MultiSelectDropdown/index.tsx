import { Box, Grid, Popover } from "@mui/material"
import { useMultiSelectContext } from "../context"
import DropdownItem from "./DropdownItem"
import DropdownSection from "./DropdownSection"

const MultiSelectDropdown = ({ anchorEl, setAnchorEl }) => {
    const { variant, options } = useMultiSelectContext()

    return (
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
            <Box py={1} minWidth={400} maxHeight={300}>
                <Grid container flexDirection='column'>
                    {Object.entries(options).map(([key, value]) => {
                        console.log(key, value)
                        if (variant === "withSections") {
                            const [section, options]: [
                                string,
                                Record<string, string>,
                            ] = [key, value]
                            return (
                                <DropdownSection
                                    key={section}
                                    options={options}
                                    title={section}
                                />
                            )
                        } else {
                            const [optionLabel, optionValue]: [string, string] =
                                [key, value]
                            return (
                                <DropdownItem
                                    key={`${optionLabel}-${optionValue}`}
                                >
                                    {optionLabel}
                                </DropdownItem>
                            )
                        }
                    })}
                </Grid>
            </Box>
        </Popover>
    )
}

export default MultiSelectDropdown
