import { ChangeEvent, MouseEvent, useState } from "react"
import { Link } from "react-router-dom"
import { useVideoList } from "./useVideoList"

const Video = () => {
  const { VideoIconList, VideoBGImage, ParserUrl } = useVideoList()

  const [parserUrl, setParserUrl] = useState('https://jx.jsonplayer.com/player/?url=')
  const [videoUrl, setVideoUrl] = useState('')
  const [playVideoUrl, setPlayVideoUrl] = useState('https://jx.jsonplayer.com/player/?url=https://v.qq.com/x/cover/mzc00200whsp9r6/t0047mh70jw.html?j_vid=r0047p17sxv&j_cut_vid=z0047174yko&j_is_win_vid=1&j_start=0')

  // 修改解析地址
  const handleSelectClick = (event: ChangeEvent<HTMLSelectElement>) => {
    setParserUrl(event.target.value)
  }

  // 解析视频按钮
  const handleButtonClick = () => {
    setPlayVideoUrl(parserUrl + videoUrl)
  }

  // 点击选中所有 input 内容
  const handleInputClick = (event: MouseEvent<HTMLInputElement>) => {
    event && (event.target as HTMLInputElement).select()
  }

  // 改变 input 内容
  const handleInputChange = (info: ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(info.target.value)
  }

  return (
    <div className="flex flex-col h-full items-center">
      <div className="flex flex-col items-center lg:w-[53.375rem] lg:h-full my-10">
        <div className="flex flex-row lg:w-[30rem] lg:mx-0 mx-4 rounded-lg">
          <input className="w-full h-9 pl-5 rounded-l-2xl" placeholder="粘贴想要播放的视频地址到此处" value={videoUrl} onClick={handleInputClick} onChange={handleInputChange} />
          <select onChange={handleSelectClick} className="border-l">
            {
              ParserUrl.map((item) => (
                <option key={item.url} value={item.url}>{item.name}</option>
              ))
            }
          </select>
          <button className="w-36 rounded-r-2xl bg-gradient-to-r from-sky-400 to-blue-500" onClick={handleButtonClick}>解析</button>
        </div>
        <div className="bg-slate-200 mt-2">本项目的所有接口均来自互联网，仅供学习交流使用。如有问题请联系 fishworm96@foxmail.com</div>
        <iframe className="h-[15rem] md:h-[30rem] w-full bg-slate-600 mt-5" allow="fullscreen; encrypted-media" src={`${playVideoUrl}`}></iframe>
      </div>
      <div className="flex my-10">
        <ul className="flex items-center justify-center flex-wrap">
          {
            VideoIconList.map((item) => (
              <li key={item.iconPath} className="w-36 h-14 lg:w-48 lg:h-[4.5rem] my-2 lg:my-0 mx-2 px-4 py-2 rounded-md border-2 hover:border-blue-500 hover:shadow-blue">
                <Link to={item.url} target='_blank'>
                  <img src={item.iconPath} />
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Video