import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../services/api'
import Card from '../components/Card'

export default function ApiList() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const limit = 10

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchPosts(page, limit)
      .then(data => {
        if (mounted) setPosts(data)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
    return () => (mounted = false)
  }, [page])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Posts (API)</h2>

      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}

      <div className="grid gap-4">
        {posts.map(p => (
          <Card key={p.id} title={p.title}>
            <p className="text-sm text-gray-700 dark:text-gray-300">{p.body}</p>
          </Card>
        ))}
      </div>

      <div className="flex gap-2 items-center mt-4">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(p => p + 1)} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">Next</button>
      </div>
    </div>
  )
}
