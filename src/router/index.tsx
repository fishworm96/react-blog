import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loading from 'components/Loading'
// import MySkeleton from 'components/MySkeleton'
import Error404 from 'components/404'
import Layout from '@/pages/layout'

const Main = lazy(() => import('@/pages/layout/component/Content/Main'))
const Article = lazy(() => import('@/pages/Article'))
const ArticleTag = lazy(() => import('@/pages/ArticleTag'))
const Category = lazy(() => import('@/pages/Category'))

export const router = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Loading />}>
            <Main />,
          </Suspense>
        ),
      },
      {
        path: 'article/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: 'category',
        element: (
          <Suspense fallback={<Loading />}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: 'tag',
        element: (
          <Suspense fallback={<Loading />}>
            <ArticleTag />
          </Suspense>
        ),
      },
    ],
  },
]

export default createBrowserRouter(router)