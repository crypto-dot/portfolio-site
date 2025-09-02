export const listStyle = {
    display: "flex",
    gap: 20,
    listStyle: "none",
    padding: 0,
    margin: 0,
    flexDirection: "column",
} as const

export const item = {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    height: 32,
} as const

export const text = {
    color: "#f5f5f5",
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    gap: 10,
    lineHeight: "32px",
} as const

export const numberLabel = {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    opacity: 0.5,
    fontVariantNumeric: "tabular-nums",
} as const