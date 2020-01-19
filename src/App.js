import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import Home from './containers/Home';


export default () => {
  const [dataState, setData] = useState({
    data: [],
    isLoading: true
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/photos');
      setData({ data: result.data, isLoading: false });
    };

    fetchData();
  }, []);
  
  return (<Home data={dataState.data} isLoading={dataState.isLoading}/>);
};
