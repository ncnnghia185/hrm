"use client"
import React from 'react'
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
type Props = {}

const TiptapComponent = (props: Props) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World! 🌎️</p>',
    });
    return (
        <EditorContent editor={editor} />
    )
}

export default TiptapComponent