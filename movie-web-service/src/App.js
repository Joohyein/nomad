import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  // console > network 에서 tickers를 request했다는 것을 확인할 수 있다.
  // data를 받아옴
  // coins를 얻었다면 loading을 false로 변경
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> 
      : <select>
        {coins.map((coin)=><option>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
      </select>}
      
    </div>
  );
}

export default App;
