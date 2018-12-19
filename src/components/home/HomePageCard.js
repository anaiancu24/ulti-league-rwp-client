import * as React from 'react';
import HomePageTag from './HomePageTag'

export default function HomePageCard(props) {

  return (
    <div className={props.className} onClick={props.onClick}>
      <HomePageTag class={props.tagName}/>
    </div>)
}