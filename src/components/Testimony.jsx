import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap';
import { DivCard, DivImg, Divi, DivFter } from '../styles/StyledTestimony';


const Testimony = () => {
    return (
        <Container className="p-5">
            <CardGroup>
                <DivCard
                    style={{ width: '18rem' }}
                    className="m-5"
                >
                    <Card.Body>
                        <Card.Text>
                            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                            become a well-oiled collaboration machine.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <DivFter>
                            <DivImg src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189827/sprint3/profile-1_dfdmqi.jpg" style={{ width: '15%' }} />
                            <div>
                            <Divi>
                                Satish Patel

                            </Divi>
                            <Divi>
                                Founder and Ceo Huddle
                            </Divi>
                            </div>
                        </DivFter>
                    </Card.Footer>
                </DivCard>
                <DivCard
                    style={{ width: '18rem' }}
                    className="m-5"
                >
                    <Card.Body>
                        <Card.Text>
                            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                            become a well-oiled collaboration machine.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <DivFter>
                            <DivImg src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189827/sprint3/profile-2_ywaxlb.jpg" style={{ width: '15%' }} />
                            <div>
                            <Divi>
                                Satish Patel

                            </Divi>
                            <Divi>
                                Founder and Ceo Huddle
                            </Divi>
                            </div>
                        </DivFter>
                    </Card.Footer>
                </DivCard>
                <DivCard
                    style={{ width: '18rem' }}
                    className="m-5"
                >
                    <Card.Body>
                        <Card.Text>
                            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                            become a well-oiled collaboration machine.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <DivFter>
                            <DivImg src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189828/sprint3/profile-3_kqsrnk.jpg" style={{ width: '15%' }} />
                            <div>
                            <Divi>
                                Satish Patel

                            </Divi>
                            <Divi>
                                Founder and Ceo Huddle
                            </Divi>
                            </div>
                        </DivFter>
                    </Card.Footer>
                </DivCard>
            </CardGroup>
        </Container>
    );
}

export default Testimony