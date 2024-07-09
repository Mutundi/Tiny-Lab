import './App.css'
import React, {useState, useEffect} from 'react'
import { fetchItems } from '/src/api/dataService';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchItems();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getData();
  }, [])

  if(loading) return <div className="text-center">Loading...</div>;
  if(error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App


