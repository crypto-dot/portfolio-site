
import { listStyle } from "./Styles/styles"
import { AnchorItem } from "./AnchorItem/AnchorItem"
import { ListItem } from "./ListItem/ListItem"
import {TextRevealProps } from "./AnimatedTextReveal.types"

export const TextRevealListItems = ({items, flexDirection = "column", isAnchor = false}: TextRevealProps) => {
    return (
        <ul style={{...listStyle, flexDirection: flexDirection}}>
            {items.map((item) => (
                isAnchor ? (
                    <AnchorItem key={item.label} label={item.label} number={item.number} href={item.href || ""} />
                ) : (
                    <ListItem key={item.label} label={item.label} number={item.number} />
                )
            ))}
        </ul>
    )
}