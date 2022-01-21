import { Link } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from 'axios';
import useFetch from "../Hooks/useFetch";


const Dog: FC = () => {

  const fetch = async (): Promise<CatFact> => {

  return (
    <Layout>
      <Seo title="Using TypeScript" />

      {data && 
        loading
        ? <p>loading</p>
        : <p>{data.fact}</p>
      }
  
      <Link to="/">Go back to the homepage</Link>
      <br />
      <button onClick={() => test()}>hey</button>
    </Layout>
  )
}

export default Dog

