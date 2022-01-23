import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { FC, useState } from "react"
import Layout from "../components/layout"
import Picture from "../components/picture"
import Seo from "../components/seo"
import Img from "gatsby-image"
import { Container } from "./styles/dog"
import { dec2bin, isPrime, randomElement } from "../utils"
import styled from "styled-components"

type PictureProps =
  | { multiple: true; dogs: fluid[] }
  | { multiple: false; dog: fluid }

type fluid = {
  aspectRatio: number
  base64: string
  sizes: string
  src: string
  srcSet: string
}

const Dog: FC = () => {
  //In future: Find a way to query and sort by file name,
  //For now get by last modified.
  const data = useStaticQuery(graphql`
    query AssetsPhotos {
      allFile(
        sort: { fields: modifiedTime, order: ASC }
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: { regex: "images/dogs/" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const [
    dog1,
    dog2,
    dog3,
    dog4,
    dog5,
    dog6,
    dog7,
    dog8,
    dog9,
    dog10,
    specialdog,
  ] = data.allFile.edges.map(edge => edge.node.childImageSharp.fluid)

  const [input, setInput] = useState<string>("")
  const [pictureProps, setPictureProps] = useState<PictureProps>({
    multiple: false,
    dog: data.allFile.edges[process.env.GATSBY_STATIC_DOG || 9].node
      .childImageSharp.fluid,
  })

  const check = (string: string) => {
    //Checks if a given string length is more than four, if so return true or false if it only contains the number 1
    if (string.length >= 4) {
      return string.match(/^[1]+$/g) !== null
    }
    return false
  }

  const Determine = (number: number) => {
    switch (true) {
      case check(dec2bin(number)):
        setPictureProps({ multiple: false, dog: specialdog })
        break

      case number < 0:
        setPictureProps({ multiple: false, dog: dog1 })
        break

      case number > 100:
        setPictureProps({ multiple: false, dog: dog10 })
        break

      case isPrime(number):
        setPictureProps({
          multiple: false,
          dog: randomElement([dog2, dog3, dog4]),
        })
        break

      case number % 5 === 0:
        setPictureProps({ multiple: true, dogs: [dog5, dog6] })
        break

      default:
        setPictureProps({
          multiple: false,
          dog: data.allFile.edges[process.env.GATSBY_STATIC_DOG || 9].node
            .childImageSharp.fluid,
        })

        break
    }
  }

  const DetermineDog = (input: string) => {
    const number = parseFloat(input)
    if (!isNaN(number)) {
      Determine(number)
    } else {
      alert("Insert a number")
    }
  }

  const Test = styled.div`
    bottom: 0px; ;
  `

  return (
    <Layout>
      <Seo title="Using TypeScript" />
      <br />
      <Container>
        <Picture {...pictureProps} />
      </Container>
      <br />
      <Container>
        <input
          type="number"
          value={input}
          onInput={e => setInput((e.target as HTMLInputElement).value)}
        />
        <button onClick={() => DetermineDog(input)}>Click me</button>
      </Container>
    </Layout>
  )
}

export default Dog
