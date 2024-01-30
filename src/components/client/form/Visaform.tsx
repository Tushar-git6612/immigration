import {Fragment,memo} from 'react';

function Visaform() {
  return (
   <Fragment>
      <form action="" className='row needs-validation' noValidate>
         <div className='col-12'>
         <select className="form-select" style={{padding: "5px 10px",color:"rgb(58 53 65 / 41%)"}} id="visatype" name="visatype" required>
            <option value="">
              select visa type
            </option>
            <option value="+235">+235</option>
            <option value="+62">+62</option>
            <option value="+115">+115</option>
        </select>
        <p className="ps-2" style={{color:"rgb(76 78 100 / 60%)", fontSize:"12px"}}>select which visa you want to apply</p>
      </div>
      <div className='col-sm-6 col-12'>
         <select className="form-select" required style={{padding: "5px 10px",color:"rgb(58 53 65 / 41%)"}} id="englishtest"  name="englishtest">
            <option value="">
              Type of english test
            </option>
            <option value="+235">+235</option>
            <option value="+62">+62</option>
            <option value="+115">+115</option>
        </select>
        <p className="ps-2" style={{color:"rgb(76 78 100 / 60%)", fontSize:"12px"}}>select test</p>
      </div>
      <div className="col-sm-6 col-12">
         <input type="text" required className='form-control' name='score'  id='score' placeholder='score' style={{color:"rgba(58, 53, 65, 0.41)6)",fontSize:"14px"}} />
         <p className="ps-2" style={{color:"rgb(76 78 100 / 60%)", fontSize:"10px"}}>enter score</p>
      </div>
      </form>
   </Fragment>
  )
}

export default memo(Visaform);