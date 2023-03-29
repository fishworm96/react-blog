import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
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
              <Suspense fallback={<div>...loading</div>}>
                <Article />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'category',
        element: (
          <Suspense fallback={<div>...loading</div>}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: 'tag',
        element: (
          <Suspense fallback={<div>...loading</div>}>
            <ArticleTag />
          </Suspense>
        ),
      },
    ],
  },
]

export default createBrowserRouter(router)