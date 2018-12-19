import React from 'react'


export default function DraftListSearch (props) {

return (
      <div className="draft-filter-search">
        <form onSubmit={(event) => event.preventDefault()}>
        
        <input type="text" className="draft-filter-search-input" placeholder="Search..." onChange={props.FilterList}/>
        
        </form>
     
      </div>
    );
}
