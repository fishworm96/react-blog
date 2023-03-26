import { createBrowserRouter } from 'react-router-dom'
import Article from '@/pages/article'
import Category from '@/pages/category'
import Layout from '@/pages/layout'
import Main from '@/pages/layout/component/Content/Main'

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
        element: <Article />,
      },
      {
        path: 'category',
        element: <Category />,
      },
    ],
  },
]

export default createBrowserRouter(router)