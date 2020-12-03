import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { UserType } from './types/UserType';

function App() {
  const [data, setData] = useState<UserType[]>([]);
  const mondai = {
    id: 1,
    name: 'mondai',
    url: 'https://mondai.com',
    isStart: false,
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get<UserType[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    const result: UserType[] = res.data;
    setData(result);
    return result;
  };

  console.log(data);

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
