import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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

  return (
    <div className=" flex bg-amber-200">
      <Head>
        <title>Create Next App</title>
      </Head>

      <Child log={log} />

      <button onClick={log}>LOG</button>

      <button onClick={() => setCounter(counter + 1)}>{counter}</button>

      <button onClick={() => setTrigger(new Date().toISOString())}>
        {trigger}
      </button>

      <p className="text-xl  bg-green-500 mt-10">
        Paragraph styled using tailwind ok maybe
      </p>

      <main className="bg-amber-200">
        <p className="bg-amber-200 text-xl  bg-green-500 mt-10">
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <h1 className="text-xl text-black mt-10">
          Welcome {todos.name} <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/stuff">Stuff</Link>
          </li>
        </ul>
        <button onClick={fetchTodos}>Get Name</button>
      </main>
    </div>
  );
}

const Child = ({ log }) => <Child2 log={log} />;

const Child2 = ({ log }) => <button onClick={log}>Child log counter</button>;
