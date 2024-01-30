import {Fragment,memo} from 'react'

function Documentsform() {
  return (
    <Fragment>
      <div className='mt-3'>
         <p className='' style={{fontWeight:"700",fontSize:"12px",color:"rgb(76 78 100 / 87%)"}}>All documents</p>
         <div className="px-3">
         <form action="" className='row g-4 needs-validation' noValidate>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='password' id="flexRadioDefault1" style={{borderRadius:"0px"}} required />
               <label htmlFor="flexRadioDefault1" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>passport</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='visaapplication' id="flexRadioDefault2" style={{borderRadius:"0px"}} required />
               <label htmlFor="flexRadioDefault2" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>visa application</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='passportsizephoto' id="flexRadioDefault3" style={{borderRadius:"0px"}} required />
               <label htmlFor="flexRadioDefault3" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>passport size photo</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='financialmeans' id="flexRadioDefault4" style={{borderRadius:"0px"}} />
               <label htmlFor="flexRadioDefault4" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>financial means</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='travelitinerary' id="flexRadioDefault5" style={{borderRadius:"0px"}} />
               <label htmlFor="flexRadioDefault5" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>travel itinerary</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='hotelreservation' id="flexRadioDefault6" style={{borderRadius:"0px"}} />
               <label htmlFor="flexRadioDefault6" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>hotel reservation</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='travelinsurance' id="flexRadioDefault7" style={{borderRadius:"0px"}} required />
               <label htmlFor="flexRadioDefault7" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}  >travel insurance</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='others' id="flexRadioDefault8" style={{borderRadius:"0px"}} />
               <label htmlFor="flexRadioDefault8" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>others</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='identityproof' id="flexRadioDefault9" style={{borderRadius:"0px"}} required/>
               <label htmlFor="flexRadioDefault9" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}} >identity proof</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='financialsupport' id="flexRadioDefault10" style={{borderRadius:"0px"}} />
               <label htmlFor="flexRadioDefault10" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>financial support</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='medicalexamination' id="flexRadioDefault11" style={{borderRadius:"0px"}} required />
               <label htmlFor="flexRadioDefault11" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>medical examination</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='policecertificate' id="flexRadioDefault12" style={{borderRadius:"0px"}} required />
               <label htmlFor="flexRadioDefault12" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>police certificate</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='languagetest' id="flexRadioDefault14" style={{borderRadius:"0px"}} required />
               <label htmlFor="flexRadioDefault14" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>language test</label>
            </div>
            <div className='col-sm-3 col-4 d-flex align-items-center justify-content-start'>
               <input type="checkbox" className='form-check-input mt-0' name='additionaldocument' id="flexRadioDefault15" style={{borderRadius:"0px"}} />
               <label htmlFor="flexRadioDefault15" className='form-check-label ms-2 text-capitalize' style={{fontSize:"12px",fontWeight:"500",color:"rgb(76 78 100 / 87%)"}}>additional document</label>
            </div>
         </form>
         </div>
      </div>
    </Fragment>
  )
}

export default memo(Documentsform);