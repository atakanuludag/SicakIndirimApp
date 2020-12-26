import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next'
import useSWR from 'swr'

import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/counter/actions';


const Test = ({data}: any): React.ReactElement => {


  const [items, setItems] = React.useState<any>({});
    
  const count = useSelector((state: any) => state.counterReducers.count);
  const dispatch = useDispatch();

  
  const fetcher = (url: string) => axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImF0YWthbnVsdWRhZyIsInVzZXJJZCI6IjVmZDY1ODdjZjE4ZjkyNGFjY2Q4YzFjNiIsImlhdCI6MTYwODMyNzY0OSwiZXhwIjoxNjA4NDE0MDQ5fQ.FKLS1v_hcIOapT7FqFdD962mj8oPGOXslSzK8nlZbbE"
    }
  }).then(res => res.data)

  const getir = () => {

    const { data, error } = useSWR('http://localhost:5050/test/user/profile', fetcher);

    console.log("data", data);
    console.log("error", error);
    
    setItems(data);
    //return <div>hello {data}!</div>



    /*const res = await axios.get('http://localhost:5050/test/user/profile', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImF0YWthbnVsdWRhZyIsInVzZXJJZCI6IjVmZDY1ODdjZjE4ZjkyNGFjY2Q4YzFjNiIsImlhdCI6MTYwODMyNzY0OSwiZXhwIjoxNjA4NDE0MDQ5fQ.FKLS1v_hcIOapT7FqFdD962mj8oPGOXslSzK8nlZbbE"
      }
    })
    const data = await res.data;
    console.log(data);
    return data;*/

  }

  return (
    <div>

      <Head><title>test</title></Head>

      <main>
        <p></p>
      <button type="button" onClick={getir}>GETİR</button>
      <p>{data && data.name}</p>
      <button type='button' onClick={() => dispatch(incrementCounter())}>
        Arttır
      </button>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>

      </main>
    </div>
  )
}

/*Test.getInitialProps = async ({}) => {
  const res = await axios.get('http://localhost:5050/test/user/profile', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImF0YWthbnVsdWRhZyIsInVzZXJJZCI6IjVmZDY1ODdjZjE4ZjkyNGFjY2Q4YzFjNiIsImlhdCI6MTYwODM3NjY3OSwiZXhwIjoxNjA4NDYzMDc5fQ.sHR8hzW4Rk9t1RVjtGJF6SLk8AzrRyQa8UDhaiCSiSE"
      }
    })
    const data = await res.data;
    return {
      data
    };
}*/

/*
export const getServerSideProps: GetServerSideProps = async ({}) => {
  const res = await axios.get('http://localhost:5050/test/user/profile', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImF0YWthbnVsdWRhZyIsInVzZXJJZCI6IjVmZDY1ODdjZjE4ZjkyNGFjY2Q4YzFjNiIsImlhdCI6MTYwODM3NjY3OSwiZXhwIjoxNjA4NDYzMDc5fQ.sHR8hzW4Rk9t1RVjtGJF6SLk8AzrRyQa8UDhaiCSiSE"
      }
    })
    const data = await res.data;
    return { props: { data } }
}*/

export default Test;