import React from 'react'
import { Card } from 'react-bootstrap'
import { ComponentCard, DivCard } from '../styles/StyledHome2'
import { Div2 } from '../styles/StyledProductive'

const Productive = () => {
    return (
        
            <ComponentCard>
                <DivCard>
                    <img variant="top" src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189827/sprint3/illustration-stay-productive_i8ivqi.png" />
                </DivCard>
                <DivCard>
                <Div2>
                    <Card.Body className='m-2 justify-content-start'>
                        <h2>Stay productive, wherever you are</h2><br />
                        <Card.Subtitle className='justify-content-start'>
                            Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                            storage needs.
                            <br /><br />
                            Securely share files and folders with friends, family and colleagues for live collaboration. No email
                            attachments required.<br /><br />

                            <Card.Link href="#">See how Fylo works</Card.Link>
                        </Card.Subtitle>
                    </Card.Body>
                </Div2>
                </DivCard>
            </ComponentCard>
        
    )
}

export default Productive