import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
export default function Header(props) {
    const navigate = useNavigate();
  return (
    <Container>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <button onClick={()=> navigate(props.login ? "/login" : "/sgnup")}>
            {props.login ? "Log In" : "Sign In"}
        </button>
    </Container>
  )
}
const Container = styled.div``;