import {Fragment,memo} from 'react';
import Button from "../../../button/Btn";
import { Link } from 'react-router-dom';

function Form({formState,handleChanger,formSubmitHandle}:{formState:{fullName:string|undefined;email:string|undefined;bussiNess:string|undefined;office:string|undefined;};handleChanger:(event:any)=>void; formSubmitHandle:()=> void}) {
  return (
    <Fragment>
      <form className="row g-3 needs-validation" action="/Signup" method='POST' noValidate >
         <div className='col-12'>
           <label htmlFor="validationCustom01" className="form-label d-none"></label>
           <input type="text" className="form-control py-2" name='fullName' onChange={handleChanger}  id="validationCustom01" value={formState?.fullName} placeholder='fullName' required />
           <div className="invalid-feedback">
             Please choose a unique and valid fullname.
           </div>
         </div>
         <div className='col-12' >
         <label htmlFor="validationCustom02" className="form-label d-none"></label>
           <input type="text" className="form-control py-2" name='email' id="validationCustom02"  onChange={handleChanger} value={formState?.email} placeholder='Email' required />
           <div className="invalid-feedback">
             Please choose a unique and valid email.
           </div>
         </div>
         <div className='col-12 '>
           <label htmlFor="validationCustom03" className="form-label d-none"></label>
           <input type="text" className="form-control py-2" name='bussiNess' id="validationCustom03" onChange={handleChanger} value={formState?.bussiNess} placeholder='Bussiness Name' required />
           <div className="invalid-feedback">
             Please choose a unique and valid bussiness.
           </div>
         </div>
         <div className='col-12'>
           <label htmlFor="validationCustom04" className="form-label d-none"></label>
           <input type="text" className="form-control py-2" name='office' id="validationCustom04" onChange={handleChanger} value={formState?.office} placeholder='Headofflice' required />
           <div className="invalid-feedback">
             Please choose a unique and valid bussiness.
           </div>
         </div>
         <div className="col-12">
           <div className="form-check">
             <input className="form-check-input" type="checkbox" name='agree'  id="validationCustom05" required/>
             <label className="form-check-label" style={{fontSize:"10px",fontWeight:"500",color:"#4C4E64"}} htmlFor="validationCustom05">
               i Agree to privacy policy & terms
             </label>
           </div>
           <div className="invalid-feedback">
             please checked.
           </div>
         </div>
         <div className="col-12 mt-3 d-flex flex-column"> 
            <Button content='get started' paddingY = ""  paddingX = "" width='100' clickfunc={formSubmitHandle} />
            <Link to="#" className="mt-4 mx-auto " style={{textDecoration:"none",fontSize:"14px", fontWeight:"500"}}>{" "} <span className='text-capitalize' style={{color:"rgb(76 78 100 / 56%)"}}>already</span><span style={{color:"rgb(76 78 100 / 56%)"}}> have an account?</span>
            <span style={{ color: "#000000",fontSize: "14px",fontWeight: "500",}}><span className='text-capitalize'> sign </span>
            in instead
            </span>
            </Link>
         </div>
      </form>
    </Fragment>
  )
}

export default memo(Form);
