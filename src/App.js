import React, {useState} from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';

function App() {
  const [list, setList] = useState('');
  const [array, setArray] = useState([]);
  const handleText = (event) => {
     setList(event.target.value);
  }
  const getData = () => {
       setArray((value)=>{
          return[...value, list]
       }) 
       setList('')
  }

  const deleteFunc = (id) => {
    setArray((value)=>{
      return value.filter((values,index)=>{
        return index !== id
      })
    })
  }
  return (
    <>
      <div className="card text-center cards" style={{ width: '18rem' }}>
        <div className="card-body">
          <h2 className="card-title">To Do List</h2>
          <br />
          <input type="text" value={list} placeholder="Add" onChange={handleText}/>
          <button onClick={getData} className="buttons">+</button>
          
          <ol>
            
            {
              array.map((items,index)=>{
                return (
                <ToDoList key={index} id={index} items={items} deleteFunc={deleteFunc}/>
                )
              })
            }
          </ol>
        </div>
      </div>

    </>

  );
}

export default App;
