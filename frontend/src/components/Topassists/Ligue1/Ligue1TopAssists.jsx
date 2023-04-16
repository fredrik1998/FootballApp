import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLigue1TopAssists } from '../../../slice/Ligue1TopAssistsSlice'
import Loader from '../../Loader/Loader'
import { StyledWrapper } from './Ligue1TopAssistsElements'

const Ligue1TopAssists = () => {
    const dispatch = useDispatch();
    const Ligue1 = useSelector((state) => state.Ligue1.data);
    const Ligue1TopAssists = useSelector((state) => state.Ligue1TopAssists.data);
    const Ligue1TopAssistsStatus = useSelector((state) => state.Ligue1TopAssists.status);
    const Ligue1TopAssistsError = useSelector((state) => state.Ligue1TopAssists.error);

    useEffect(() => {
        if(Ligue1TopAssistsStatus === 'idle'){
            dispatch(fetchLigue1TopAssists());
        }
    }, [Ligue1TopAssistsStatus, dispatch])
    
  return (
    <StyledWrapper>

    </StyledWrapper>
  )
}

export default Ligue1TopAssists