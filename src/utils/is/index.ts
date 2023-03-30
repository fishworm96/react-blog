// 判断值是否某个类型
export const is = (val: unknown, type: string) =>
  toString.call(val) === `[object ${type}]`

// 是否为函数
export const isFunction = <T = Function>(val: unknown): val is T =>
  is(val, 'Function')