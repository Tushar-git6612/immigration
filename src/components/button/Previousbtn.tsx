import {Fragment,memo} from 'react'

function Previousbtn({clickfunc}:{clickfunc:()=> void}) {
  return (
    <Fragment>
      <button className=' d-flex align-items-center px-3' onClick={clickfunc} type='button' style={{backgroundColor:"#FFFFFF",border:"solid rgb(229 229 229 / 92%)", borderRadius:"8px",borderWidth:"solid",color:" rgb(161 161 161 / 92%)"}}>
         <span className='me-2 mb-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/></svg>
         </span>  
         <span className='text-uppercase' style={{fontSize:"10px"}}>previous</span>
      </button>
    </Fragment>
  )
}

export default memo(Previousbtn);