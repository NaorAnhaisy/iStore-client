import React from 'react';
import './Home.css';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import { Container } from 'react-bootstrap';
import "aos/dist/aos.css";
import 'font-awesome/css/font-awesome.min.css';
import { useEffect } from 'react';

export default function Home(props) {

    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])

    return (
        <Container className="p-3">
            <h1>iStore Home Page!</h1>
            <h3 style={{color: "yellow"}}>It's try</h3>
            <h3 style={{color: "blue"}}>It's try</h3>
            <h3 style={{color: "red"}}>It's try</h3>
            <h3 style={{color: "green"}}>It's try</h3>
            <h3 style={{color: "gray"}}>It's try</h3>
        </Container>
    )
}