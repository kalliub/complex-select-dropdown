import { Meta, StoryFn } from "@storybook/react"

import { MultiSelect } from "components"

export default {
    title: "Components/MultiSelect",
    component: MultiSelect,
} as Meta

const Template: StoryFn<typeof MultiSelect> = args => <MultiSelect {...args} />

export const Default = Template.bind({})
Default.args = {
    label: "Complex Select",
    placeholder: "Type something to filter",
    sx: {
        maxWidth: "400px"
    }
}
