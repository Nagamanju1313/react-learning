import { useState } from "react";
import './calculator.css'
const Calculator = ()=>{
    const [value, setValue] = useState("")

    const handleChange = (e)=>{
        setValue(value+e)
    }

    const clearValues = ()=>{
        setValue("")
    }

    const sumOfValue = ()=>{
        setValue(eval(value))
    }

    const textChange = (e) =>{
        setValue(e)
    }
    return(
        <div className="calculatorWrapper">
            <h3>Calculator</h3>
            <table id="calcu"> 
                <tr> 
                    <td colspan="3"> 
                        <input type="text" id="result" value={value} onChange={(e)=>textChange(e.target.value)}/> 
                    </td> 
                    <td><input type="button" value="c" onClick={clearValues}/></td> 
                </tr> 
        
                <tr> 
                    <td><input type="button" value="1" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                    <td><input type="button" value="2" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                    <td><input type="button" value="3" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                    <td><input type="button" value="/" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                </tr> 
                <tr> 
                    <td><input type="button" value="4" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                    <td><input type="button" value="5" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                    <td><input type="button" value="6" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                    <td><input type="button" value="*" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                </tr> 
                <tr> 
                    <td><input type="button" value="7" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                    <td><input type="button" value="8" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                    <td><input type="button" value="9" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                    <td><input type="button" value="-" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                </tr> 
                <tr> 
                    <td><input type="button" value="0" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                    <td><input type="button" value="." onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                    <td><input type="button" value="=" onClick={sumOfValue}/></td> 
                    <td><input type="button" value="+" onClick={(e)=>{handleChange(e.target.value)}}/></td> 
                </tr> 
            </table> 
        </div>
    )
}
export default Calculator;