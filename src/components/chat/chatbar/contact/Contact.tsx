import {Fragment,memo} from 'react';

function Contact() {
  return (
    <Fragment>
      <div className="d-flex flex-column">
                              <h5 className='text-capitalize'>contacts</h5>
                              {[1,2,3].map((index) => {
                                    return (
                                       <div key={index} className="w-100 px-2 py-1 d-flex align-items-center mt-2">
                                       <div className="d-flex align-items-center me-2" style={{ width: "35px", height: "35px", borderRadius: "50%",cursor:"pointer" }}>
                                          <img src={ process.env.PUBLIC_URL +"/images/u3.jpg"} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", textAlign: "center", objectPosition: "center",}} alt=""/>
                                       </div>
                                       <div className='d-flex flex-column'>
                                          <p className='text-capitalize mb-0'style={{color:"rgb(76 78 100 / 60%)"}}>gerardo bogisich</p>
                                          <p className='mb-0 text-capitalize' style={{fontSize:"14px",color:"rgb(76 78 100 / 38%)",fontWeight:"400"}}>forward communications coordinator</p>
                                       </div>
                                    </div>
                                    )
                              })}
                           </div>
    </Fragment>
  )
}

export default memo(Contact);