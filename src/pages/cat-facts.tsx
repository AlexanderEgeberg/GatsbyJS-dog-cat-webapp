import { Link } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from 'axios';
import useFetch from "../Hooks/useFetch";

interface CatFact {
  fact: string,
  length: number
}

const CatFacts: FC = () => {

  const fetch = async (): Promise<CatFact> => {
    try {
      const result = await axios.request({
        url: "https://catfact.ninja/fact",
      });

      return result.data;

    } catch (error) {
      console.log(error);
    }
  }

  const {
		state: data,
		handle: refresh,
		error: _error,
		loading
	} = useFetch(fetch);


  const test = () => {
    console.log(data);
    refresh();
  }

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

export default CatFacts

