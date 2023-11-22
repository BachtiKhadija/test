import React,{useState} from 'react'

const Product = () => {
  const[data,setData]=useState([{id:1,title:'p1',price:30},{id:2,title:'p1',price:30},{id:3,title:'p1',price:30}])
  return (
    <div>
       
<ul>
       {
        data.map(p=>(
          <li key={p.id}>
            {p.title} ** {p.price}
          </li>
        ))
       }
       </ul>
    </div>
  )
}

export default Product
