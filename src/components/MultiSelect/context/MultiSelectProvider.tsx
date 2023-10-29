import { ReactElement, useMemo } from "react"
import { MultiSelectContext, emptyContext, multiSelectContext } from "./hook"

const MultiSelectProvider = ({
    children,
    variant,
    options,
}: { children: ReactElement } & MultiSelectContext) => {
    const providerValue = useMemo(() => {
        return {
            ...emptyContext,
            variant,
            options: options,
        }
    }, [options, variant])

    return (
        <multiSelectContext.Provider value={providerValue}>
            {children}
        </multiSelectContext.Provider>
    )
}
export default MultiSelectProvider
