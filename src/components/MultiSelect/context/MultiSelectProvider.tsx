import { ReactElement, useMemo, useState } from "react"
import { MultiSelectContext, emptyContext, multiSelectContext } from "./hook"
import { MultiSelectProps } from "../types"

const MultiSelectProvider = ({
    children,
    variant,
    options,
}: { children: ReactElement } & Pick<
    MultiSelectContext,
    "variant" | "options"
>) => {
    const [selectedOptions, setSelectedOptions] = useState<
        MultiSelectProps["options"] | null
    >(null)

    const providerValue = useMemo(() => {
        return {
            ...emptyContext,
            variant,
            options,
            selectedOptions,
            setSelectedOptions,
        }
    }, [options, selectedOptions, variant])

    return (
        <multiSelectContext.Provider value={providerValue}>
            {children}
        </multiSelectContext.Provider>
    )
}
export default MultiSelectProvider
