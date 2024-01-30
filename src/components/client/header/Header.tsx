import {Fragment,memo} from 'react';
import SearchBar from '../../searchbar/Searchbar';
import Button from "../../button/Btn";

function Header({callFunction}:{callFunction:()=> void}) {
  return (
    <Fragment>
      <div className='d-flex justify-content-sm-end align-items-center my-2'>
         <div className='d-flex align-items-center'>
            <div className='mx-2'><SearchBar placeholder='search' /></div>
            <div className='addPersons mx-2'><Button content='add new clients' width='' clickfunc={callFunction} paddingX='' paddingY='' /></div>
         </div>
      </div>
    </Fragment>
  )
}

export default memo(Header);