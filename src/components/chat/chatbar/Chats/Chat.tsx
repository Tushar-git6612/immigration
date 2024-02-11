import {Fragment,memo} from 'react'

function Chat() {
  return (
    <Fragment>
         <div className="d-flex flex-column">
                              <h5 className='text-capitalize'>chats</h5>
                              <div className='w-100 px-2 py-1 d-flex align-items-center mt-2' style={{color:"#FFFF",fontWeight:"500",fontSize:"16px",backgroundColor:"black",borderRadius:"8px"}}>
                                 <div className="d-flex align-items-center me-2" style={{ width: "35px", height: "35px", borderRadius: "50%",cursor:"pointer" }}>
                                    <img src={ process.env.PUBLIC_URL +"/images/u3.jpg"} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", textAlign: "center", objectPosition: "center",}} alt=""/>
                                 </div>
                                 <div className='d-flex flex-column'>
                                    <p className='text-capitalize mb-0'>felecia rower</p>
                                    <p className='mb-0' style={{fontSize:"14px",color:"#FFFFF",fontWeight:"400"}}>UI/UX DESIGNER</p>
                                 </div>
                                 <span className='ms-auto' style={{fontSize:"12px"}}>April 8</span>
                              </div>
                              {[1,2].map((index)=>{
                                 return (
                                    <div key={index} className='w-100 px-2 py-1 d-flex align-items-center mt-2' style={{color:"rgb(76 78 100 / 60%)",fontWeight:"500",fontSize:"16px"}}>
                                          <div className="d-flex align-items-center me-2" style={{ width: "35px", height: "35px", borderRadius: "50%",cursor:"pointer" }}>
                                             <img src={ process.env.PUBLIC_URL +"/images/u3.jpg"} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", textAlign: "center", objectPosition: "center",}} alt=""/>
                                          </div>
                                          <div className='d-flex flex-column'>
                                             <p className='text-capitalize mb-0'>felecia rower</p>
                                             <p className='mb-0' style={{fontSize:"14px",color:"rgb(76 78 100 / 38%)",fontWeight:"400"}}>UI/UX DESIGNER</p>
                                          </div>
                                          <span className='ms-auto' style={{fontSize:"12px"}}>April 8</span>
                                    </div>
                                 )
                              })}
                           </div>
    </Fragment>
  )
}

export default memo(Chat);