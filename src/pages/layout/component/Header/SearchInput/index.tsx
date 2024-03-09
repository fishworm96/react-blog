import type { MouseEvent, MouseEventHandler, ReactNode } from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import type { InputRef } from 'antd'
import { Input, List } from 'antd'
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined'
import FileOutlined from '@ant-design/icons/lib/icons/FileOutlined'
import { Link } from 'react-router-dom'
import { Mark } from 'components/Mark'
import { reqSearchArticle } from '@/api/modules/article'
import { PREFIX } from '@/utils/constants'
import type { Article } from '@/api/interface'
import { useDebounce } from '@/hook'

const SearchInput = () => {
  const searchRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<InputRef | null>(null)
  const [showMask, setShowMask] = useState<boolean>(false)
  const [postList, setPostList] = useState<Article.SearchArticle[]>([])
  const [noPost, setNoPost] = useState<ReactNode>(<></>)
  const [inputValue, setInputValue] = useState<string>('')

  const debounceInput = useDebounce(inputValue, 200)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    setInputValue(e.target.value.trim())
  }

  const handleSearchArticle = async (value: string) => {
    const { data } = await reqSearchArticle(value)
    setPostList(data ?? [])
    setNoPost((data?.length === 0 || inputValue.length) === 0 ? <div>没有找到文章</div> : <></>)
  }

  const clearSearchHistory = () => {
    setShowMask(false)
    setPostList([])
    setInputValue('')
  }

  const handleInputClick = () => {
    setPostList([])
    setInputValue('')
    setShowMask(true)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseMask = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (searchRef.current && searchRef.current.contains(e.target as Node)) {
      return
    }
    setShowMask(false)
    setInputValue('')
    document.body.style.overflow = 'auto'
  }, [])

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [showMask])

  useMemo(() => {
    handleSearchArticle(inputValue)
  }, [debounceInput])

  return (
    <>
      <button className='flex mx-2 text-xl' onClick={handleInputClick}>
        <SearchOutlined />
      </button>
      {showMask && (
        <div onClick={handleCloseMask as MouseEventHandler<HTMLDivElement>} className='flex justify-center w-screen h-screen fixed top-0 left-0 z-50'>
          <div className='w-full h-full left-0 bg-black/[.45]'></div>
          <div ref={searchRef} className='flex absolute items-center flex-col w-full min-h-full lg:w-1/4 lg:rounded-lg lg:pt-5 bg-white max-h-[48rem] lg:top-[60px] lg:min-h-[225px]'>
            <div className='flex items-center w-10/12 '>
              <Input
                ref={inputRef}
                onChange={handleChange}
                allowClear={true}
                className='w-10/12 lg:w-full h-10 mx-auto'
                placeholder="请输入搜索内容"
                prefix={<SearchOutlined className="text-2xl" />}
              />
              <p
                className='flex text-xl ml-3 lg:hidden'
                onClick={clearSearchHistory}
              >
                取消
              </p>
            </div>
            <div className='w-full h-auto pt-2 px-10 overflow-auto min-h-60'>
              <List
                dataSource={postList}
                renderItem={item => (
                  <Link to={`${PREFIX}/article/${item.id}`}>
                    <List.Item key={item.id} onClick={clearSearchHistory} className='mx-auto hover:bg-neutral-100'>
                      <List.Item.Meta
                        avatar={<FileOutlined className='text-2xl hover:text-slate-200' />}
                        title={
                          <Mark name={item.title} keyword={inputValue} />
                        }
                        description={<Mark name={item.description} keyword={inputValue} />}
                      />
                    </List.Item>
                  </Link>
                )}
                locale={{ emptyText: noPost }}
              />
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}

export default SearchInput