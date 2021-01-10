import React, { useEffect, useState } from 'react';
import './MainNavbar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { clientUrl } from '../../globals';

const firstNavLinksSection = [
    { name: "Dashboard", icon: "home" },
    { name: "Store Products", icon: "pencil-alt" },
    { name: "Store Orders", icon: "store" },
    { name: "Settings", icon: "cog" },
    { name: "Contact Us", icon: "envelope" },
]

const secondNavLinksSection = [
    { name: "Login", icon: "user" },
    { name: "Register", icon: "sign-in-alt" }
]

export default function MainNavbar() {
    const [activeNav, setActiveNav] = useState("logo");

    useEffect(() => {
        $('.dismiss, .overlay, .close-navbar-onClick').on('click', dismissNavbar);
        $('.open-menu').on('click', function (e) {
            e.preventDefault();
            handleActiveNavLink(window.location.href)
            $('.sidebar').addClass('active');
            $('.overlay').addClass('active');
            $('.collapse.show').toggleClass('show');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    })

    function dismissNavbar() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    }

    function handleActiveNavLink(curentUrl) {
        let PREFIX = clientUrl + '/';
        let slicedUrl = curentUrl.slice(PREFIX.length);
        slicedUrl = slicedUrl.split("/").pop();
        let allNavLinks = firstNavLinksSection.concat(secondNavLinksSection);
        let found = allNavLinks.find(navLink => navLink.name === slicedUrl);
        if (found) setActiveNav(found.name);
    }

    const createNavbarLiElements = (elementsDataArray) => {
        let htmlElements = [];
        elementsDataArray.forEach(elementData => {
            let elementNameToLink = elementData.name.replace(/ /g, '');
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
                <div className="navbar-brand-logo">
                    <h3 className="navbar-brand">
                        <Link to="/" className="close-navbar-onClick">iStore</Link>
                    </h3>
                </div>
                <ul className="list-unstyled menu-elements">
                    {createNavbarLiElements(firstNavLinksSection)}
                    <hr style={{ background: "#989898" }} />
                    {createNavbarLiElements(secondNavLinksSection)}
                </ul>
            </nav>
            <div className="overlay"></div>
            <div className="content">
                <button className="btn open-menu">
                    <i className="fas fa-align-left"></i> <span>Menu</span>
                </button>
            </div>
        </div>
    )
}