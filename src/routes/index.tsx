import { createFileRoute } from '@tanstack/react-router'
import { type SubmitEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const Route = createFileRoute('/')({ component: App })

export function App() {
  const [persons, setPersons] = useState<Array<{ id: string; name: string }>>([])
  const [name, setName] = useState('')

  const submitPerson = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextName = name.trim()
    if (!nextName) {
      return
    }

    setPersons((current) => [...current, { id: crypto.randomUUID(), name: nextName }])
    setName('')
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col gap-6 px-6 py-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold">People</h1>
        <p className="text-sm text-muted-foreground">
          Tiny TanStack Start demo — a form and a list, wired with shadcn/ui components.
        </p>
      </section>

      <form onSubmit={submitPerson} className="space-y-2 rounded-lg border bg-card p-4">
        <Label htmlFor="person-name">Name</Label>
        <div className="flex gap-2">
          <Input id="person-name" value={name} onValueChange={setName} placeholder="Ada Lovelace" />
          <Button type="submit" disabled={!name.trim()}>
            Add
          </Button>
        </div>
      </form>

      <section className="rounded-lg border bg-card p-4">
        <h2 className="mb-3 text-sm font-medium text-muted-foreground">
          People ({persons.length})
        </h2>
        {persons.length === 0 ? (
          <p className="text-sm text-muted-foreground">No people yet.</p>
        ) : (
          <ul className="space-y-2">
            {persons.map((person) => (
              <li key={person.id} className="rounded-md border px-3 py-2 text-sm">
                {person.name}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
