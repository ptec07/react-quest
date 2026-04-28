import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

vi.mock('@codesandbox/sandpack-react', () => ({
  Sandpack: ({
    files,
    options,
  }: {
    files?: Record<string, string | { code: string }>
    options?: { activeFile?: string }
  }) => {
    const activeFile = options?.activeFile ?? '/App.js'
    const activeFileEntry = files?.[activeFile]
    const activeCode = typeof activeFileEntry === 'string' ? activeFileEntry : activeFileEntry?.code

    return (
      <div data-testid="sandpack-preview" data-active-file={activeFile}>
        <p>Sandpack Practice Preview</p>
        <pre>{activeCode ?? 'export default function App() { return <h1>Hello world</h1> }'}</pre>
      </div>
    )
  },
}))
