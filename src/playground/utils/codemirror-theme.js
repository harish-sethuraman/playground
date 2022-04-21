import { EditorView } from "@codemirror/view";
import { HighlightStyle, tags as t } from "@codemirror/highlight";

export const ESLintPlaygroundTheme = EditorView.theme({
    ".cm-tooltip": {
        backgroundColor: "transparent",
        border: "none"
    },
    ".cm-scroller": {
        backgroundColor: "var(--body-background-color)",
        minWidth: "100%",
        border: "1px solid var(--body-text-color)",
        fontFamily: "var(--mono-font), Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        fontSize: "1em",
        color: "var(--body-text-color)"
    },
    ".cm-gutter": {
        paddingRight: "1px",
        backgroundColor: "var(--body-background-color)"
    },
    ".cm-activeLine, .cm-activeLineGutter": {
        backgroundColor: "var(--body-background-color)"
    },
    ".cm-content": {
        caretColor: "var(--link-color)"
    },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
        backgroundColor: "var(--color-primary-800)",
        color: "#fff",
        outline: "1px solid #515a6b"
    },
    ".cm-cursor, .cm-dropCursor": {
        borderLeftColor: "var(--link-color)"
    },
    ".cm-gutters": {
        borderRight: "1px solid var(--body-text-color)"
    },
    ".cm-gutterElement": {
        color: "var(--body-text-color)"
    }
}, { dark: true });

// The highlighting style for code in the ESLint playground theme.
export const ESLintPlaygroundHighlightStyle = HighlightStyle.define([
    {
        tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
        color: "var(--link-color)"
    },
    {
        tag: t.strong,
        fontWeight: "bold"
    },
    {
        tag: t.emphasis,
        fontStyle: "italic"
    },
    {
        tag: t.strikethrough,
        textDecoration: "line-through"
    },
    {
        tag: t.heading,
        fontWeight: "bold",
        color: "var(--headings-color)"
    }
]);

export const ESLintPlayground = [ESLintPlaygroundTheme, ESLintPlaygroundHighlightStyle];