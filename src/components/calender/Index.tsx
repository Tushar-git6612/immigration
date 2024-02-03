import {Fragment} from 'react';
import Container from  "./container/Index";

function Index() {
  return (
    <>
      <Fragment>
      <main className='mainTag'>
         <div className="leftMargin px-3 transition">
            <section style={{marginTop:"60px"}}>
               <Container />
            </section>
         </div>
      </main>
      </Fragment>
    </>
  )
}

export default (Index);