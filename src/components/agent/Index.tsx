import {Fragment,memo,useState,useCallback} from 'react'
import Card from './card/Card';
import Table from "./table/Index";

function Index() {
   const [newAgent,setNewAgent] = useState(false);
   const newAgentChanger = useCallback(() => {
      setNewAgent(true);
   },[]);

  return (
    <Fragment>
         <main className='mainTag'>
            <div className="leftMargin px-3 transition">
               <section style={{marginTop:"60px"}}>
                  {!newAgent ? <Table func={newAgentChanger} /> : <Card />}
                  {/* <Card /> */}
                  {/* <Table /> */}
               </section>
            </div>
         </main>
    </Fragment>
  )
}

export default memo(Index);