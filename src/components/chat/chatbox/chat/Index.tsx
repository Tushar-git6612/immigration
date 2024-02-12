import {Fragment,memo} from 'react'

function Index() {
  return (
    <Fragment>
      <div className="row">
                              <div className="col-12 d-flex justify-content-end align-items-center">
                                 <div className='d-flex align-items-center'>
                                    <div className='me-2 d-flex flex-column align-items-end' style={{color:"#FFFF"}}>
                                       <span className='px-2 py-2 mb-0' style={{backgroundColor:"#000", fontSize:"10px",borderRadius:"6px"}}>how can we help? we're here for you</span>
                                       <div className='ms-auto '>
                                          <span className='me-1'>
                                             <svg xmlns="http://www.w3.org/2000/svg" style={{color:"#72E128"}} width="12" height="12" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
                                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
                                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
                                             </svg>
                                          </span>
                                          <span className='text-dark' style={{fontSize:"8px",}}>1:15pm</span>
                                       </div>
                                    </div>
                                    <div className="align-self-start d-flex align-items-center" style={{ width: "35px", height: "35px", borderRadius: "50%",cursor:"pointer" }}>
                                       <img src={ process.env.PUBLIC_URL +"/images/u3.jpg"} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", textAlign: "center", objectPosition: "center",}} alt=""/>
                                    </div>  
                                 </div>
                              </div>
                              <div className="col-12 mt-3 d-flex justify-content-start align-items-center">
                                 <div className="align-self-start d-flex align-items-center" style={{ width: "35px", height: "35px", borderRadius: "50%",cursor:"pointer" }}>
                                    <img src={ process.env.PUBLIC_URL +"/images/u2.jpg"} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", textAlign: "center", objectPosition: "center",}} alt=""/>
                                 </div>
                                 <div className='d-flex flex-column ms-2 align-items-start' style={{color:"rgb(76 78 100 / 87%)"}}>
                                    <span className='px-2 py-2 mb-2' style={{backgroundColor:"#FFF",color:"#000", fontSize:"10px",borderRadius:"6px"}}>hey john i am looking for the best admi template.could you please help to find it out?</span>
                                    <span className='px-2 py-2 mb-0' style={{backgroundColor:"#FFF",color:"#000", fontSize:"10px",borderRadius:"6px"}}>it should be MUI v5 compatible</span>
                                    <span style={{fontSize:"8px"}} className='mt-1'>1:15 pm</span>
                                 </div>
                              </div>
                              <div className="col-12 d-flex justify-content-end align-items-center mt-3">
                                 <div className='d-flex align-items-center'>
                                    <div className='me-2 d-flex flex-column align-items-end'>
                                       <span className='px-2 py-2 mb-0' style={{backgroundColor:"#000",color:"#FFFF", fontSize:"10px",borderRadius:"6px"}}>absolutly</span>
                                       <span className='px-2 py-2 mb-0 mt-2' style={{backgroundColor:"#000",color:"#FFFF", fontSize:"10px",borderRadius:"6px",}}>the admin template is build by muii</span>
                                       <div className='ms-auto'>
                                          <span className='me-1'>
                                             <svg xmlns="http://www.w3.org/2000/svg" style={{color:"#72E128"}} width="12" height="12" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
                                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
                                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
                                             </svg>
                                          </span>
                                          <span style={{fontSize:"8px"}}>1:16pm</span>
                                       </div>
                                    </div>
                                    <div className="d-flex align-self-start align-items-center" style={{ width: "35px", height: "35px", borderRadius: "50%",cursor:"pointer" }}>
                                       <img src={ process.env.PUBLIC_URL +"/images/u3.jpg"} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", textAlign: "center", objectPosition: "center",}} alt=""/>
                                    </div>  
                                 </div>
                              </div>
                              <div className="col-12 mt-3 d-flex justify-content-start align-items-center">
                                 <div className="align-self-start d-flex align-items-center" style={{ width: "35px", height: "35px", borderRadius: "50%",cursor:"pointer" }}>
                                    <img src={ process.env.PUBLIC_URL +"/images/u2.jpg"} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", textAlign: "center", objectPosition: "center",}} alt=""/>
                                 </div>
                                 <div className='d-flex flex-column ms-2 align-items-start' style={{color:"rgb(76 78 100 / 87%)"}}>
                                    <span className='px-2 py-2 mb-2' style={{backgroundColor:"#FFF",color:"#000", fontSize:"10px",borderRadius:"6px"}}>looks clean and fresh UI</span>
                                    <span className='px-2 py-2 mb-2' style={{backgroundColor:"#FFF",color:"#000", fontSize:"10px",borderRadius:"6px"}}>its perfect for my next project</span>
                                    <span className='px-2 py-2 mb-0' style={{backgroundColor:"#FFF",color:"#000", fontSize:"10px",borderRadius:"6px"}}>how can i puchase it</span>
                                    <span style={{fontSize:"8px"}} className='mt-1'>1:17 pm</span>
                                 </div>
                              </div>
      </div>
    </Fragment>
  )
}

export default memo(Index);