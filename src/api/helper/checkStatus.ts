import { message } from 'antd'

// 校验网络请求状态码
export const checkStatus = (status: number): void => {
  switch (status) {
    case 500:
      message.error('服务异常')
      break
    default:
      message.error('请求失败！')
  }
}