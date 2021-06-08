import React from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../components/Navbar';
import Tracks from '../components/Tracks';

function Favorites() {
  const tracks = useSelector(state => state.favorites.favorites);

  return (
    <div className="container">
      <Navbar />
      {!tracks ? (
        <strong>Você não possui nenhuma música favorita</strong>
      ): (
        <Tracks tracks={tracks} option={'Remove'} />
      )}
      <div className="navigation" >
        {/* <button onClick={() => history.push('/')}>Home</button> */}
      </div>
    </div>
  )
}

export default Favorites;