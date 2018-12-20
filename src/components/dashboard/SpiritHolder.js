import * as React from 'react';
import {Link} from 'react-router-dom'

export default function SpiritHolder(props) {
    if (props.userData) {
        console.log(props.userData.account)

    }

    return (
        <div>
            {(props.owner && props.owner.team) ? (
                <button className="label">Boost your Spirit!</button>
            ):(
                <button className="label">Become a Spiritholder</button>
            )}
            
        <div className="spirit-holder">
        {props.owner && props.owner.team &&
            <h3 className="spirittext">Your team has almost met their <br /> budget goal! Help them with the <br /> last bit!</h3>
        }

        {props.owner && !props.owner.team &&
            <h3 className="spirittext">Ultimate is expensive! Help cover {"\n"}team expenses, help decide your {"\n"} coach on players!</h3>
        }
        <div>
            <Link to="/owners/invest/:id">
                <button className="button2">Help your team!</button>
            </Link>
        </div>
        </div>
        </div>
    )
}