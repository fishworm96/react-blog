import { createBrowserRouter } from 'react-router-dom'
import Category from '@/pages/Category'
import Article from '@/pages/Article'
import Layout from '@/pages/layout'
import Main from '@/pages/layout/component/Content/Main'
import ArticleTag from '@/pages/ArticleTag'

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
            element: <Article />,
          },
        ],
      },
      {
        path: 'category',
        element: <Category />,
      },
      {
        path: 'tag',
        element: <ArticleTag />,
      },
    ],
  },
]

export default createBrowserRouter(router)