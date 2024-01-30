import {Fragment,memo} from 'react'

function Searchbar({placeholder}:{placeholder:string | undefined}) {
  return (
    <Fragment>
      <input type="text" className='form-control text-capitalize' name="search" id="search" placeholder={placeholder} />
    </Fragment>
  )
}

export default memo(Searchbar);