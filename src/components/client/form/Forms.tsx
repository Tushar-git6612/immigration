import {Fragment,memo} from 'react';

function Forms() {
  return (
    <Fragment>
      <form action="" className='row g-4 p-3'>
         <div className="col-12"><p className='text-capitalize' style={{fontWeight:"700", fontSize:"12px", color:"rgb(76 78 100 / 87%)"}}>all form</p></div>
         <div className='row ms-2 g-2 g-sm-0 px-0'>
            <div className='col-sm-3 col-6 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='formtype' id="formtype1" style={{borderRadius:"0px"}} required />
               <label htmlFor="formtype1" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>form IMM 1294</label>
            </div>
            <div className='col-sm-3 col-6 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='formtype' id="formtype2" style={{borderRadius:"0px"}} required />
               <label htmlFor="formtype2" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>form IMM 5707</label>
            </div>
            <div className='col-sm-3 col-6 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='formtype' id="formtype3" style={{borderRadius:"0px"}} required />
               <label htmlFor="formtype3" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>form IMM 5476</label>
            </div>
            <div className='col-sm-3 col-6 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='formtype' id="formtype4" style={{borderRadius:"0px"}} required />
               <label htmlFor="formtype4" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>DLI</label>
            </div>
         </div>
         <div className="col-12">
           <p className='text-capitalize' style={{fontWeight:"700", fontSize:"12px", color:"rgb(76 78 100 / 87%)"}}> form IMM 1294</p>
           <div className="row g-3">
           <div className='col-sm-6 col-12'>
               <input type="text" className='form-control' name="country" placeholder='Country' id="country" required />
            </div>
            <div className="col-sm-6 col-12">
               <select className="form-select" style={{padding: "5px 10px",color:"rgb(58 53 65 / 41%)"}} id="visatype" name="visatype" required>
                  <option value="">
                     type of visa
                  </option>
                  <option value="+235">+235</option>
                  <option value="+62">+62</option>
                  <option value="+115">+115</option>
               </select>
            </div>
            <div className='col-sm-6 col-12'>
               <input type="text" className='form-control' name='rejectionreason' id='rejectionreason' placeholder='Reason For Rejection' required />
            </div>
            <div className='col-sm-6 col-12'>
               <input type="text" className='form-control' placeholder='Year and Month' name='yearmonth' id='yearmonth' required />
            </div>
           </div>
         </div>
      </form>
    </Fragment>
  )
}

export default memo(Forms);