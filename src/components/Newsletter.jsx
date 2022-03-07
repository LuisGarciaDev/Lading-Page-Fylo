import React from 'react'
import { Button, Card, Col, Container, Form } from 'react-bootstrap'
import { DivNews, DivCol, DivForm, Divbutton, Divinput } from '../styles/StyledNewsletter'

const Newsletter = () => {
    return (
        <Container className='mb-5'>
        <DivNews className='p-4 text-center' >
            <Card.Title>Get Started For Free</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br/>
  questions, our support team would be happy to help you.</Card.Subtitle>
            <form>
                <Divinput type='email' placeholder='correo electronico' />
                <Divbutton type='submit'>
                Get Started For Free
                </Divbutton>
                
            </form>
        </DivNews>
        </Container>

    )
}

export default Newsletter