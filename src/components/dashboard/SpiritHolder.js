import * as React from 'react';

export default function SpiritHolder(props) {
    if (props.userData) {
        console.log(props.userData.account)

    }

  return (
      <div>
            <button className="label">Help you team more</button>




          {/* {props.currentUser && props.userData && props.userData.account.includes('owner') && 
              <button className="label">Help you team more</button>

        } */}
{/* 
          {props.currentUser && props.userData && !props.userData.account.includes('owner') && 
              <button className="label">Become a Spiritholder</button>

        }    */}

    <div className="spirit-holder">
      <h3 className="spirittext">Ultimate is expensive! Help cover {"\n"}team expenses, help decide your {"\n"} coach on players!</h3>
      <div>
          
  <button className="button2" onClick={props.investClick}>Help your team!</button>
</div>
    </div>
    </div>)
}