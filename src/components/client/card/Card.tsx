import { Fragment, memo, useState, useCallback } from "react";
import Visaform from "../form/Visaform";
import NextBtn from "../../button/Btn";
import PrevBtn from "../../button/Previousbtn";
import Personalform from "../form/Personalform";
import Educationdetails from "../form/Educationdetails";
import Rejectionform from "../form/Rejection";
import Documentform from "../form/Documentsform";
import Notes from '../form/Notes';
import Forms from "../form/Forms";

function Card() {
  const [formIndex, setFormIndex] = useState<number>(1);
  const IncFormIndex = useCallback(() => {
    // const forms:any = document.querySelectorAll('.needs-validation');
    // // form validation
    // Array.from(forms).forEach((form:any) => {
    //   if(!form.checkValidity()){
    //     form.classList.add('was-validated');
    //   }else{
    //     form.classList.remove('was-validated');
    //     // if (formIndex < 4) setFormIndex(formIndex + 1);
    //   }
    // })
    if (formIndex < 7) setFormIndex(formIndex + 1);
  }, [formIndex]);

  const decFormIndex = useCallback(() => {
    if (formIndex >= 2) setFormIndex(formIndex - 1);
  }, [formIndex]);

  return (
    <Fragment>
      <div className="px-2">
        <div
          className="row boxCard">
          <div className="col-sm-3 col-12 py-3">
            <div className="d-flex flex-column">
              <div className="d-flex my-1 py-1 align-items-center">
                <div className="d-flex justify-content-center align-items-center"> 
                  <input type="checkbox" checked ={formIndex <= 1 ? false : true} className=" mt-0 form-check-input check" style={{ borderRadius: "50%", color: "#000000",width:"16px",height:"16px", border:`${formIndex === 1 ? '2px solid #0d6efd' : ""}` }} />
                </div>
                <h3 className="ms-2 mb-0" style={{ color: "rgb(76 78 100 / 87%)" }} >
                  <span className="me-1">0</span>
                  <span>1</span>
                </h3>
                <div className="d-flex ms-2 flex-column align-items-start">
                  <span className="text-capitalize" style={{ color: "rgb(76 78 100 / 87%)", fontWeight: "500" }}>
                    visa type
                  </span>
                  <span style={{ fontSize: "10px", color: "rgb(76 78 100 / 60%)", fontWeight: "500",}} className="text-capitalize">
                    type of visa
                  </span>
                </div>
              </div>
              <div className="d-flex my-1 py-1 align-items-center">
                <div className="d-flex justify-content-center align-items-center" >
                  <input type="checkbox"  checked ={formIndex <= 2 ? false : true} className=" mt-0 form-check-input check" style={{ borderRadius: "50%", color: "#000000",width:"16px",height:"16px", border:`${formIndex === 2 ? '2px solid #0d6efd' : ""}` }}/>
                </div>
                <h3 className="ms-2 mb-0" style={{ color: "rgb(76 78 100 / 87%)" }}>
                  <span className="me-1">0</span>
                  <span>2</span>
                </h3>
                <div className="d-flex ms-2 flex-column align-items-start">
                  <span className="text-capitalize" style={{ color: "rgb(76 78 100 / 87%)", fontWeight: "500" }}>
                    personal details
                  </span>
                  <span style={{ fontSize: "10px", color: "rgb(76 78 100 / 60%)", fontWeight: "500",}} className="text-capitalize">
                    your name/email
                  </span>
                </div>
              </div>
              <div className="d-flex my-1 py-1 align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <input type="checkbox" checked ={formIndex <= 3 ? false : true} className=" mt-0 form-check-input check" style={{ borderRadius: "50%", color: "#000000",width:"16px",height:"16px", border:`${formIndex === 3 ? '2px solid #0d6efd' : ""}` }}/>
                </div>
                <h3 className="ms-2 mb-0" style={{ color: "rgb(76 78 100 / 87%)" }}>
                  <span className="me-1">0</span>
                  <span>3</span>
                </h3>
                <div className="d-flex ms-2 flex-column align-items-start">
                  <span className="text-capitalize" style={{ color: "rgb(76 78 100 / 87%)", fontWeight: "500" }}>
                    education details
                  </span>
                  <span style={{ fontSize: "10px", color: "rgb(76 78 100 / 60%)", fontWeight: "500",}} className="text-capitalize">
                    graduation/P.G
                  </span>
                </div>
              </div>
              <div className="d-flex my-1 py-1 align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <input type="checkbox" checked ={formIndex <= 4 ? false : true} className=" mt-0 form-check-input check" style={{ borderRadius: "50%", color: "#000000",width:"16px",height:"16px", border:`${formIndex === 4 ? '2px solid #0d6efd' : ""}` }}/>
                </div>
                <h3 className="ms-2 mb-0" style={{ color: "rgb(76 78 100 / 87%)" }}>
                  <span className="me-1">0</span>
                  <span>4</span>
                </h3>
                <div className="d-flex ms-2 flex-column align-items-start">
                  <span className="text-capitalize" style={{ color: "rgb(76 78 100 / 87%)", fontWeight: "500" }}>
                    rejection history
                  </span>
                  <span style={{ fontSize: "10px", color: "rgb(76 78 100 / 60%)", fontWeight: "500",}} className="text-capitalize">
                    visa history
                  </span>
                </div>
              </div>
              <div className="d-flex my-1 py-1 align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <input type="checkbox" checked ={formIndex <= 5 ? false : true} className=" mt-0 form-check-input check" style={{ borderRadius: "50%", color: "#000000",width:"16px",height:"16px", border:`${formIndex === 5 ? '2px solid #0d6efd' : ""}` }}/>
                </div>
                <h3 className="ms-2 mb-0" style={{ color: "rgb(76 78 100 / 87%)" }}>
                  <span className="me-1">0</span>
                  <span>5</span>
                </h3>
                <div className="d-flex ms-2 flex-column align-items-start">
                  <span className="text-capitalize" style={{ color: "rgb(76 78 100 / 87%)", fontWeight: "500" }}>
                    documents
                  </span>
                  <span style={{ fontSize: "10px", color: "rgb(76 78 100 / 60%)", fontWeight: "500",}} className="text-capitalize" >
                    all document
                  </span>
                </div>
              </div>
              <div className="d-flex my-1 py-1 align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <input type="checkbox" checked ={formIndex <= 6 ? false : true} className=" mt-0 form-check-input check" style={{ borderRadius: "50%", color: "#000000",width:"16px",height:"16px", border:`${formIndex === 6 ? '2px solid #0d6efd' : ""}` }}/>
                </div>
                <h3 className="ms-2 mb-0" style={{ color: "rgb(76 78 100 / 87%)" }}>
                  <span className="me-1">0</span>
                  <span>6</span>
                </h3>
                <div className="d-flex ms-2 flex-column align-items-start">
                  <span className="text-capitalize" style={{ color: "rgb(76 78 100 / 87%)", fontWeight: "500" }}>
                    forms
                  </span>
                  <span style={{ fontSize: "10px", color: "rgb(76 78 100 / 60%)", fontWeight: "500", }} className="text-capitalize">
                    all forms
                  </span>
                </div>
              </div>
              <div className="d-flex my-1 py-1 align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <input type="checkbox" checked ={formIndex <= 7 ? false : true} className=" mt-0 form-check-input check" style={{ borderRadius: "50%", color: "#000000",width:"16px",height:"16px", border:`${formIndex === 7 ? '2px solid #0d6efd' : ""}` }}/>
                </div>
                <h3 className="ms-2 mb-0" style={{ color: "rgb(76 78 100 / 87%)" }}
                >
                  <span className="me-1">0</span>
                  <span>7</span>
                </h3>
                <div className="d-flex ms-2 flex-column align-items-start">
                  <span className="text-capitalize" style={{ color: "rgb(76 78 100 / 87%)", fontWeight: "500" }}>
                    Notes
                  </span>
                  <span style={{ fontSize: "10px", color: "rgb(76 78 100 / 60%)", fontWeight: "500",}} className="text-capitalize">
                    additional notes
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-12 p-3" style={{ borderLeft: "1px solid rgb(76 78 100 / 12%)" }}>
            {formIndex === 1 ? (
              <Visaform />
            ) : formIndex === 2 ? (
              <Personalform />
            ) : formIndex === 3 ? (
              <Educationdetails />
            ) : formIndex === 4 ? (
               <Rejectionform/>
            ) : formIndex ===5 ? (
               <Documentform/>
            ) : formIndex === 6 ? (
                <Forms />
            ) : formIndex === 7 ? (
                <Notes />
            ) : (
              <Visaform  />
            )}
            { formIndex === 7 ? <div className="w-100 d-flex justify-content-center align-items-center"> <NextBtn content="Submit" width="" paddingY="1" paddingX="3" clickfunc={() => {}} /> </div>
              : 
            <div className="col-12 d-flex justify-content-between align-items-center mt-3">
              { formIndex !== 1 ? <div><PrevBtn clickfunc={decFormIndex} /></div> : <div></div>}
              <div><NextBtn content="Next" width="" paddingY="1" paddingX="3" clickfunc={IncFormIndex} /></div>
            </div>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(Card);


// function Card() {
//   const [formIndex, setFormIndex] = useState<number>(6);
//   const IncFormIndex = useCallback(() => {
//     // const forms:any = document.querySelectorAll('.needs-validation');
//     // // form validation
//     // Array.from(forms).forEach((form:any) => {
//     //   if(!form.checkValidity()){
//     //     form.classList.add('was-validated');
//     //   }else{
//     //     form.classList.remove('was-validated');
//     //     if (formIndex < 6) setFormIndex(formIndex + 1);
//     //   }
//     // })
//     if (formIndex < 7) setFormIndex(formIndex + 1);
//   }, [formIndex]);

//   const decFormIndex = useCallback(() => {
//     if (formIndex >= 1) setFormIndex(formIndex - 1);
//   }, [formIndex]);

//   const renderForm = useCallback(() => {
//     switch (formIndex) {
//       case 1:
//         return <Visaform />;
//       case 2:
//         return <Personalform />;
//       case 3:
//         return <Educationdetails />;
//       case 4:
//         return <Rejectionform />;
//       case 5:
//         return <Documentform />;
//       case 6:
//         return <Forms />;
//       case 7 :
//         return <Notes />
//       default:
//         return <Visaform />;
//     }
//   },[formIndex]);

//   return (
//     <Fragment>
//       <div className="px-2">
//         <div className="row" style={{ backgroundColor: "#FFFFFF", borderRadius: "8px", border: "solid #FFFFFF" }}>
//           <div className="col-sm-3 col-12 py-3">
//             <div className="d-flex flex-column">
//               {[ 1, 2, 3, 4, 5,6,7].map((index) => (
//                 <div key={index} className="d-flex my-1 py-1 align-items-center">
//                   <div className="d-flex justify-content-center align-items-center">
//                     <input
//                       type="checkbox"
//                       className={`mt-0 form-check-input check`}
//                       checked= {(index) < formIndex ? true : false}
//                       style={{ borderRadius: "50%", color: "#000000" }}
//                     />
//                   </div>
//                   <h3 className="ms-2 mb-0" style={{ color: "rgb(76 78 100 / 87%)" }}>
//                     <span className="me-1">0</span>
//                     <span>{index}</span>
//                   </h3>
//                   <div className="d-flex ms-2 flex-column align-items-start">
//                     <span className="text-capitalize" style={{ color: "rgb(76 78 100 / 87%)", fontWeight: "500" }}>
//                       {/* You can replace these labels with your actual labels */}
//                       Notes 
//                     </span>
//                     <span style={{ fontSize: "10px", color: "rgb(76 78 100 / 60%)", fontWeight: "500" }} className="text-capitalize">
//                       {/* You can replace these labels with your actual labels */}
//                       Additional Notes
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="col-sm-9 col-12 p-3" style={{ borderLeft: "1px solid rgb(76 78 100 / 12%)" }}>
//             {renderForm()}
//             {formIndex === 7 ? (
//               <div className="w-100 d-flex justify-content-center align-items-center">
//                 <NextBtn content="Submit" width="" paddingY="1" paddingX="3" clickfunc={() => {}} />
//               </div>
//             ) : (
//               <div className="col-12 d-flex justify-content-between align-items-center mt-3">
//                 <div>
//                   <PrevBtn clickfunc={decFormIndex} />
//                 </div>
//                 <div>
//                   <NextBtn content="Next" width="" paddingY="1" paddingX="3" clickfunc={IncFormIndex} />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// }

// export default memo(Card);
