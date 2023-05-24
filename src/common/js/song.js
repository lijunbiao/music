// 提取返回数据中的歌曲关键属性
export default class Song {
  constructor ({ id, mid, singer, name, album, duration, image, url, aliaName }) {
    this.id = id // 歌曲id
    this.singer = singer // 歌手名称
    this.name = name // 歌曲名称
    this.album = album // 专辑
    this.aliaName = aliaName
    this.image = image // 歌曲url
  }
}

// 提取歌曲的作者名称，作者之间用“/”隔开
function singerName (arr) {
  let name = []
  name = arr.map((item) => {
    return item.name
  })
  return name.join('/')
}

// 返回推荐歌曲中的关键属性
export function createRecommendSong (music) {
  return new Song({
    id: music.id,
    singer: singerName(music.song.artists),
    name: music.name,
    album: music.song.album.name,
    image: music.song.album.picUrl
  })
}
