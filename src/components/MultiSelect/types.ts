import { FormLabelProps, InputProps } from "@mui/material"

interface BaseProps extends Omit<InputProps, "label" | "onClose"> {
    label: FormLabelProps["children"]
    variant: "withSections" | "withoutSections"
    onClose?: () => string[] | Record<string, string[]>
}

interface WithSectionsProps extends BaseProps {
    variant: "withSections"
    options: Record<string, string[]>
    onClose?: () => Record<string, string[]>
}
interface WithoutSectionProps extends BaseProps {
    variant: "withoutSections"
    options: string[]
    onClose?: () => string[]
}

export type MultiSelectProps = WithSectionsProps | WithoutSectionProps
