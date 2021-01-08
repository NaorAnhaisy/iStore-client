import React, { useEffect } from 'react';
import './MainNavbar.css';
import $ from 'jquery';
 
export default function MainNavbar(props) {

    useEffect(() => {
        $('.dismiss, .overlay').on('click', function () {
            $('.sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });
    
        $('.open-menu').on('click', function (e) {
            e.preventDefault();
            $('.sidebar').addClass('active');
            $('.overlay').addClass('active');
            // close opened sub-menus
            $('.collapse.show').toggleClass('show');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    
    })

    return (
        <div className="wrapper">

            <nav className="sidebar">

                <div className="dismiss">
                    <i className="fas fa-arrow-left"></i>
                </div>

                <div className="logo">
                    <h3><a href="index.html">Bootstrap 4 Template with Sidebar Menu</a></h3>
                </div>

                <ul className="list-unstyled menu-elements">
                    <li className="active">
                        <a className="scroll-link" href="#top-content"><i className="fas fa-home"></i> Home</a>
                    </li>
                    <li>
                        <a className="scroll-link" href="#section-1"><i className="fas fa-cog"></i> What we do</a>
                    </li>
                    <li>
                        <a className="scroll-link" href="#section-2"><i className="fas fa-user"></i> About us</a>
                    </li>
                    <li>
                        <a className="scroll-link" href="#section-5"><i className="fas fa-pencil-alt"></i> Portfolio</a>
                    </li>
                    <li>
                        <a className="scroll-link" href="#section-6"><i className="fas fa-envelope"></i> Contact us</a>
                    </li>
                    <li>
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
                    </li>
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