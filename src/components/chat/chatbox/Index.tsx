import {Fragment,memo} from 'react';
import Userchat from "./chat/Index";

function Index() {
  return (
    <Fragment>
         <div className="d-flex flex-column py-1" style={{backgroundColor:"transparent"}}>
                        <div className="col-12 px-2 py-2 d-flex align-items-center mb-1" style={{borderBottom:"1px solid rgba(76, 78, 100, 0.12)"}}>
                           <div className="d-flex align-items-center me-2" style={{ width: "35px", height: "35px", borderRadius: "50%",cursor:"pointer" }}>
                              <img src={ process.env.PUBLIC_URL +"/images/u2.jpg"} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", textAlign: "center", objectPosition: "center",}} alt=""/>
                           </div>
                           <div className='d-flex flex-column'>
                              <p className='text-capitalize mb-0'style={{color:"rgb(76 78 100 / 60%)",fontSize:"12px",fontWeight:"500"}}>felecia rower</p>
                              <p className='mb-0 text-capitalize' style={{fontSize:"10px",color:"rgb(76 78 100 / 38%)",fontWeight:"400"}}>frontend developer</p>
                           </div>
                           <div className='ms-auto d-flex align-items-center' style={{color:"rgb(76 78 100 / 60%)"}}>
                              <span className='mx-1'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                 </svg>
                              </span>
                              <span className='mx-1'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
                                 </svg>
                              </span>
                              <span className='mx-1'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                 </svg>
                              </span>
                              <span className='mx-1'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg>
                              </span>
                           </div>
                        </div>
                        <div className="col-12 px-2 py-2">
                           <Userchat />
                        </div>
            <div className="col-12"></div>
         </div>
    </Fragment>
  )
}

export default memo(Index);