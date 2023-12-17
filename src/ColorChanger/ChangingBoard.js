import './style.css'

const ChangingBoard = ({color, textColor})=>{
    return(
        <>
            <div className="changingboard" style={{background:color}}>
                
                <h3 style={{color:textColor}}>
                    {
                       color ? color : "Empty Value"
                    }
                </h3>
            </div>
        </>
    )
}

export default ChangingBoard;