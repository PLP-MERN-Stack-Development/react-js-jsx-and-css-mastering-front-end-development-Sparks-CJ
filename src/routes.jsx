import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ApiList from './pages/ApiList'

export default function RoutesFile() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<ApiList />} />
      </Routes>
    </Suspense>
  )
}
