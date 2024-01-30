import {Fragment} from 'react';
import Card from "./card/Card";

function Index() {
  return (
    <Fragment>
      <main className="mainBackground">
         <section className='h-100'>
            <div  className="d-flex justify-content-center align-items-center h-100">
               <Card/>
            </div>
         </section>
      </main>
    </Fragment>
  )
}

export default Index;