import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Users from './Users';

function App() {
  function handleClick(){
    alert("Btn clicked")
  }

  const handleClick2 =()=>{
     alert("Btn 2 clicked");
  }

  const addToFive = (num)=>{
    alert("by adding 5 the value is: " + (num + 5));
  }

  return (
    <>
      <h3>React Core Concepts - 2</h3>
      

      <Friends></Friends>

      <Users></Users>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me-2</button>
      <button onClick={()=>{alert("Third is clicked")}}>Third</button>
      <button onClick={()=> addToFive(5)}>Add Five</button>
    </>
  )
}

export default App
