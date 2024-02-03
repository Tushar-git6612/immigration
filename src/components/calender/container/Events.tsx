import {Fragment,memo} from 'react';
import Button from "../../button/Btn";


function Events() {
  return (
    <Fragment>
         <div className='d-flex flex-column'>
           <div className='calender mx-auto'>
               <Button content='add event' width='' paddingX='5' paddingY='1' clickfunc={()=>{}} />
           </div>
           <p className='text-uppercase mt-4' style={{color:"rgb(76 78 100 / 60%)",fontSize:"12px",fontWeight:"400"}}>calender</p>
           <div className='d-flex align-items-center justify-content-start mb-3'> 
             <span>
               <input className="form-check-input" type="checkbox" value="" id="viewall" />
             </span> 
             <span className='ms-3'>
               <label style={{color:"rgb(76 78 100 / 87%)",fontSize:"15px",fontWeight:"400"}} className="form-check-label text-capitalize" htmlFor="viewall">view all</label>
             </span>
           </div>
           <div className='d-flex align-items-center justify-content-start mb-3'> 
             <span>
               <input className="form-check-input" type="checkbox" value="" id="personal" />
             </span> 
             <span className='ms-3'>
               <label style={{color:"rgb(76 78 100 / 87%)",fontSize:"15px",fontWeight:"400"}} className="form-check-label text-capitalize" htmlFor="personal">personal</label>
             </span>
           </div>
           <div className='d-flex align-items-center justify-content-start mb-3'> 
             <span>
               <input className="form-check-input" type="checkbox" value="" id="bussiness" />
             </span> 
             <span className='ms-3'>
               <label style={{color:"rgb(76 78 100 / 87%)",fontSize:"15px",fontWeight:"400"}} className="form-check-label text-capitalize" htmlFor="bussiness">bussiness</label>
             </span>
           </div>
           <div className='d-flex align-items-center justify-content-start mb-3'> 
             <span>
               <input className="form-check-input" type="checkbox" value="" id="family" />
             </span> 
             <span className='ms-3'>
               <label style={{color:"rgb(76 78 100 / 87%)",fontSize:"15px",fontWeight:"400"}} className="form-check-label text-capitalize" htmlFor="family">family</label>
             </span>
           </div>
           <div className='d-flex align-items-center justify-content-start mb-3'> 
             <span>
               <input className="form-check-input" type="checkbox" value="" id="holiday" />
             </span> 
             <span className='ms-3'>
               <label style={{color:"rgb(76 78 100 / 87%)",fontSize:"15px",fontWeight:"400"}} className="form-check-label text-capitalize" htmlFor="holiday">holiday</label>
             </span>
           </div>
           <div className='d-flex align-items-center justify-content-start mb-2'> 
             <span>
               <input className="form-check-input" type="checkbox" value="" id="etc" />
             </span> 
             <span className='ms-3'>
               <label style={{color:"rgb(76 78 100 / 87%)",fontSize:"15px",fontWeight:"400"}} className="form-check-label text-uppercase" htmlFor="etc">etc</label>
             </span>
           </div>
         </div>
    </Fragment>
  )
}

export default memo(Events);
