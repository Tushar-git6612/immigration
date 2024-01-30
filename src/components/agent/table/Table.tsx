import { Fragment, memo } from "react";

function Table() {
  return (
    <Fragment>
      <div className="table-responsive">
         <table className="table">
            <thead className="thead">
               <tr >
                  <th>#</th>
                  <th className="text-capitalize">
                  agent name
                  </th>
                  <th className="text-capitalize" ><span>dob</span></th>
                  <th className="text-capitalize" >gender</th>
                  <th className="text-capitalize" >contact</th>
                  <th className="text-capitalize" >application count</th>
                  <th className="text-capitalize" >action</th>
               </tr>
            </thead>
         <tbody>
            {[1,2,3,4,5,6].map((item:any,index:number) =>{
               return (
                  <tr className="" key={index}>
                     <td className="align-middle" style={{color:"#666CFF"}}>
                        <span className="me-3"><input type="checkbox" className="form-check-input" /></span>
                        <span>#6612</span>
                     </td>
                     <td className="px-2">
                     <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-sm" style={{color:"rgb(76 78 100 / 87%)",fontSize:"14px",fontWeight:"500"}}>tushar</h6>
                        <p className="text-xs mb-0" style={{color:"rgb(76 78 100 / 60%)"}}>tusharreactjs@gmail.com</p>
                     </div>
                     </td>
                     <td className="align-middle" style={{color:"rgb(76 78 100 / 60%)"}}>
                        21-08-2001
                     </td>
                     <td className="align-middle text-sm" style={{color:"rgb(76 78 100 / 60%)"}}>male</td>
                     <td className="align-middle" style={{color:"rgb(76 78 100 / 60%)"}}>
                        999999999
                     </td>
                     <td className="align-middle text-sm" style={{color:"rgb(76 78 100 / 60%)"}}>paid</td>
                     <td className="align-middle text-sm" style={{color:"rgb(76 78 100 / 60%)"}}>
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                           </svg>
                        </span>
                        <span className="mx-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                           </svg>
                        </span>
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                           </svg>
                        </span>
                     </td>
                  </tr>
               )
            })}
         </tbody>
         </table>
         <div className="d-flex justify-content-end align-items-center px-4" style={{color:"rgb(76 78 100 / 60%)"}}>
            <span className="px-2" style={{fontSize:"12px"}}>Rows per page: 10 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
               <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg></span><span className="px-3">1-5 of 3</span>
            <span className="ps-2 mb-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
            </span>
            <span className="ps-2 mb-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
            </span>
         </div>
      </div>
    </Fragment>
  );
}

export default memo(Table);
