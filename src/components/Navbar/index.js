import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/router'
import CustomInput from '../InputSearch';

import deezer from '../../assets/deezer.png';
import mani from '../../assets/mani.png';

import { Container } from './styles';

function Navbar() {
  
  const location = useRouter();

  return (
    <Container>
      <div>
        {/* <Image src={mani} alt="Manipulaê" layout='fill' />
        <Image src={deezer} alt="Deezer" layout='fill'/> */}
      </div>
      {location.pathname === '/favorites' ? (<hr />) : (
        <CustomInput />
      )}
    </Container>
  )
}

export default Navbar;