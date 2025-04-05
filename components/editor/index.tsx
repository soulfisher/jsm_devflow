'use client'

import { BoldItalicUnderlineToggles, ChangeCodeMirrorLanguage, codeBlockPlugin, codeMirrorPlugin, ConditionalContents, CreateLink, diffSourcePlugin, imagePlugin, InsertCodeBlock, InsertImage, InsertTable, InsertThematicBreak, linkDialogPlugin, linkPlugin, ListsToggle, MDXEditor, Separator, tablePlugin, toolbarPlugin, UndoRedo } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { basicDark } from "cm6-theme-basic-dark"
import './dark-editor.css'



// InitializedMDXEditor.tsx
import type { ForwardedRef } from 'react'
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  type MDXEditorMethods,
  type MDXEditorProps
} from '@mdxeditor/editor'
import { useTheme } from 'next-themes'
import { jsx } from 'react/jsx-runtime'

interface Props {
    value: string; 
    fieldChange: (value: string) => void; 
    editorRef: ForwardedRef<MDXEditorMethods> | null;
}


const Editor = ({ value, editorRef, fieldChange, ...props }: Props) => {

    const { resolvedTheme } = useTheme();

    const theme = resolvedTheme === "dark" ? [basicDark] : [];

  return (
    <MDXEditor
        key={resolvedTheme}
        markdown={value}
        ref={editorRef}
        className='background-light800_dark200 light-border-2 markdown-editor dark-editor grid w-full border'
        onChange={fieldChange}
        plugins={[
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        tablePlugin(),
        imagePlugin(),
        codeBlockPlugin(),
        codeMirrorPlugin({
            codeBlockLanguages: {
                css: 'css',
                txt: 'txt',
                sql: 'sql',
                html: 'html',
                sass: 'sass',
                scss: 'scss',
                bash: 'bash',
                json: 'json',
                js: 'javascript',
                ts: 'typescript',
                "": 'unspecified',
                tsx: 'TypeScript React',
                jsx: 'JavaScript React',
            },
            autoLoadLanguageSupport: true,
            codeMirrorExtensions: theme,
        }),
        diffSourcePlugin({viewMode: 'rich-text', diffMarkdown: ''}),
        toolbarPlugin({
            toolbarContents: () => {
                return (
                <ConditionalContents options={[
                    {
                        when: (editor) => editor?.editorType === 'codeblock', 
                        contents: () => <ChangeCodeMirrorLanguage />
                    },
                    {
                        fallback: () => {
                            return <>
                                <UndoRedo />
                                <Separator />

                                <BoldItalicUnderlineToggles />
                                <Separator />

                                <ListsToggle />
                                <Separator />

                                <CreateLink />
                                <InsertImage />
                                <Separator />

                                <InsertTable />
                                <InsertThematicBreak />

                                <InsertCodeBlock />
                            </>
                        }
                    }
                ]} /> 
             )},
        })
      ]}
      {...props}
      
    />
  )
}

export default Editor