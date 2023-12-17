import { useEffect, useState } from 'react';
import './App.css';
import TableContent from './PlaceHolderApi/TableContent';

const PlaceHolderApi = ()=>{
    const API_URL = 'https://jsonplaceholder.typicode.com/';
    
    const [reqType, setreqType] = useState('users');
    const [data, setData] = useState([]);
    const [acive, setActive] = useState({
        user:"active",
        posts:"",
        comments:""
    });
    
    useEffect(()=>{
        const fetchData = async ()=>{
            let response = await fetch(`${API_URL}${reqType}`);
            if(!response.ok){alert()}
            response = await response.json()
            console.log(response)
            setData(response)
        }
        fetchData()
    },[reqType])

    const handleClick = async (content)=>{
        if(content == 'Users'){
            setreqType('users')
            setActive({user:"active"})
        }

        if(content == 'Posts'){
            setreqType('posts');
            setActive({posts:"active"})
        }

        if(content == 'Comments'){
            setreqType('comments')
            setActive({comments:"active"})
        }
    }

    return(
        <>
            <div className="apiloadmenu">
                <ul>
                    <li><button onClick={(e)=>{handleClick(e.target.textContent)}} className={acive.user}>Users</button></li>
                    <li><button onClick={(e)=>{handleClick(e.target.textContent)}} className={acive.posts}>Posts</button></li>
                    <li><button onClick={(e)=>{handleClick(e.target.textContent)}} className={acive.comments}>Comments</button></li>
                </ul>
            </div>
            <div className="apiloadList">
                {
                    data &&
                    data.map((item)=>{
                        return <TableContent data = {item}
                        acive = {acive}
                        />
                    })
                }
            </div>
        </>
    )
}
export default PlaceHolderApi;