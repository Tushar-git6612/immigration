import { Fragment, memo } from "react";
import Button from "../../button/Btn";
import { Link } from "react-router-dom";

function NumberField({mobileCode,mobileState,handleChanger,handleSubmit}:{mobileCode:string | undefined ; mobileState:string | undefined ;handleChanger:(event:any) => void ; handleSubmit: ()=> void}) {

  return (
    <Fragment>
      <div className="col-3 position-relative mb-2">
        {/* <label htmlFor="validationCustom02" className="form-label d-none"></label> */}
        <select className="form-select" style={{padding: "5px 10px",}} id="" name="phoneNumberCode" value={mobileCode} required onChange={handleChanger}>
          <option value="+91">
            +91
          </option>
          <option value="+235">+235</option>
          <option value="+62">+62</option>
          <option value="+115">+115</option>
        </select>
      </div>
      <div className="col-9">
        <label htmlFor="validationCustom01" className="form-label d-none">
          mobile
        </label>
        <input type="text" className="form-control phoneInput" name="phoneNumber" value={mobileState} onChange={handleChanger} id="validationCustom01" required placeholder="phone number"/>
        <div className={`invalid-feedback`} style={{color:"red",fontSize:"12px"}}>
          Please enter a valid mobile number.
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <Button content="next" width="100" paddingY = ""  paddingX = "" clickfunc = {handleSubmit} />
        <Link to="#" className="mt-4 mx-auto text-capitalize"style={{ textDecoration: "none",color: "black",fontSize: "12px",fontWeight: "500",}}>{" "}help?</Link>
      </div>
    </Fragment>
  );
}

export default memo(NumberField);
