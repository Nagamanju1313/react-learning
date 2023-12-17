import './style.css'
import ChangingBoard from './ChangingBoard';
import { useState } from 'react';

const ColorInput = ()=>{
    let [color, setColor] = useState("")
    let [textColor, setTextColor] = useState("#000")

    const handleTextColor = ()=>{
        if(textColor == "#000"){
            setTextColor("#fff")
        }else if (textColor == "#fff"){
            setTextColor("#000")
        }
    }

    return(
        <>
            <ChangingBoard
                color={color}
                textColor={textColor}
            />
            <div className="ColorInput">
                <input type='text' placeholder='Enter Color' onChange={(e)=> (setColor(e.target.value))}/>
                <button onClick={handleTextColor}>Toggle Text Color</button>
            </div>
        </>
    )
}

export default ColorInput;