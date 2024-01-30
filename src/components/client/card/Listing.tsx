import { Fragment, memo } from "react";

function Listing({content}:{content:string|undefined}) {
  return (
    <Fragment>
      <div className="d-flex flex-column boxCard px-2 py-3">
        <div className="d-flex align-items-center justify-content-between px-2 pb-2">
          <span className="text-capitalize" style={{ fontSize: "18px", color: "rgb(76 78 100 / 87%)", fontWeight: "500",}}>
            {content}
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </span>
        </div>
        <div className="d-flex flex-column">
          {[1,2,3,4,5,6].map((item,index)=>{
            return (
              <div className="d-flex align-items-center my-2" key={index}>
                <span style={{ width: "38px", height: "38px" }}>
                  <img style={{ height: "38px", width: "38px", borderRadius: "10px", objectFit: "cover", objectPosition: "50% 50%",}} src={process.env.PUBLIC_URL + "/images/u3.jpg"} alt=""/>
                </span>
                <div className="d-flex flex-column ms-2">
                  <span style={{ fontSize: "15px", color: "rgb(76 78 100 / 87%)", fontWeight: "500",}}>
                    ABC
                  </span>
                  <span className="d-flex align-items-center " style={{ color: "rgb(76 78 100 / 60%)", fontSize: "10px" }}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                      </svg>
                    </span>
                    <span className="ms-2">21 jul | 8:20 | 10:30</span>
                  </span>
                </div>
                <span className="ms-auto me-2 px-2 text-capitalize" style={{ fontSize: "12px", backgroundColor: "rgb(201 201 255)", color: "#666CFF", borderRadius: "8px", fontWeight: "500",}}>
                  study
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default memo(Listing);
