import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Navigate } from 'react-router'
import Loading from 'components/Loading'
// import MySkeleton from 'components/MySkeleton'
import Error404 from 'components/404'
import Layout from '@/pages/layout'
import TagDetail from '@/pages/TagDetail'
import { PREFIX } from '@/utils/constants'

const Main = lazy(() => import('@/pages/layout/component/Content/Main'))
const Article = lazy(() => import('@/pages/Article'))
const ArticleTag = lazy(() => import('@/pages/ArticleTag'))
const Category = lazy(() => import('@/pages/Category'))
const ArticleDetail = lazy(() => import('@/pages/ArticleDetail'))

export const router = [
  {
    path: '',
    element: <Navigate to='blog' />,
  },
  {
    path: `${PREFIX}`,
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
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
        children: [
          {
            path: '',
            element: (
              <Suspense fallback={<Loading />}>
                <Category />
              </Suspense>
            ),
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<Loading />}>
                <ArticleDetail />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'tag',
        children: [
          {
            path: '',
            element: (
              <Suspense fallback={<Loading />}>
                <ArticleTag />
              </Suspense>
            ),
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<Loading />}>
                <TagDetail />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]

export default createBrowserRouter(router)