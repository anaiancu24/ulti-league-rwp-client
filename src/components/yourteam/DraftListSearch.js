import React from 'react'


export default function DraftListSearch (props) {

return (
      <div className="filter-list">
        <form onSubmit={(event) => event.preventDefault()}>
        <fieldset className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={props.FilterList}/>
        </fieldset>
        </form>
     
      </div>
    );
}
