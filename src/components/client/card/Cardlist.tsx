import {Fragment,memo} from 'react';
import Listing from './Listing';
import Head from "../header/Header";

function Cardlist({cardStateChanger}:{cardStateChanger:()=>void}) {
  return (
    <Fragment>
      <Head callFunction = {cardStateChanger} />
      <div className="row">
         {["to do","in progress","peer review","applied","granted","rejected"].map((content:string | undefined,index:number) => {
            return (
            <div className="col-lg-4 col-sm-6 col-12 mb-5 px-2" key={index}>
               <Listing content = {content} />    
            </div>
            )
         })}
      </div>
    </Fragment>
  )
}

export default memo(Cardlist);