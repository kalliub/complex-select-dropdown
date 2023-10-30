import { Box } from "@mui/material"
import palette from "styles/palette"

const InputBadge = ({ children }: { children: string | number }) => {
    return (
        <Box
            sx={{
                backgroundColor: palette.grey[100],
                height: 25,
                width: 25,
                borderRadius: "50%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: palette.grey[700],
                fontSize: "0.75rem",
            }}
        >
            {children}
        </Box>
    )
}

export default InputBadge
