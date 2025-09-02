export interface TextRevealItem {
    label: string;
    number: number;
    href?: string;
}

export interface TextRevealProps {
    items: TextRevealItem[];
    isAnchor?: boolean;
    flexDirection?: "column" | "row";
}
export interface ListItemProps {
    label: string;
    number: number;
}
export interface AnchorItemProps {
    label: string;
    number: number;
    href: string;
}