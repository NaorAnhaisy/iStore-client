import React from 'react';
import './BuilderUI.css';
import Editor from 'blocks-ui'

const JSX = `
    import React from 'react'
    export default () => (
        <Blocks.Root>
        </Blocks.Root>
    )
`

export default function BuilderUI() {
    return (
        <>
            <Editor src={JSX} />
        </>
    )
}