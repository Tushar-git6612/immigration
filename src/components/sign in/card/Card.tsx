import{ memo,Fragment, useState, useCallback } from 'react'
import NumberField from '../phone field/NumberField';
import Otp from '../otp field/Otp';

function Card() {
  const [ mobileNumberCheck, setMobileNumberCheck ] = useState<boolean>(false);
  const [mobileState,setMobileState] = useState("");
  const [mobileCode,setMobileCode] = useState("+91");
  const [otpState,setOtpState] = useState("");
  // the form state changer function
  const phoneHandleChanger = useCallback<(event:any) => void >((event:any) => {
    event?.target?.name === "phoneNumber" ? setMobileState(event.target.value) : event?.target?.name === "phoneNumberCode" ? setMobileCode(event?.target?.value) : setOtpState(event?.target?.value);
  },[]);
  // the function is calling when user click on next button to generate otp
  const mobileSubmit = useCallback(()=>{
    const mobileInput:any = document.querySelector(".phoneInput");
    if(!mobileInput?.value){mobileInput?.nextSibling.classList.remove("invalid-feedback")};
    if (mobileState?.length == 10) setMobileNumberCheck(true);
    // eslint-disable-next-line
  },[mobileState]);
  // the function is calling when user click on next button for login
  const otpSubmit = useCallback(() =>{
    const forms:any = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach((form:any) => {
      if(!form.checkValidity()){
        form.classList.add('was-validated');
    }  else{
        form.classList.remove('was-validated');
        if(otpState){setOtpState("")}
      }
    })
  },[otpState]);

  return (
    <Fragment>
      <div className='p-4' style={{width:"400px",background:"#fff",borderRadius:"5px",borderWidth:"2px",border:"solid",borderColor:"#fff",boxShadow:"0px 0px 3px #DCDCDC",}}>
        <div className='d-flex flex-column align-items-start justify-content-center'>
          <div className='my-1 mx-auto'>
            <h4 className='text-uppercase' style={{color:"#4C4E64",fontWeight:"bold"}}>immiflow</h4>
          </div>
          <div className='my-1'>
            <h5 style={{color:"#4C4E64"}}><span className='text-capitalize'>welcome</span> to <span className='text-uppercase'>immiflow!</span> <i className="fa-solid fa-hands-clapping fa-lg" style={{color:"#ffde00"}}></i></h5>
            <p><span style={{fontSize:"12px",color:"#4C4E64"}}>Please sign-in to your account</span></p>
          </div>
          <div className="my-1 w-100">
            <form action="" className='row g-3 needs-validation novalidate' method='POST'>
             {mobileNumberCheck ? <Otp otpState = {otpState} submitHandle = {otpSubmit} handleChanger = {phoneHandleChanger} /> :  <NumberField handleChanger = {phoneHandleChanger} handleSubmit = {mobileSubmit} mobileState = {mobileState} mobileCode = {mobileCode} />} 
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default memo(Card);