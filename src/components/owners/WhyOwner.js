import * as React from 'react';

export default function WhyOwner(props) {
  const p1 = "Ultimate Frisbee is awesome! Unfortunately, it is also costly to participate in all the great tournaments. Travelling from city to city, country to country, or even contintent to continent ain’t cheap!"
  const p2 = "You can now support your favorite teams and help make the sport more popular. As a team co-owner you help your favorite teams play by investing in them. The money goes towards covering their travel expenses and you get to co-decide this season’s squad selection together with the coach and players!"
  return (
    <div className="why-owner">
      <h2>Why become<br></br>a Spirit Holder?</h2>
      <div>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    </div>)
}