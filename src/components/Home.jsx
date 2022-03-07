import React from 'react'
import { Boton, Img, DivImg } from '../styles/StyledHome'
import { DarkBlue } from '../styles/ThemeStyled'

const Home = () => {
  return (
    <DarkBlue>
        <Img src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189827/sprint3/illustration-intro_iixxel.png" alt="" />
        <h2>
            All your files in one secure location,<br/> accessible anywhere.
        </h2>
        <p>
            Fylo stores all your most important files in one secure location.<br/> Access them wherever 
            you need, share and collaborate with <br/> friends family, and co-workers.
        </p>
        <Boton>
    Get Started
  </Boton>{' '}
  <DivImg>

  </DivImg>
    </DarkBlue>

  )
}

export default Home