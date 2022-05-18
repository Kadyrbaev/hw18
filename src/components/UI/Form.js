import { useCallback, useState } from 'react'
import Rend from '../Rend'
import classes from './Form.module.css'

function Form(){

    const [first, setFirst] = useState(false)
    const [last, setLast] = useState(false)

    const showPage = useCallback(()=>{
        if(last){
        setFirst((prev)=>!prev)
        }
    },[last])
    function openBut(){
        setLast(true)
    }
    
    return(
        <div className={!first ? classes.wrap : ""}>
             {!first && <div>
                <p>Баракчага отуу учун тесттин жообун туура табуу шарт !</p>
                <p className={classes.ppp}>
                    2*(3+8)-3 * 2 = ??
                </p>
                <div>
                    <button >13</button>
                    <button>15</button>
                    <button className={first ? classes.okay : ""} onClick={openBut}>16</button>
                    <button>17</button>
                </div>
            </div>}
            <button onClick={showPage} className={!last ? "" : classes.but}>{last ? "Open" : "Close"}</button>
            {first && <Rend/>}
            <div></div>
        </div>
    )
}
export default Form