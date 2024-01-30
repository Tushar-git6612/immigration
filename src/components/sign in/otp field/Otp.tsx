import {Fragment,memo} from 'react';
import Btn from '../../button/Btn';

function Otp({otpState, handleChanger,submitHandle} : {otpState:string|undefined; handleChanger:(event:any)=>void; submitHandle: ()=> void}) {
  return (
    <Fragment>
         <div className='col-12'>
            <input type="text" className='form-control' id='validationCustom04' name='otp' value={otpState} onChange={handleChanger} placeholder='Enter OTP' required/>
         </div>
         <div className='col-12'>
            <Btn content='login' paddingY = ""  paddingX = "" width='100' clickfunc={submitHandle} />
         </div>
    </Fragment>
  )
}

export default memo(Otp);