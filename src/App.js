import logo from './logo.svg';
import './App.css';

import { atom, useRecoilState, useResetRecoilState, selector, useRecoilValue } from'recoil';


const globalState = atom({
    key:"count-atom",
    default:15
})
//atoms are used to create the global states


//selectors are a piece of derived state
const fontSize = selector({
  key:"font-size",
  get:({get})=>{
    const count = get(globalState)
    const fontSize = count * 4
    return fontSize
  }
})

function App() {
  const [count,setCount] = useRecoilState(globalState) // accessing the global states
  const resetCount = useResetRecoilState(globalState)
  const fontSize1 = useRecoilValue(fontSize)
  return (

    <div className="App">
      <h1>Recoil State Management</h1>
      <h4>The font size is: {count}</h4>

      <h4>The font size of emoji is: </h4>

     <p style={{fontSize:fontSize1}}>😊 </p>

      <button onClick={()=>{ setCount(count+1) }}>Increase Count</button>
      <button onClick={()=>{resetCount()}}>Reset Count</button>
    
      


    </div>
  );
}

export default App;
