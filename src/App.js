import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


import Home from './containers/Home';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/photos');
      setData(result.data);
      console.log(result, result.data)
    };

    fetchData();
  }, []);
  
  return (
    <Home data={data} />
  );
}

export default App;
