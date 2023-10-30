import { FormLabelProps, InputProps } from "@mui/material"

//------------- Data Model -------------

export type SelectOption = {
    [optionName: string]: string
}

export type SelectSection = {
    [sectionName: string]: SelectOption
}

//------------- Props -------------

interface BaseProps extends Omit<InputProps, "label" | "onClose"> {
    label: FormLabelProps["children"]
}

interface WithSectionsProps extends BaseProps {
    variant: "withSections"
    options: SelectSection
    onClose?: () => SelectSection
}
interface WithoutSectionsProps extends BaseProps {
    variant: "withoutSections"
    options: SelectOption
    onClose?: () => SelectOption
}

export type MultiSelectProps = WithSectionsProps | WithoutSectionsProps
