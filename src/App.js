import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import data from './JsonData/data.json';
import HeaderSection from './Todo/Header';
import AddTodo from './Todo/AddTodo';
import FooterSection from './Todo/Footer';
import TodoListSection from './Todo/TodoList';
import Search from './Todo/Search';

const App = () => {

  let localGetData = JSON.parse(localStorage.getItem("data"));

  (localGetData == null) ? localGetData = [...data.data] : localGetData = localGetData

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setItems(localGetData)
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
        localStorage.setItem("data", JSON.stringify(data));
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
    localStorage.setItem("data", JSON.stringify(data));
  }

  const handleDelete = (id) => {
    let data = items.filter((item) => {
      return item.id !== id ? { ...item } : ""
    })

    if (data !== "") {
      setItems(data)
      localStorage.setItem("data", JSON.stringify(data));
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

      <TodoListSection
        items={items.filter((item) => {
          return item.item.toLowerCase().includes(search.toLowerCase())
        })}
        taskHandle={taskHandle}
        handleDelete={handleDelete}
      />

      <FooterSection
        author="Nagaraj"
      />

    </div>
  );
}

export default App;
