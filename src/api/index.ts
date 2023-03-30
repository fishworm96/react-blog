import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { message } from 'antd'
import { AxiosCanceler } from './helper/axiosCancel'
import type { ResultData } from './interface'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/config/serviceLoading'
import NProgress from '@/config/nprogress'
import { ResultEnum } from '@/enums/httpEnum'

const axiosCanceler = new AxiosCanceler()

const config = {
  baseURL: '',
  timeout: 10000,
  withCredentials: true,
}

class RequestHttp {
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    // 请求拦截
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        NProgress.start()
        axiosCanceler.addPending(config)
        config.headers!.noLoading || showFullScreenLoading()
        return { ...config }
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )

    // 响应拦截器
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response
        NProgress.done()
        // 请求结束后，移除本次请求(关闭loading)
        axiosCanceler.removePending(config)
        tryHideFullScreenLoading()
        if (data.code === ResultEnum.OVERDUE) {
          message.error(data.msg)
          return Promise.reject(data)
        }
        // 全局错误信息拦截（防止下载文件得时候返回数据流，没有 code，直接报错）
        if (data.code && data.code !== ResultEnum.SUCCESS) {
          message.error(data.msg)
          return Promise.reject(data)
        }
        // 成功请求（在页面上除非特殊情况，否则不用处理错误逻辑）
        return data
      },
      async (error: AxiosError) => {
        // const { response } = error
        NProgress.done()
        tryHideFullScreenLoading()
        if (error.message === 'canceled')
          return
        // 请求超时单独判断，请求超时没有 response
        if (error.message.includes('timeout'))
          message.error('请求超时，请稍后再试')
        // 根据响应的错误状态码，做不同的处理
        // if (response)
        //   checkStatus(response.status)
        if (!window.navigator.onLine)
          window.location.hash = '/500'
        return Promise.reject(error)
      },
    )
  }

  // 封装请求常用方法
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object })
  }

  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object)
  }

  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object)
  }

  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object })
  }
}

export default new RequestHttp(config)