import React from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

import { FaStar } from 'react-icons/fa';
import { IoIosRemoveCircle } from 'react-icons/io';

import logodeezer from '../../assets/logodeezer.png';
import { addTrack, removeTrack } from '../../store/actions/favorites';

import Control from '../TrackControl';

import { Container } from './styles';

function Tracks({ tracks, option }) {
  const dispatch = useDispatch();
  const label = option === 'Add' ? (
    <FaStar size={18} className="svg-yellow"/>
  ): (
    <IoIosRemoveCircle size={18} className="svg-red"/>
  );

  function changeTrackToFavoriteList(track) {
    if(option === 'Add'){
      dispatch(addTrack(track));
    }else{
      dispatch(removeTrack(track.id));
    }
  }

  return (
    <Container>
      <ul>
        {!tracks || tracks.length === 0 ? (
          <center> sem dados</center>
        ) : tracks?.map((track, index)  => {
          return (
              <li key={index}>
                <Image src={track.album.cover_big} alt={track.album.title} layout='fill'/>
                <div>
                  <strong>{`Artista: ${track.artist.name}`}</strong>
                  <strong>{`Música: ${track.title}`}</strong>
                  <strong>{`Álbum': ${track.album.title}`}</strong>
                  <strong>{`Duração: ${track.duration}`}</strong>
                </div>
                <div className="combo-btn">
                  <button type="button" onClick={() => changeTrackToFavoriteList(track)}>{label}</button>
                  <Control src={track.preview}/>
                  <button type="button" onClick={() => window.open(track.link)}><Image src={logodeezer} alt="Ouça no Deezer"/></button>
                </div>
              </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Tracks;