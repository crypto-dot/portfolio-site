import type { ScriptSegment } from "@/components/AnimatedTypewriter/AnimatedTypewriter.types"

export const script: ScriptSegment[] = [
    { text: "whoami", endDelay: 2 },
    {        
        backspace: "word",
        backspaceFactor: 1,
        endDelay: 2,
        text: "sudo whoami",
    },
    {
        text: "su admin",
        endDelay: 2,
    },
    {
        text: "ls -l file.txt",

        endDelay: 2,
    },
    {
        text: "chown root file.txt",
        backspace: "character",
    },
    { text: "chmod 755 fil.txt", endDelay: 2 },
    { text: "chmod 755 fil.txt", backspace: "character", backspaceFactor: 4,  endDelay: 2 },
    { text: "chmod 755 file.txt", endDelay: 2 },
    {
        text: "mv file.txt /root",
        endDelay: 2,
    },
    {
        text: "cat /root/file.txt | grep 'secret'",
        endDelay: 2,
    }
]