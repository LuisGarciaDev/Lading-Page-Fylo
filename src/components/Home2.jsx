import React from 'react'
import { Card } from 'react-bootstrap'
import { ComponentCard, Div2, DivCard, ImgCards } from '../styles/StyledHome2'


const Home2 = () => {
  return (
    <Div2>
        <ComponentCard>
  <DivCard>
    <ImgCards variant="top" src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189829/sprint3/icon-access-anywhere_um0enc.svg" />
    <Card.Body>
      <Card.Title>Access your files, anywhere</Card.Title>
      <Card.Text>
      The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere.
      </Card.Text>
    </Card.Body>
  </DivCard>
  <DivCard>
    <ImgCards variant="top" src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189827/sprint3/icon-security_smykv5.svg" />
    <Card.Body>
      <Card.Title>Security you can trust</Card.Title>
      <Card.Text>
      2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files.
      </Card.Text>
    </Card.Body>
  </DivCard>
</ComponentCard>
<ComponentCard>
  <DivCard>
    <ImgCards variant="top" src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189827/sprint3/icon-collaboration_djqw10.svg" />
    <Card.Body>
      <Card.Title>Real-time collaboration</Card.Title>
      <Card.Text>
      Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required.
      </Card.Text>
    </Card.Body>
  </DivCard>
  <DivCard>
    <ImgCards variant="top" src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189829/sprint3/icon-any-file_qyddkh.svg" />
    <Card.Body>
      <Card.Title>Store any type of file</Card.Title>
      <Card.Text>
      Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared.
      </Card.Text>
    </Card.Body>
  </DivCard>
</ComponentCard>
    </Div2>
  )
}

export default Home2