import {Fragment,memo} from 'react'

function Personalform() {
  return (
    <Fragment>
         <form action="" className='row g-3 needs-validation' noValidate >
            <div className="col-sm-6 col-12">
               <input type="text" className='form-control py-2' id='fullName' name='fullName' style={{color:"rgb(58 53 65 / 41%)", fontSize:"12px"}} placeholder='Full Name' required />
            </div>
            <div className="col-sm-6 col-12">
               <input type="text" className='form-control py-2' id='dob' name='dob' style={{color:"rgb(58 53 65 / 41%)", fontSize:"12px"}} placeholder='date of birth' required />
            </div>
            <div className="col-sm-6 col-12">
               <select className="form-select" style={{padding: "5px 10px",color:"rgb(58 53 65 / 41%)"}} id="phoneNumberCode" name="phoneNumberCode" required>
                  <option value="">
                  Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
               </select>
            </div>
            <div className="col-sm-6 col-12">
               <input type="text" className='form-control py-2' id='nationalty' name='nationalty' style={{color:"rgb(76 78 100 / 60%)", fontSize:"12px"}} placeholder='Nationalty' required />
            </div>
            <div className="col-sm-6 col-12">
               <input type="text" className='form-control py-2' id='passportNumber' name='passportNumber' style={{color:"rgb(76 78 100 / 60%)", fontSize:"12px"}} placeholder='Passport Number' required />
            </div>
            <div className="col-sm-6 col-12">
               <input type="text" className='form-control py-2' id='passportExpiry' name='passportExpiry' style={{color:"rgb(76 78 100 / 60%)", fontSize:"12px"}} placeholder='Passport Expiry Date' required />
            </div>
            <div className="col-sm-6 col-12">
               <input type="text" className='form-control py-2' id='contactNumber' name='contactNumber' style={{color:"rgb(76 78 100 / 60%)", fontSize:"12px"}} placeholder='Contact Number' required />
            </div>
            <div className="col-sm-6 col-12">
               <input type="text" className='form-control py-2' id='alternateNumber' name='alternate Number' style={{color:"rgb(76 78 100 / 60%)", fontSize:"12px"}} placeholder='Alternate Contact Number' required />
            </div>
            <div className="col-sm-6 col-12">
               <input type="text" className='form-control py-2' id='email' name='email' style={{color:"rgb(76 78 100 / 60%)", fontSize:"12px"}} placeholder='Email' required />
            </div>
            <div className="col-sm-6 col-12">
               <input type="text" className='form-control py-2' id='address' name='address' style={{color:"rgb(76 78 100 / 60%)", fontSize:"12px"}} placeholder='Address' required />
            </div>
         </form>
    </Fragment>
  )
}

export default memo(Personalform);