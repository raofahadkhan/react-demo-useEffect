import './App.css';
import React, { useEffect, useState } from 'react'
// useEffect is called after the component is rendered and after that useEffect does his work
function App() {
  let data = {title: "waiting for data"};
  const [ todo, setTodo ] = useState(data);
  // const [ isFetching, setFetching ] = useState(false);
  useEffect(() => {
    async function fetchData(){
      // setFetching(true);
      const response = await fetch('http://jsonplaceholder.typicode.com/todos/1');
      console.log('response = ', response);
      let data2 = await response.json();
      setTodo(data2);
      // setFetching(false);
      console.log('data = ', todo);
    }
    fetchData();
  }, []);
  if(isFetching){
    return <div>Data is loading......</div>
  }
  return (
    <div>
      Hello Fetch
      <br />
    <span>title: {todo.title}</span>
    </div>
  );
}

export default App;
