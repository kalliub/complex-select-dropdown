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
                    {variant === "withoutSections" &&
                        (options as string[])?.map(option => (
                            <DropdownItem key={option}>{option}</DropdownItem>
                        ))}

                    {variant === "withSections" &&
                        Object.entries(options || {}).map(
                            ([section, options]) => (
                                <DropdownSection
                                    key={section}
                                    options={options}
                                    title={section}
                                />
                            ),
                        )}
                </Grid>
            </Box>
        </Popover>
    )
}

export default MultiSelectDropdown
