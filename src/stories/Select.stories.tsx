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
    args: {
        countBadge: true,
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
    options: {
        "Option One": "option-one",
        "Option Two": "option-two",
        "Option Three": "option-three",
        "Option Four": "option-four",
    },
}

export const WithSections = Template.bind({})
WithSections.args = {
    label: "Select With Sections",
    variant: "withSections",
    options: {
        "Section One": {
            "Option One": "option-one",
            "Option Two": "option-two",
        },
        "Section Two": {
            "Option Three": "option-three",
            "Option Four": "option-four",
        },
    },
}
