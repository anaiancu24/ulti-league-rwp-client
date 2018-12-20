import React, { PureComponent } from 'react';
import './signup.css'

export default class Loading extends PureComponent {

    render() {

        setTimeout(function(){ 

            window.location.href = "/dashboard";
    
    }, 5000)        

        return (
            <div className="loading-page">
            </div>
        )
    }
}


