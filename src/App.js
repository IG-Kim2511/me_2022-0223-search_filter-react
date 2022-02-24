import { useState } from 'react';

import {Users} from './data'
import './App.css';

/* 🍀version 1. BASIC SEARCH
.filter
*/

/* 🦄🍄
1. input, setQuery

2. query

3. data_Users.filter

4. if...data_Users.filter = query... map loop안에 데이터바인딩 ㄱㄱ
*/

function App() {

  const [query, setQuery] = useState("");

  console.log(query)

  return (
    <div className="App">

      <h1> search filter</h1>

      <input className='search' placeholder='search...' onChange={(e)=>( setQuery(e.target.value.toLowerCase()))}/>

      

      
      
      <ul>
      
      {
        Users.map((user)=>(
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
