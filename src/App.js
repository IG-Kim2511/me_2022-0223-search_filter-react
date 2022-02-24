import { useState } from 'react';

import {Users} from './data'
import './App.css';

/* 🍀way 1. BASIC SEARCH
.filter
*/

/* 🦄🍄
  10.input에 입력한 value - setQuery로 입력

  20. data, map loop,화면 표시 - Users.map((user)=>(~~~))


  30. 
  array.filter(a) : array안에 a 있으면 a 리턴

  array.includes(a) : array안에 a 있으면 true값 리턴


  40. filter((p)=>(p.first_name.toLowerCase().includes(query)))

  filter((p)=>(p.first_name.toLowerCase(): filter로 걸러진 단어들 안에 , 

  .includes(query)) : input....query안의 단어들 이 있으면

  true값 리턴


  50. ... map loop안에 데이터바인딩 ㄱㄱ
*/

function App() {

  // 🍉way1-10 
  const [query, setQuery] = useState("");

  console.log(query)

  return (
    <div className="App">

      <h1> search filter</h1>

      {/* 🍉way1-10 */}
      <input className='search' placeholder='search...' onChange={(e)=>( setQuery(e.target.value.toLowerCase()))}/>
      
      <ul className='list'>
      
        {/* 🍉way1-20, -30, -40 */}
        {
          Users.filter((p)=>(p.first_name.toLowerCase().includes(query))).map((user)=>(
          <li className="listItem" key={user.id}>
                      {user.first_name}
            </li>
          ))
        }
      </ul>    

    </div>
  );
}








export default App;
