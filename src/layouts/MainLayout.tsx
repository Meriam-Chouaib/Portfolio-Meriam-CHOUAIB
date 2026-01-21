import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Header from 'layouts/Header/Header'
import Footer from 'layouts/Footer/Footer'
import { Container } from '@mui/material'

export default function MainLayout() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  )
}
