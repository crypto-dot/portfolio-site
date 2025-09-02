export interface ScriptSegment {
    text: string
    endDelay?: number
    backspace?: "character" | "word" | "all"
    backspaceFactor?: number
}