import React, { PureComponent } from 'react';
import './invest.css'

export default class Loading extends PureComponent {

    render() {

        setTimeout(function(){ 

            window.location.href = "/yourteam";
    
    }, 4000)        

        return (
            <div className="loading-invest-page">
            </div>
        )
    }
}