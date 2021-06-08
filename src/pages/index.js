import React, { useEffect } from 'react';
import { END } from 'redux-saga'
import { useSelector } from 'react-redux';
import { wrapper } from '../store/store';

import { tracksRequest } from '../store/actions/tracks';

import Navbar from '../components/Navbar';
import Tracks from '../components/Tracks';

const Index = () => {
  const tracks = useSelector(state => state.tracks.tracks);
  const loading = useSelector(state => state.tracks.loading);

  return (
    <div className="container">
      <Navbar />
      {loading ? (
        <small>Carregando dados</small>
      ): (
        <Tracks tracks={tracks} option={'Add'} />
      )}
      <div className="navigation">
        {/* <button onClick={() => history.push('/favorites')}>Músicas Favoritas</button> */}
      </div>
    </div>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {  
  store.dispatch(tracksRequest());

  if (!store.getState().placeholderData) {
    store.dispatch(loadData())
    store.dispatch(END)
  }

  await store.sagaTask.toPromise();
})

export default Index;