import { Grid } from "@mui/material"
import { Meta, StoryFn } from "@storybook/react"

import { MultiSelect } from "components"

export default {
    title: "Components/MultiSelect",
    component: MultiSelect,
    parameters: {
        controls: {
            exclude: ["onClose", "ref", "variant"],
        },
    },
} as Meta

const Template: StoryFn<typeof MultiSelect> = args => (
    <Grid container maxWidth={400}>
        <MultiSelect {...args} />
    </Grid>
)

export const WithoutSections = Template.bind({})
WithoutSections.args = {
    label: "Select Without Sections",
    variant: "withoutSections",
    options: ["Option 1", "Option 2", "Option 3"],
}

export const WithSections = Template.bind({})
WithSections.args = {
    label: "Select With Sections",
    variant: "withSections",
    options: {
        "Section One": ["Option 1", "Option 2"],
        "Section Two": ["Option 3", "Option 4"],
    },
}
