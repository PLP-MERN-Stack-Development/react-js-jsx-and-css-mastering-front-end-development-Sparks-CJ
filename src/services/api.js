const BASE = import.meta.env.VITE_API_BASE || 'https://jsonplaceholder.typicode.com'

export async function fetchPosts(page = 1, limit = 10) {
  const start = (page - 1) * limit
  const res = await fetch(`${BASE}/posts?_start=${start}&_limit=${limit}`)
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export async function searchPosts(q, page = 1, limit = 10) {
  // JSONPlaceholder doesn't support search; filter in client after fetching a chunk
  const all = await fetchPosts(page, limit)
  return all.filter(p => p.title.includes(q) || p.body.includes(q))
}
