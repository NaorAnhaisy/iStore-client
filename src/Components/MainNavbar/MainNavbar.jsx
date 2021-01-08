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

 
    $('a.scroll-link').on('click', function (e) {
        e.preventDefault();
        scroll_to($(this), 0);
    });

    function scroll_to(clicked_link, nav_height) {
        var element_class = clicked_link.attr('href').replace('#', '.');
        var scroll_to = 0;
        if (element_class !== '.top-content') {
            element_class += '-container';
            scroll_to = $(element_class).offset().top - nav_height;
        }
        if ($(window).scrollTop() !== scroll_to) {
            $('html, body').stop().animate({ scrollTop: scroll_to }, 1000);
        }
    }

    $('.to-top a').on('click', function (e) {
        e.preventDefault();
        if ($(window).scrollTop() !== 0) {
            $('html, body').stop().animate({ scrollTop: 0 }, 1000);
        }
    });

    $('a.btn-customized-dark').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').removeClass('light');
    });

    $('a.btn-customized-light').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').addClass('light');
    });

    return (
        <div class="wrapper">

            <nav class="sidebar">

                <div class="dismiss">
                    <i class="fas fa-arrow-left"></i>
                </div>

                <div class="logo">
                    <h3><a href="index.html">Bootstrap 4 Template with Sidebar Menu</a></h3>
                </div>

                <ul class="list-unstyled menu-elements">
                    <li class="active">
                        <a class="scroll-link" href="#top-content"><i class="fas fa-home"></i> Home</a>
                    </li>
                    <li>
                        <a class="scroll-link" href="#section-1"><i class="fas fa-cog"></i> What we do</a>
                    </li>
                    <li>
                        <a class="scroll-link" href="#section-2"><i class="fas fa-user"></i> About us</a>
                    </li>
                    <li>
                        <a class="scroll-link" href="#section-5"><i class="fas fa-pencil-alt"></i> Portfolio</a>
                    </li>
                    <li>
                        <a class="scroll-link" href="#section-6"><i class="fas fa-envelope"></i> Contact us</a>
                    </li>
                    <li>
                        <a href="#otherSections" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" role="button" aria-controls="otherSections">
                            <i class="fas fa-sync"></i>Other sections
                        </a>
                        <ul class="collapse list-unstyled" id="otherSections">
                            <li>
                                <a class="scroll-link" href="#section-3">Our projects</a>
                            </li>
                            <li>
                                <a class="scroll-link" href="#section-4">We think that...</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div class="to-top">
                    <button class="btn btn-primary btn-customized-3">
                        <i class="fas fa-arrow-up"></i> Top
                    </button>
                </div>

                <div class="dark-light-buttons">
                    <button class="btn btn-primary btn-customized-4 btn-customized-dark">
                        Dark
                    </button>

                    <button class="btn btn-primary btn-customized-4 btn-customized-light">
                        Light
                    </button>
                </div>
            </nav>

            <div class="overlay"></div>
            <div class="content">
                <button class="btn btn-primary btn-customized open-menu">
                    <i class="fas fa-align-left"></i> <span>Menu</span>
                </button>

                {/* <!-- here is the page's content (not shown here) --> */}

            </div>

        </div>
    )
}