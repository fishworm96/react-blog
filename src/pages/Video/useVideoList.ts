export const useVideoList = () => {
  const VideoIconList = [
    { name: '腾讯', iconPath: 'http://image.fishworm.top/%E8%A7%86%E9%A2%91%E7%BD%91%E7%AB%99%E5%9B%BE%E6%A0%87/qqlogo.png', url: 'http://v.qq.com/'},
    { name: '爱奇艺', iconPath: 'http://image.fishworm.top/%E8%A7%86%E9%A2%91%E7%BD%91%E7%AB%99%E5%9B%BE%E6%A0%87/iqiyilogo.png', url: 'http://www.iqiyi.com/'},
    { name: '优酷', iconPath: 'http://image.fishworm.top/%E8%A7%86%E9%A2%91%E7%BD%91%E7%AB%99%E5%9B%BE%E6%A0%87/youkulogo.png', url: 'http://www.youku.com/'},
    { name: 'bilibili', iconPath: 'http://image.fishworm.top/%E8%A7%86%E9%A2%91%E7%BD%91%E7%AB%99%E5%9B%BE%E6%A0%87/bilibili.png', url: 'http://www.bilibili.com/'}
  ]

  const VideoBGImage = 'http://image.fishworm.top/%E8%A7%86%E9%A2%91%E7%BD%91%E7%AB%99%E5%9B%BE%E6%A0%87/p2888661452.webp'

  const ParserUrl = [
    {
      name: '通用',
      url: 'https://jx.jsonplayer.com/player/?url=',
    },
    {
      name: '备用',
      url: 'https://jx.xmflv.com/?url='
    },
    {
      name: 'b站',
      url: 'https://im1907.top/?jx='
    }
  ]

  return {
    VideoIconList,
    VideoBGImage,
    ParserUrl
  }
}