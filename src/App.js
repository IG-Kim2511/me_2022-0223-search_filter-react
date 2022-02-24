import { useEffect, useState } from 'react';
import axios from "axios";

import {Data_Users} from './data'
import './App.css';
import Table from './Table';


/* 🍀way 1. BASIC SEARCH
.filter
*/

/* 🦄🍄
  10.input에 입력한 value - setQuery로 입력

  20. data, map loop,화면 표시 - Data_Users.map((user)=>(~~~))


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
//           Data_Users.filter((p)=>(p.first_name.toLowerCase().includes(query))).map((user)=>(
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
05. point 
: filter, some, includes -> function 밖으로 빼서 사용함

: first name, last name, email... 등등 하나의 코드로 전부 filter함


10.input에 입력한 value - setQuery로 입력

20. data, map loop,화면 표시 - Data_Users.map((user)=>(~~~))

30. search function + data_users 적용

data.id, data.name....등등이 .includes(query) 인때

<table/>로 데이터 넘김


30-2. data.id, data.name....등등을 const keys에 array로 뺌

array.some(a) : array안에 a 가 있으면 true


40 <table/> 에서 자료 보여줌

*/

// function App() {

//   const [query, setQuery] = useState("");

//     // 🍉w2-30-2
//   const keys = ["first_name", "last_name", "email"];

//   // 🍉w2-05, -10, -20,
//   const search = (p_data_users) => {
//     return p_data_users.filter((pp_data_item) =>

//       // 🍉w2-30
//       // pp_data_item.first_name.toLowerCase().includes(query) ||
//       // pp_data_item.last_name.toLowerCase().includes(query) ||
//       // pp_data_item.email.toLowerCase().includes(query) 

//       // 🍉w2-30-2
//       keys.some((key) => pp_data_item[key].toLowerCase().includes(query))


//     );
//   };

// return (
//   <div className="app">

//       {/* 🍉w2-10 */}
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
    
//       {/* 🍉w2-30, -40 */}
//     <Table pp_data_users={search(Data_Users)} />

//   </div>
// );
// }

/* 🍀way 3. API SEARCH
*/

function App() {  
  
  useEffect(() => {
    const fetchData = async () => {
 
      const res = await axios.get(`https://thronesapi.com/api/v2/Characters`);
      
      console.log(res.data)
    };
    
    fetchData();
  }, []);

  return (
    <div className="app">

    </div>
  );
}


// function App() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);

  
  
//   useEffect(() => {
//     const fetchData = async () => {
//       // const res = await axios.get(`http://localhost:5000?q=${query}`);
//       const res = await axios.get(`https://thronesapi.com/api/v2/Characters`);
      
//       console.log(res)
//       setData(res.data);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query]);

//   return (
//     <div className="app">
//         <input
//           className="search"
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//         />
//       {<Table data={data} />}
//     </div>
//   );
// }




export default App;
