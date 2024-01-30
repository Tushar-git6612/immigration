import {Fragment,memo} from 'react';

function Rejection() {
  return (
    <Fragment>
         <form action="" className='row g-3 needs-validation' noValidate >
            <div className='col-12 d-flex justify-content-start align-items-center'>
               <p className=" mb-0" style={{color:"rgb(76 78 100 / 87%)",fontWeight:"500",fontSize:"14px"}} >
                  Have you ever been rejection a visa before?
               </p>
               <div className='ms-4'>
               <input className="form-check-input" type="radio" name="agree" id="flexRadioDefault1" required />
               <label className="form-check-label ms-2" style={{color:"rgb(76 78 100 / 87%)"}} htmlFor="flexRadioDefault1">
                 Yes
               </label>
               </div>
               <div className='ms-2'>
               <input className="form-check-input" style={{color:"rgb(76 78 100 / 87%)"}} type="radio" name="agree" id="flexRadioDefault2" required />
               <label className="form-check-label ms-2" htmlFor="flexRadioDefault2">
                 No
               </label>
               </div>
            </div>
            <div className='col-sm-6 col-12'>
               <input type="text" className='form-control' name="country" placeholder='Country' id="country" required />
            </div>
            <div className="col-sm-6 col-12">
            <select className="form-select" name='visatype' style={{padding: "5px 10px",color:"rgb(58 53 65 / 41%)"}} id="visatype" required>
               <option value="">
               Type of Visa
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
         </form>
    </Fragment>
  )
}

export default memo(Rejection);