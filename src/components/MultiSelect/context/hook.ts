import { createContext, useContext } from "react"
import { MultiSelectProps } from "../types"

interface ContextBase {
    variant: MultiSelectProps["variant"] | null
    options: MultiSelectProps["options"] | null
    selectedOptions: MultiSelectProps["options"] | null
    setSelectedOptions: (options: MultiSelectProps["options"]) => void
}

interface WithSectionsVariantContext extends ContextBase {
    variant: "withSections" | null
    options: Record<string, string[]> | null
}

interface WithoutSectionVariantContext extends ContextBase {
    variant: "withoutSections" | null
    options: string[] | null
}

export type MultiSelectContext =
    | WithSectionsVariantContext
    | WithoutSectionVariantContext

export const emptyContext = {
    variant: null,
    options: null,
    selectedOptions: null,
    setSelectedOptions: () => false,
}

export const multiSelectContext =
    createContext<MultiSelectContext>(emptyContext)

export const useMultiSelectContext = () => {
    const context = useContext(multiSelectContext)

    if (!context) {
        throw new Error(
            "useMultiSelectContext must be used within a MultiSelectProvider",
        )
    }

    return context
}
