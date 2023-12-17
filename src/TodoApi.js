import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import HeaderSection from './Todo/Header';
import AddTodo from './Todo/AddTodo';
import FooterSection from './Todo/Footer';
import TodoListSection from './Todo/TodoList';
import Search from './Todo/Search';
import apiRequest from './apiRequest.js';

const TodoApi = () => {

  const API_URL = "http://localhost:3000/data";

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setItems(localGetData)
    const fetchData = async () => {
      let response;
      try {
        response = await fetch(API_URL);
        if (!response.ok) throw "Error Data Not received"
        console.log(response)
        response = await response.json();
        setFetchError("");
        setItems(response)
      } catch (error) {
        setFetchError(error)
        setItems([])
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(()=>{
      (async () => await fetchData())()
    },2000)

  }, [])


  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const searchHandleChange = (e) => {
    setSearch(e.target.value);
  }
  const handleClick = async () => {

    if (message !== "") {

      let checkDuplicate = true;

      items.forEach((item) => {
        if (item.item == message) {
          checkDuplicate = false;
          alert("Todo Item Already Exists");
        }
      })

      if (checkDuplicate) {
        let addNewList = {
          id: items.length + 1,
          checked: false,
          item: message
        }
        let data = [
          ...items,
          addNewList
        ]
        setItems(data)
        setMessage("")

        const postOptions = {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(addNewList)
        }
        
        const result = await apiRequest(API_URL, postOptions);
        if(result) setFetchError(result)
      }
    } else {
      alert("empty message not allowed")
    }

  }

  const taskHandle = async (id) => {
    
    let data = items.map((item) => {
      return (
        (item.id == id && item.checked == true) ? { ...item, checked: false } : (item.id == id && item.checked == false) ?
          { ...item, checked: true } : { ...item }
      )
    })

    setItems(data)

    let filterUpdateObj = data.filter((item)=>{
      return item.id == id
    })
    
    const updateOptions = {
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({checked:filterUpdateObj[0].checked})
    }

    const PATCH_URL = API_URL+"/"+id
    const result = await apiRequest(PATCH_URL, updateOptions);
    if(result) setFetchError(result);

  }

  const handleDelete = async (id) => {
    let data = items.filter((item) => {
      return item.id !== id ? { ...item } : ""
    })

    if (data !== "") {
      setItems(data)
    }

    const deleteOptions = {
      method:"DELETE"
    }
    const PATCH_URL = API_URL+"/"+id
    const result = await apiRequest(PATCH_URL, deleteOptions);
    if(result) setFetchError(result);
  }

  return (
    <div>
      <HeaderSection />
      <AddTodo
        handleChange={handleChange}
        message={message}
        handleClick={handleClick}
      />

      <Search
        searchHandleChange={searchHandleChange}
        search={search}
      />
      {
        fetchError ?
          <p style={{ maxWidth: "800px", margin: "auto", color: "red" }}>
            {fetchError}
          </p>
          : ""
      }
      {
        isLoading && 
        <p style={{color:"blue"}}>App is Loading...</p>
      }
      {
        !isLoading &&
        <TodoListSection
          items={items.filter((item) => {
            return item.item.toLowerCase().includes(search.toLowerCase())
          })}
          taskHandle={taskHandle}
          handleDelete={handleDelete}
        />
      }

      <FooterSection
        author="Nagaraj"
      />

    </div>
  );
}

export default TodoApi;
