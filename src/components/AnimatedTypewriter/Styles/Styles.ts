export const monospace: React.CSSProperties = {
    fontFamily: `"Ubuntu Mono", monospace`,
    fontSize: 16,
    lineHeight: "20px",
    color: "lab(65.9269% -.832707 -8.17474)",
    textAlign: "left",
}

export const container = {
    "--border": "rgba(0, 0, 0, 0.1)",
    "--line-height": "21px",
    display: "flex",
    gap: 8,
    maxWidth: 400,
    width: "100%",
    position: "relative",
} as unknown as React.CSSProperties

export const cursor: React.CSSProperties = {
    background: "lab(65.9269% -.832707 -8.17474)",
    width: 2,
}