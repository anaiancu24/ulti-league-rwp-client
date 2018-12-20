import * as React from 'react';

export default function ShareInfo(props) {
  return (
    <div className="share-info">
      <div>
        <div className="your-help">
          <input type="number" defaultValue={10} onChange={props.onChange}></input>
          <h2>Your Help</h2>
        </div>
      </div>

      <div className="your-spirit-shares">
        <div className="spirit-shares-info">
        <h3>4%</h3>
        </div>
        <h2>Your Spirit Shares</h2>
      </div>

      <button onClick={props.toggle}>Make me a Spiritholder</button>


    </div>)
}