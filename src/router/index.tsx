import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loading from 'components/Loading'
import MySkeleton from 'components/MySkeleton'
import Layout from '@/pages/layout'
import Main from '@/pages/layout/component/Content/Main'

const Article = lazy(() => import('@/pages/Article'))
const ArticleTag = lazy(() => import('@/pages/ArticleTag'))
const Category = lazy(() => import('@/pages/Category'))

export const router = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'article',
        children: [
          {
            path: ':id',
            element: (
              <Suspense fallback={<Loading />}>
                <Article />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'category',
        element: (
          <Suspense fallback={<MySkeleton />}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: 'tag',
        element: (
          <Suspense fallback={<MySkeleton />}>
            <ArticleTag />
          </Suspense>
        ),
      },
    ],
  },
]

export default createBrowserRouter(router)