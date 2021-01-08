import React, { Component } from 'react';
import './BadUrl.css'

class BadUrl extends Component {
    render() {
        return(
            <div className="bad-url-page">
                <h2 className="bad-url-title">אופס, הדף שחיפשת אינו קיים.</h2>
                <div className='bad-url-error-div'>
                    <p className='bad-url-error'>E<span>r</span>ror</p>
                    <p className='bad-url-code'>4<span>0</span><span>4</span></p>
                </div>
            </div>
        )
    }
}

export default BadUrl;