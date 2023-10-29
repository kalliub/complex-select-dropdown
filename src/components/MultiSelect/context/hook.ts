import { createContext, useContext } from "react"
import { MultiSelectProps } from "../types"

export interface MultiSelectContext {
    variant: MultiSelectProps["variant"] | null
    options: MultiSelectProps["options"]
    // selectedOptions: MultiSelectProps["options"]
    // setSelectedOptions: React.Dispatch<
    //     React.SetStateAction<MultiSelectProps["options"]>
    // >
}

export const emptyContext = {
    variant: null,
    options: {},
    // selectedOptions: [],
    // setSelectedOptions: () => false,
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
