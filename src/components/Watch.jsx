import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoggleMenu } from '../utils/menuSlice';
import { useSearchParams } from 'react-router-dom';
import WatchVideo from './WatchVideo'

const Watch = () => {
  const dispatch = useDispatch();
  const [id] = useSearchParams();

  const filterDetails = useSelector(store => store.video.videos);

  const details = filterDetails?.filter(detail => detail.id === id.get("v"));

  dispatch(addtoggleMenu(true))

  useEffect(() => {
    return () => dispatch(addtoggleMenu(false))
  }, [])
  return (
    <div className='mt-3.5'>
      {details && <WatchVideo video={details[0]} videoId={id} />}
    </div>
  )
}

export default Watch