import { useEffect, useState } from "react";
import { fetchData } from "./fetch-data";

function App() {
  // init with an object with empty `asks` array
  const [orders, setOrders] = useState({ asks: [], bids: [] });

  useEffect(() => {
    fetchData().then(setOrders).catch(console.error);
  }, []);

  return (
    <>
    <div className="asks">
      {/* Map over the data */}
      {orders.asks.map(({ price, amount }, i) => (
        <dl key={i}>
          <p className='price'>Asking Price (USD)</p>
          <dd>{price}</dd>
          <dt>Amount</dt>
          <dd>{amount}</dd>
        </dl>
      ))}
    </div>
    <div className='bids'>
      {/* Map over the data */}
      {orders.bids.map(({ price, amount }, i) => (
        <dl key={i}>
          <p className='price'>Bid Price (USD)</p>
          <dd>{price}</dd>
          <dt>Amount</dt>
          <dd>{amount}</dd>
        </dl>
      ))}
    </div>

</>
  );
}

export default App;