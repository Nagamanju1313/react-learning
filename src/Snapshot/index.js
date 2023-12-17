import './snapshot.css';
import snapshotData from '../JsonData/snapshot.json';
import { useEffect, useState } from 'react';

const SnapShot = () => {
    const [items, setItems] = useState([]);
    const [category, setCategory]= useState([]);
    const [selectedCat, setSelectedCat] = useState("birds");

    useEffect(() => {
        setItems(snapshotData.data);
        let cats = []
        for(let i = 0; i<snapshotData.data.length; i++){
            if(snapshotData.data[i].category){
                cats.push(snapshotData.data[i].category)
            }
        }

        let catArr = []
        for(let i = 0; i<cats.length; i++){
            if(cats[i] == cats[i+1]){
                cats[i] = ""
            }
            if(cats[i] !== ""){
                catArr.push(cats[i])
            }
        }
        setCategory(catArr)
    }, []);

    const filterItems=(e)=>{
        setSelectedCat(e.target.value)
    }

    const handleChange = (e)=>{
        if(e.target.value !== ""){
            let value = e.target.value.toLowerCase()
            setSelectedCat(value)
        }else{
            setSelectedCat("birds")
        }
    }

    return (
        <div className='snapshotwrapper'>
            <input type="search" placeholder="Search" onChange={(e)=>{handleChange(e)}}/>
            <ul>
                {
                    category &&
                    category.map((catItem) => {
                        return (
                            <li>
                                <button onClick={(e)=>{filterItems(e)}} value={catItem} className={catItem == selectedCat? "active":""}>{catItem}</button>
                            </li>
                        )
                    })
                }
            </ul>
            
            <h3>{selectedCat} Pictures</h3>
            <div className='flexBox'>
                {
                    items &&
                    items.filter((items)=>{
                        return items.category == selectedCat
                    }).map((item)=>{
                        return(
                            <div className='imgCol'>
                                <img src={item.path}/>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}
export default SnapShot;