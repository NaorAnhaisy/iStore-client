import React, { useEffect, useState } from 'react';
import './MainNavbar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';

export default function MainNavbar(props) {

    const [activeNav, setActiveNav] = useState("logo");

    useEffect(() => {
        $('.dismiss, .overlay, .close-navbar-onClick').on('click', dismissNavbar);

        $('.open-menu').on('click', function (e) {
            e.preventDefault();
            $('.sidebar').addClass('active');
            $('.overlay').addClass('active');
            // close opened sub-menus
            $('.collapse.show').toggleClass('show');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    })

    function dismissNavbar() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    }

    const createNavbarLiElements = (elementsDataArray) => {
        let htmlElements = [];
        elementsDataArray.forEach(elementData => {
            let elementNameToLink = elementData.name.replace(/ /g,'');

            let htmlElement = <li className={(activeNav === elementNameToLink ? "active" : "")} key={"navbar_" + elementNameToLink}>
                <Link to={'/' + elementNameToLink} className="close-navbar-onClick" onClick={() => setActiveNav(elementNameToLink)}>
                    <i className={"fas fa-" + elementData.icon}></i> {elementData.name}
                </Link>
            </li>
            htmlElements.push(htmlElement)
        });

        return htmlElements;
    }

    return (
        <div className="wrapper">
            <nav className="sidebar">
                <div className="dismiss">
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="logo">
                    <h3>
                        <Link to="/" className="close-navbar-onClick">iStore</Link>
                    </h3>
                </div>
                <ul className="list-unstyled menu-elements">
                    {createNavbarLiElements([
                        { name: "Dashboard", icon: "home" },
                        { name: "Store Products", icon: "pencil-alt" },
                        { name: "Store Orders", icon: "user" },
                        { name: "Settings", icon: "cog" },
                        { name: "Contact Us", icon: "envelope" },
                    ])}
                    {/* <li>
                        <a href="#otherSections" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" role="button" aria-controls="otherSections">
                            <i className="fas fa-sync"></i>Other sections
                        </a>
                        <ul className="collapse list-unstyled" id="otherSections">
                            <li>
                                <a className="scroll-link" href="#section-3">Our projects</a>
                            </li>
                            <li>
                                <a className="scroll-link" href="#section-4">We think that...</a>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </nav>

            <div className="overlay"></div>
            <div className="content">
                <button className="btn btn-primary btn-customized open-menu">
                    <i className="fas fa-align-left"></i> <span>Menu</span>
                </button>
            </div>

        </div>
    )
}