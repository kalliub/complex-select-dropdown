import { FormLabelProps, InputProps } from "@mui/material"

//------------- Data Model -------------

export type inputWithoutSections = {
    [optionName: string]: string
}

export type inputWithSections = {
    [sectionName: string]: {
        [optionName: string]: string
    }
}

export type outputWithoutSections = {
    label: string
    value: string
}[]

export type outputWithSections = {
    label: string
    options: {
        label: string
        value: string
    }[]
}[]

//------------- Props -------------

interface BaseProps extends Omit<InputProps, "label" | "onClose"> {
    label: FormLabelProps["children"]
    onClose?: () => outputWithSections | outputWithoutSections
}

interface WithSectionsProps extends BaseProps {
    variant: "withSections"
    options: inputWithSections
    onClose?: () => outputWithSections
}
interface WithoutSectionsProps extends BaseProps {
    variant: "withoutSections"
    options: inputWithoutSections
    onClose?: () => outputWithoutSections
}

export type MultiSelectProps = WithSectionsProps | WithoutSectionsProps
