import { useEffect, useState } from "react";
import './App.css'


function App(props) {
  const url = "https://api.gemini.com/v1/book/btcusd";

  const [orders, setOrders] = useState({ asks: [{price: 0, amount: 0}], bids: [{price: 0, amount: 0}] });
  const fetchData = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data); //Data: {bids: Array(50), asks: Array(50)}
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(()=>{
    fetchData()
//     // const interval=setInterval(()=>{
//     //   fetchData()
//     //  },6000)
//     //  return()=>clearInterval(interval)
},[])
  return (
    <div class="table-container">
      <h3 className='info'>New orders every 3 seconds</h3>
      <table className="table sticky">
        <thead>
          <th>Ask price</th>
          <th>Ask amount</th>
          <th>Bid price</th>
          <th>Bid amount</th>
        </thead>
      {orders.asks?.map((e, i) => {
        return (
          <>
            <tr>
              <td className='ask-price'>${e.price.toLocaleString()}</td>
              <td className='td'>{e.amount}</td>
              <td className='bid-price'>${orders.bids[i].price.toLocaleString()}</td>
              <td className='td'>{orders.bids[i].amount}</td>
            </tr>

          </>
        )
      })}
      </table>
      
    </div>
  );
}

export default App;