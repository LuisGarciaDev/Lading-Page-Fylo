import { Col, Form } from "react-bootstrap";
import styled from "styled-components";

export const DivNews = styled.div`
    text-align:center !important;
    background-color:hsl(219, 30%, 18%);
`
 export const DivCol = styled(Col)`
    display: inline;
    background-color:yellowgreen;
`

export const DivForm = styled(Form)`
    display:flex;
`

export const Divinput = styled.input`
    background-color:white;
    border-radius:10px ;
    padding-inline:10%;
`
export const Divbutton = styled.button`
    margin:10px;
    padding-inline:5%;
    background-color:hsl(176, 68%, 64%);
    border-radius:10px;
    color:white;
`