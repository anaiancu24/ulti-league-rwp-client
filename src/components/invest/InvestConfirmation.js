import * as React from 'react';

export default function InvestConfirmation(props) {
  const p1 = "By clicking Yes, I agree to UltiLeague’s Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy."
  return (
    <div className="invest-confirm">
      <div className="confirm-popup">
        <h3>Are you ready to become a<br></br>Spiritholder?</h3>

        <div className="confirm-share-overview">
          <div className="overview-money">

          </div>

          <div className="overview-shares">

          </div>


        </div>

        <p>{p1}</p>

        <button className="reject-btn" onClick={props.toggle}>Wait no!</button>
        <button className="confirm-btn">Yes, I am ready!</button>

      </div>
    </div>)
}