import { ReactElement, useMemo } from "react"
import { MultiSelectContext, emptyContext, multiSelectContext } from "./hook"

const MultiSelectProvider = ({
    children,
    variant,
    options,
    selectedOptions,
    setSelectedOptions,
}: { children: ReactElement } & MultiSelectContext) => {
    const providerValue = useMemo(() => {
        return {
            ...emptyContext,
            variant,
            options: options,
            selectedOptions,
            setSelectedOptions,
        }
    }, [options, variant, selectedOptions, setSelectedOptions])

    return (
        <multiSelectContext.Provider value={providerValue}>
            {children}
        </multiSelectContext.Provider>
    )
}
export default MultiSelectProvider
