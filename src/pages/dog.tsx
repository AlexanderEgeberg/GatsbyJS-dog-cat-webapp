import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { FC, useState } from "react"
import Layout from "../components/layout"
import Picture from "../components/picture"
import Seo from "../components/seo"
import Img from "gatsby-image"


type PictureProps = (
  {multiple: true, dogs: fluid[]} |
  {multiple: false, dog: fluid}
);

type fluid = {
  aspectRatio: number,
  base64: string,
  sizes: string,
  src: string,
  srcSet: string,
}


const Dog: FC = () => {

  //Der må findes en måde at query med fil navn, men for nu er løsningen at hente alle billederne og sortere efter hvornår de sidst blev ændret.
  const data = useStaticQuery<GatsbyTypes.AssetsPhotosQuery>(graphql`
  query AssetsPhotos {
      allFile(sort: {fields: modifiedTime, order: ASC}, filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "images/dogs/"}}) {
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
  const [dog1,dog2,dog3,dog4,dog5,dog6,dog7,dog8,dog9,dog10,specialdog] = data.allFile.edges.map(edge => edge.node.childImageSharp.fluid);

  const [input, setInput] = useState<string>(''); 
  const [object, setObject] = useState<PictureProps>({multiple: false, dog: data.allFile.edges[process.env.GATSBY_STATIC_DOG || 9].node.childImageSharp.fluid});

  console.log(process.env.GATSBY_STATIC_DOG)
  const isPrime = (num: number) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
  }

  const randomElement = <T, >(array: T[]) => array[Math.floor(Math.random() * array.length)];

  const dec2bin = (dec: number) => {
    return (dec >>> 0).toString(2);
  }
  const check = (string: string) => {
    if (string.length >= 4) {
      return string.match(/^[1]+$/g) !== null
    }
    return false;
  }

  const Determine = (number: number) => {
    switch (true) {
      case check(dec2bin(number)):
          console.log("a");
          setObject({multiple: false, dog: specialdog})
        break;

      case number < 0:
        console.log("under 0")
        setObject({multiple: false, dog: dog1})
        break;

      case number > 100:
        console.log("above 100");
        setObject({multiple: false, dog: dog10})
        break;

      case isPrime(number):
        console.log("PRIMER");
        setObject({multiple: false, dog: randomElement([dog2,dog3,dog4])})
        break;

      case number % 5 === 0:
        console.log("divisble by 5");
        setObject({multiple: true, dogs: [dog5,dog6]})
        break;
    
      default:
        console.log("default")
        setObject({multiple: false, dog: data.allFile.edges[process.env.GATSBY_STATIC_DOG || 9].node.childImageSharp.fluid})
        
        break;
    }
  }

  const DetermineDog = (input: string) => {
    const number = parseFloat(input);
    if(!isNaN(number)) {
      Determine(number);
    }
    else {
      alert("Insert a number");
    }
  }


  return (
    <Layout>
      <Seo title="Using TypeScript" />
      <input type="number" value={input} onInput={e => setInput((e.target as HTMLInputElement).value)}/>
      <button onClick={() => DetermineDog(input)}>Click me</button>
      <br />
      <Picture
      {...object}
      
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Dog

