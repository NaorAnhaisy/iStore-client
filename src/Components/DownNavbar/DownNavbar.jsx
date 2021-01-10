import React, { Component } from 'react';
import './DownNavbar.css';
import { Navbar } from 'react-bootstrap';

class DownNavbar extends Component {

    render() {
        return (
            <>
                <div className="push"></div>
                <footer className="footer">
                    <Navbar className="down-navbar down-navbar-nav-container">
                        <table style={{ width: "100%" }}>
                            <tbody>
                                <tr>
                                    <td style={{ width: "50%" }} className="copyright-span">
                                        This website developed by <a className="developer-name" href="https://github.com/NaorAnhaisy">Naor Anhaisy</a>
                                    </td>
                                    <td style={{ width: "50%" }} className="about-site">
                                        iStore © {new Date().getFullYear()} - All Rights Reserve.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Navbar>
                </footer>
            </>
        );
    }
}

export default DownNavbar;