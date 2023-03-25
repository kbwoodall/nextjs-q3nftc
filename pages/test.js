import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

//import useSWR from 'swr';

export default function Home() {
  const [trigger, setTrigger] = useState(new Date().toISOString());

  const [counter, setCounter] = useState(0);

  const log = () => {
    console.log(counter);
  };

  useEffect(() => {
    setCounter(counter + 1);
  }, [trigger]);

  const [todos, settodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();
    settodos(data);
  };

  const Fetch1 = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();
    settodos(data);

    return <div>hello !</div>;
  };

  function Profile() {
    const { data, error } = useSWR('/api/hello', fetch);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return <div>hello {data.name}!</div>;
  }

  const hdg = () => {
    return (
      <p className="bg-green-400 text-md font-bold pt-2 pb-4 w-64 pl-4">
        Total Purchases by Customer
      </p>
    );
  };
  function Chdg() {
    return (
      <p className="bg-green-400 text-md font-bold pt-2 pb-4 w-64 pl-4">
        Customers
      </p>
    );
  }

  return (
    <div class="flex flex-col bg-green-200 pt-5">
      <Head>
        <title>Create Next App</title>
      </Head>

      <Child log={log} />

      <button onClick={log}>LOG</button>

      <button onClick={() => setCounter(counter + 1)}>{counter}</button>

      <button onClick={() => setTrigger(new Date().toISOString())}>
        {trigger}
      </button>

      <p class="text-xl bg-green-200 mt-5 text-center">Screen test.js</p>

      <div class="flex flex-col bg-green-200 text-center">
        <p className="text-xl mt-5">
          Get started by editing {''}
          <code>pages/index.js</code>
        </p>

        <p className="text-xl text-black mt-5 text-center">
          Welcome {todos.name} <a href="https://nextjs.org">Next.js!</a>
        </p>

        <ul className="text-xl text-black mt-5 text-center">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/stuff">Stuff</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
        </ul>
        <button className="text-xl text-black mt-5" onClick={fetchTodos}>
          Get Name from api
        </button>

        <Chdg />

        <Fetch1/>

        <p className="text-xl text-black mt-5 h-96"></p>
      </div>
    </div>
  );
}

const Child = ({ log }) => <Child2 log={log} />;

const Child2 = ({ log }) => <button onClick={log}>Child log counter</button>;
