import React from 'react';
import './Home.css';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
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
        <div className="home-page">
            <h1>iStore Home Page!</h1>
        </div>
    )
}