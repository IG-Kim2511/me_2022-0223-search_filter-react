import { useState } from 'react';

import {Users} from './data'
import './App.css';
import Table from './Table';

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

// function App() {

//   // 🍉way1-10 
//   const [query, setQuery] = useState("");

//   console.log(query)

//   return (
//     <div className="App">

//       <h1> search filter</h1>

//       {/* 🍉way1-10 */}
//       <input className='search' placeholder='search...' onChange={(e)=>( setQuery(e.target.value.toLowerCase()))}/>
      
//       <ul className='list'>
      
//         {/* 🍉way1-20, -30, -40 */}
//         {
//           Users.filter((p)=>(p.first_name.toLowerCase().includes(query))).map((user)=>(
//           <li className="listItem" key={user.id}>
//                       {user.first_name}
//             </li>
//           ))
//         }
//       </ul>    

//     </div>
//   );
// }


// 🍀way 2.SEARCH ON A DATATABLE

/* 🦄🍄
05. point : filter, some, includes -> function 밖으로 빼서 사용함

10.input에 입력한 value - setQuery로 입력

20. data, map loop,화면 표시 - Users.map((user)=>(~~~))

30. data



40. filter((p)=>(p.first_name.toLowerCase().includes(query)))

filter((p)=>(p.first_name.toLowerCase(): filter로 걸러진 단어들 안에 , 

.includes(query)) : input....query안의 단어들 이 있으면

true값 리턴



input에 입력한 value - setQuery로 입력

1.data.filter

2. keys.some

3. data.filter한 것+ keys.some한 것 둘다 있으면, 

includes(~) 실행
*/

function App() {

  const [query, setQuery] = useState("");

   // 🍉w2-40
  const keys = ["first_name", "last_name", "email"];

  // 🍉w2-05, -10, 
  const search = (p_data) => {
    return p_data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

return (
  <div className="app">

      {/* 🍉w2-10 */}
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    
      {/* 🍉w2-30 */}
    <Table data={search(Users)} />

  </div>
);
}






export default App;
