import { Link } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from "axios"
import useFetch from "../Hooks/useFetch"
import styled from "styled-components"
import { Box, BoxWrapper, Button, ButtonWrapper } from "../components/styles/cat-facts"

interface CatFact {
  fact: string
  length: number
}

const CatFacts: FC = () => {
  const fetch = async (): Promise<CatFact> => {
    try {
      const result = await axios.request({
        url: "https://catfact.ninja/fact",
      })

      return result.data
    } catch (error) {
      console.log(error)
    }
  }

  const { data, refresh, error: _error, loading } = useFetch(fetch)

  return (
    <Layout>
      <Seo title="Cat Facts" />
      <BoxWrapper>
        <Box>
          {
            //On the first load it shows a loading message, afterwards it will show the previous fact until updated.
            loading ? (
              data ? (
                <h2>{data.fact}</h2>
              ) : (
                <p>loading</p>
              )
            ) : (
              <h2>{data.fact}</h2>
            )
          }
        </Box>
        <ButtonWrapper>
          <Button onClick={refresh}>MORE CAT FACTS</Button>
        </ButtonWrapper>
      </BoxWrapper>
    </Layout>
  )
}

export default CatFacts
