import {Fragment,useCallback,useState} from 'react';
import SignUpForm from './form/Form';

function Card() {
  // signup's form state
  const [formState,setFormState] = useState<{fullName:string|undefined;email:string|undefined;bussiNess:string|undefined;office:string|undefined,}>({
    fullName:"",
    email:"",
    bussiNess:"",
    office:"",
  });

  // form change
  const handleChanger = useCallback((event:any):void => setFormState({...formState,[event.target.name]:event.target.value}),[formState]);

  // the function is calling when user click on button
  const formSubmitHandle = useCallback(():void => {
    const forms:any = document.querySelectorAll('.needs-validation');
    const checkInput:any = document.querySelector(".form-check-input");
    // form validation
    Array.from(forms).forEach((form:any) => {
      if(!form.checkValidity()){
        form.classList.add('was-validated');
      }else{
        form.classList.remove('was-validated');
        setFormState({ fullName:"", email:"", bussiNess:"", office:""});
        checkInput.checked = false;
      }
    })
    // console.log(true);
  },[]);

  return (
    <Fragment>
      <div className='p-4' style={{width:"400px",background:"#fff",borderRadius:"5px",borderWidth:"2px",border:"solid",borderColor:"#fff",boxShadow:"0px 0px 3px #DCDCDC"}}>
        <div className='d-flex flex-column align-items-start justify-content-center'>
          <div className='my-1 mx-auto'>
            <h4 className='text-uppercase' style={{color:"#4C4E64",fontWeight:"bold"}}>immiflow</h4>
          </div>
          <div className='mt-3'> 
            <h6 style={{color:"#4C4E64"}}><span className='text-capitalize'>adventure</span><span> starts here</span></h6>
            <p style={{fontSize:"10px", fontWeight:"500",color:"#4C4E64"}}><span className='text-capitalize'>make</span><span> your app management easy and fun! </span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
            <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
            </svg></span>
            </p>
          </div>
          <div className='my-2 w-100'>
            <SignUpForm formState={formState} formSubmitHandle={formSubmitHandle} handleChanger = {handleChanger} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Card;