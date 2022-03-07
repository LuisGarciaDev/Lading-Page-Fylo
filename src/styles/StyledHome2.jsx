import { Card, CardGroup } from "react-bootstrap";
import styled from "styled-components";

export const ImgCards = styled(Card.Img)`
    width:20%;
    text-align:center !important;
`
export const DivCard = styled(Card)`
    align-items:center;
    text-align:center !important;
    background-color: hsl(218, 28%, 13%);
`

export const ComponentCard = styled(CardGroup)`
    text-align:center !important;
`
export const Div2 = styled.div`
    background-color: hsl(218, 28%, 13%);
    text-align:center;
    color: hsl(0, 0%, 100%);
    margin:10%;
`