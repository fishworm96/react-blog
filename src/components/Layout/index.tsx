import { Space } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'

// const headerStyle: React.CSSProperties = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   paddingInline: 50,
//   lineHeight: '64px',
//   backgroundColor: '#7dbcea',
// }

// const contentStyle: React.CSSProperties = {
//   textAlign: 'center',
//   minHeight: 800,
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#108ee9',
// }

// const footerStyle: React.CSSProperties = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#7dbcea',
// }

const Layout = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Space>
  )
}
export default Layout