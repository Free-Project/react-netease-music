import React from 'react'
import { Spinner } from '@blueprintjs/core'

import LinkTitle from 'components/LinkTitle'
import SongItem from './SongItem'

import ROUTES from 'constants/routes'
import useAsyncFn from 'hooks/useAsyncFn'
import personalizedApis from 'apis/personalized'
import styles from './style.module.css'

const { useEffect } = React

const Songlist = () => {
  const [state, personalizedSonglistFn] = useAsyncFn(personalizedApis.getPersonalizedSonglist)
  const { value: songlist = [], loading: isGettingSonglist } = state || {}

  useEffect(() => {
    personalizedSonglistFn({ limit: 10 })
  }, [])

  return (
    <div className={styles.root}>
      <LinkTitle title='推荐歌单' route={ROUTES.SONG_LIST} />
      {isGettingSonglist ? <Spinner /> : (
        <div className={styles.songsWrap}>
          {songlist.map(({ id, name, playCount, picUrl }, index) => {
            return (
              <SongItem
                key={index}
                id={id}
                name={name}
                playCount={playCount}
                picUrl={picUrl}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Songlist
