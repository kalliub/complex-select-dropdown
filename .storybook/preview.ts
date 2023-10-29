import type { Preview } from "@storybook/react"

import { ThemeProvider, CssBaseline } from "@mui/material"
import { withThemeFromJSXProvider } from "@storybook/addon-themes"

import theme from "../src/styles/theme"

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export const decorators = [
    withThemeFromJSXProvider({
        GlobalStyles: CssBaseline,
        Provider: ThemeProvider,
        themes: {
            // Provide your custom themes here
            light: theme,
        },
        defaultTheme: "light",
    }),
]

export default preview
