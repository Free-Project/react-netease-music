import axios from 'helpers/axios'
import { IGetPersonalizedSonglistRequest, ISonglist, IMusic, IMV, IBanner } from './types/personalized'

type GetPersonalizedSonglistFn = (params: IGetPersonalizedSonglistRequest) => Promise<ISonglist[]>
type GetPersonalizedNewMusicFn = () => Promise<IMusic[]>
type GetPersonalizedMVFn = () => Promise<IMV[]>
type GetBannerFn = () => Promise<IBanner[]>

const getPersonalizedSonglist: GetPersonalizedSonglistFn = async ({ limit }) => {
  const response = await axios({
    method: 'get',
    url: '/personalized',
    params: {
      limit
    }
  })

  return response.result || []
}

const getPersonalizedNewMusic: GetPersonalizedNewMusicFn = async () => {
  const response = await axios({
    method: 'get',
    url: '/personalized/newsong'
  })

  return response.result
}

const getPersonalizedMV: GetPersonalizedMVFn = async () => {
  const response = await axios({
    method: 'get',
    url: '/personalized/mv'
  })

  return response.result
}

const getBanner: GetBannerFn = async () => {
  const response = await axios({
    method: 'get',
    url: '/banner',
    params: {
      type: 0
    }
  })

  return response.banners
}

export default {
  getPersonalizedSonglist,
  getPersonalizedNewMusic,
  getPersonalizedMV,
  getBanner
}
