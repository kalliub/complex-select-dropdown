import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from "@mui/material"
import Icon from "components/Icon"
import { useState } from "react"
import DropdownItem from "./DropdownItem"
import palette from "styles/palette"

interface DropdownSectionProps {
    title: string
    options: string[]
}

const DropdownSection = ({ title, options }: DropdownSectionProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => setIsOpen(currValue => !currValue)

    return (
        <Accordion
            expanded={isOpen}
            disableGutters
            elevation={0}
            TransitionProps={{ unmountOnExit: true }}
        >
            <AccordionSummary
                expandIcon={<Icon name='angle-up' />}
                onClick={toggleAccordion}
                sx={{
                    backgroundColor: isOpen ? palette.grey[100] : "none",
                }}
            >
                <Grid
                    container
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography variant='body1'>{title}</Typography>
                </Grid>
            </AccordionSummary>

            <AccordionDetails sx={{ padding: 0 }}>
                {options.map(option => (
                    <DropdownItem key={option} sx={{ pl: 4 }}>
                        {option}
                    </DropdownItem>
                ))}
            </AccordionDetails>
        </Accordion>
    )
}

export default DropdownSection
