import React from 'react'
import Card from '../components/Card'
import TaskManager from '../features/TaskManager'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card title="Welcome">
        <p className="mb-4">This demo app shows: components, state, hooks, localStorage, API fetch, and Tailwind styling.</p>
        <Link to="/api"><Button>View API Data</Button></Link>
      </Card>

      <Card title="Tasks">
        <TaskManager />
      </Card>
    </div>
  )
}
