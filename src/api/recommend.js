import axios from 'axios'

// 获取推荐歌单列表
export function getRecommendList () {
  const url = '/api/personalized'
  return axios.get(url)
}
// 获取推荐歌曲列表
export function getRecommendMusic () {
  const url = '/api/personalized/newsong'
  return axios.get(url)
}
