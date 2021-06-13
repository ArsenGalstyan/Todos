import {React , useState} from 'react'

let _id = 0;

export default function Input() {
    const [inpvalue, setinpvalue] = useState(``)
    const [toDoData, setToDoData] = useState([]);

    function clear(){
        setToDoData(toDoData.filter(el=> el.done === false))
    }

    function chengeDone(el){
       setToDoData(toDoData.map(item=>{
           if(item.id === el.id) return {...item , done: !item.done}
           return item
       }))
    }

    function addItem(e){
        setToDoData([...toDoData, {value: inpvalue, done: false, id: ++_id}]) 
        setinpvalue(``)
        console.log(toDoData);

    }
    return (
        <div className="main">
            <div className="mainInputDiv"> 
            <input type="text" onInput={e=>setinpvalue(e.target.value)} value={inpvalue} className="mainInput"/>
            <button type="submit" onClick={addItem}>add</button>
            </div>
            <div className="mnacac">
            {
                toDoData.map((el,i)=>{
                    return  <div className="divo" key={i}>
                                 <li className={`${el.done && `checked`}`}>{el.value}</li>
                                <input checked={el.done} type="checkbox" onChange={()=>chengeDone(el)}/>
                            </div>
                  
                })
            }
           
            </div>
            <button className="clearButton" onClick={clear}>clear</button>
        </div>
    )
}
