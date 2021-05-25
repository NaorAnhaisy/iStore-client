import React, { useEffect, useState } from 'react';
import './MainNavbar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { clientUrl } from '../../globals';
import AuthService from '../../Auth/AuthService';
 
const firstNavLinksSection = [
    { name: "Dashboard", linkTo: "dashboard", icon: "home" },
    { name: "Store Products", linkTo: "storeProducts", icon: "pencil-alt" },
    { name: "Builder UI", linkTo: "builderUI", icon: "store" },
    { name: "Settings", linkTo: "settings", icon: "cog" },
    { name: "Contact Us", linkTo: "contactUs", icon: "envelope" },
]

const secondNavLinksSection = AuthService.getCurrentUserToken() ?
    [{ name: "Logout", icon: "sign-in-alt" }] :
    [
        { name: "Login", linkTo: "login", icon: "sign-in-alt" },
        { name: "Register", linkTo: "register", icon: "user" }
    ];

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
    }, [])

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

    function handleLogoutClicked() {
        AuthService.logout();
    }

    const createNavbarLiElements = (elementsDataArray) => {
        let htmlElements = [];
        elementsDataArray.forEach(elementData => {
            let elementLinkTo = elementData.linkTo;
            let htmlElement = <li className={(activeNav === elementLinkTo ? "active" : "")} key={"navbar_" + elementLinkTo}>
                <Link to={elementData.name === 'Logout' ? '/' : '/' + elementLinkTo}
                    className="close-navbar-onClick"
                    onClick={() => elementData.name === 'Logout' ? handleLogoutClicked() : setActiveNav(elementLinkTo)}>
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