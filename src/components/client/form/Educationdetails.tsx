import {Fragment,memo} from 'react'

function Educationdetails() {
  return (
    <Fragment>
      <form action="" className='row g-3 needs-validation' noValidate >
         <div className='col-sm-6 col-12'>
            <select className="form-select" style={{padding: "5px 10px",color:"rgb(58 53 65 / 41%)"}} id="levelofeducation" name="levelofeducation" required>
               <option value="">
                 Highest Level Of Education
               </option>
               <option value="+235">+235</option>
               <option value="+62">+62</option>
               <option value="+115">+115</option>
            </select>
         </div>
         <div className='col-sm-6 col-12'>
            <input type="text" className='form-control' id='nameofinstitude' name='nameofinstitude' placeholder='Name of Educational Institude' required />
         </div>
         <div className='col-sm-6 col-12'>
            <select className="form-select" name='fieldofstudy' style={{padding: "5px 10px",color:"rgb(58 53 65 / 41%)"}} id="fieldofstudy" required>
               <option value="">
               Major/Field Of Study
               </option>
               <option value="+235">+235</option>
               <option value="+62">+62</option>
               <option value="+115">+115</option>
            </select>
         </div>
         <div className='col-sm-6 col-12'>
            <input type="text" className='form-control' name='passingyear' id='passingyear' placeholder='Year Of Passing' required />
         </div>
         <div className='col-sm-6 col-12'>
            <input type="text" className='form-control' placeholder='Percentage' name='percentage' id='percentage' required />
         </div>
         <div className='col-sm-6 col-12'>
            <input type="text" className='form-control' placeholder='Other' name='other' id='other' required />
         </div>
      </form>
    </Fragment>
  )
}

export default memo(Educationdetails);