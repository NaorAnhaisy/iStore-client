import React, { useEffect } from 'react';
import './Dashboard.css';
import { Container } from 'react-bootstrap';
import AOS from "aos";

export default function Dashboar() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Container className="p-3 mt-5"
            data-aos="fade-zoom-in"
            data-aos-once={true}
            data-aos-duration="400"
        >
            <h2 className="form-title dashboard-header">Dashboard</h2>
            <h4>Looks like you own no stores yet...</h4>
            <h4>Would you like to start and create your new online store ?</h4>
            <button className="btn open-home-page-start-button dashboard-start-btn">Let's Start ! <i className="far fa-play-circle dashboard-start-icon"></i></button>
        </Container>
    )
}