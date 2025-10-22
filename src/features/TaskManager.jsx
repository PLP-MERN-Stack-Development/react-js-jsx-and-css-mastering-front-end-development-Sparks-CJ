import React, { useEffect, useState } from 'react'

const FILTERS = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed'
}

export default function TaskManager() {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('tasks')) || []
    } catch {
      return []
    }
  })
  const [text, setText] = useState('')
  const [filter, setFilter] = useState(FILTERS.ALL)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(e) {
    e.preventDefault()
    if (!text.trim()) return
    setTasks(prev => [{ id: Date.now(), text: text.trim(), done: false }, ...prev])
    setText('')
  }

  function toggle(id) {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  function remove(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const visible = tasks.filter(t => {
    if (filter === FILTERS.ALL) return true
    if (filter === FILTERS.ACTIVE) return !t.done
    return t.done
  })

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Task Manager</h2>

      <form onSubmit={addTask} className="flex gap-2">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="New task..."
          className="flex-1 border rounded p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
      </form>

      <div className="flex gap-2">
        {Object.values(FILTERS).map(f => (
          <button
            key={f}
            className={`px-3 py-1 rounded ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {visible.length === 0 && <li className="text-gray-500">No tasks</li>}
        {visible.map(task => (
          <li key={task.id} className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded border">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={task.done} onChange={() => toggle(task.id)} />
              <span className={task.done ? 'line-through text-gray-500' : ''}>{task.text}</span>
            </div>
            <div className="flex gap-2">
              <button className="text-sm text-red-600" onClick={() => remove(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
