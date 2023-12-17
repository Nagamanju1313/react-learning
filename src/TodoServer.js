import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import HeaderSection from './Todo/Header';
import AddTodo from './Todo/AddTodo';
import FooterSection from './Todo/Footer';
import TodoListSection from './Todo/TodoList';
import Search from './Todo/Search';

const TodoServer = () => {

  const API_URL = "http://localhost:3000/data";

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setItems(localGetData)
    const fetchData = async () => {
      let response
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
  const handleClick = () => {

    if (message !== "") {

      let checkDuplicate = true;

      items.forEach((item) => {
        if (item.item == message) {
          checkDuplicate = false;
          alert("Todo Item Already Exists");
        }
      })

      if (checkDuplicate) {
        let data = [
          ...items,
          {
            id: items.length + 1,
            checked: false,
            item: message
          }
        ]
        setItems(data)
        setMessage("")
      }
    } else {
      alert("empty message not allowed")
    }

  }

  const taskHandle = (id) => {
    let data = items.map((item) => {
      return (
        (item.id == id && item.checked == true) ? { ...item, checked: false } : (item.id == id && item.checked == false) ?
          { ...item, checked: true } : { ...item }
      )
    })

    setItems(data)
  }

  const handleDelete = (id) => {
    let data = items.filter((item) => {
      return item.id !== id ? { ...item } : ""
    })

    if (data !== "") {
      setItems(data)
    }
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

export default TodoServer;
