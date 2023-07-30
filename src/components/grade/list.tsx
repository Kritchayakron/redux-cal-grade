import React , {useState} from 'react';
import Form from 'react-bootstrap/Form';
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  updateGrade,
  addGrade,
  tmpData,
} from "./gradeSlice"

const CreateList = (props) =>{
    const tmpState = useAppSelector(tmpData)
    //console.log(count);
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)
    const changeData = (type) => (e) => {
        const foundItem = tmpState.data.find(item=> item.id == props.id);
        console.log( tmpState.data,props.id);
        const data = { 
            id: props.id, 
            credit: type == 'credit' ? e.target.value : 0,
            value: type == 'credit' ? 0 : e.target.value,
        }
        if(!foundItem){
           dispatch(addGrade(data))
        } else {
           
            let newData = tmpState.data.map(item =>({
                ...item,
                credit: item.id == foundItem.id ? (type == 'credit' ? e.target.value : item.credit) : item.credit,
                value: item.id == foundItem.id ? (type == 'credit' ? item.value : e.target.value) : item.value,
            }));
            dispatch(updateGrade(newData))           
        }
    }
    return (
        <tr>
            <td>{props.id}</td>
            <td><Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm"/></td>
            <td><Form.Select aria-label="Grade" className='select-credit'
            onChange={changeData('credit')}>
                <option>-- หน่วยกิต--</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
                </Form.Select>
            </td>

            <td><Form.Select aria-label="Grade" className='select-grade' 
            onChange={changeData('grade')}>
                <option>-- เกรด--</option>
                <option value="4">A</option>
                <option value="3.5">B+</option>
                <option value="3">B</option>
                <option value="2.5">C+</option>
                <option value="2">C</option>
                <option value="1.5">D+</option>
                <option value="1">D</option>
                <option value="0">F</option>
                </Form.Select>
            </td>
   
          </tr>
    );
}
export default CreateList;