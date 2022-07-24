import React, { useState } from "react"
import TodoList from "./TodoList";

const App = () => {

  const [inputList, setInputList] = useState(" ");
  const [items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value);

  };

  const addItems = () => {
    setItems((oldItems) => {
      return (
        [...oldItems, inputList]
      )
    });
    setInputList("");

  }

  const deleteItem = (id) => {
    console.log("Deleted")

    setItems((oldItems) => {
      return (
        oldItems.filter((arrElement, index) => {
          return index !== id;

        })
      )

    });

  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="heading">ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            value={inputList}
            onChange={itemEvent} />
          <button onClick={addItems}>+</button>

          <ol className="list">
            {/* <li>{inputList}</li> */}
            {items.map((itemval, index) => {

              return <TodoList
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem}

              />

            })}
          </ol>

        </div>
      </div>
    </>
  )
};


export default App;