import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import Img from "gatsby-image"

type Props = (
    {multiple: false, dog: fluid} |
    {multiple: true, dogs: fluid[]}
  );
  
  type fluid = {
    aspectRatio: number,
    base64: string,
    sizes: string,
    src: string,
    srcSet: string,
  }

const Picture: FC<Props> = (props: Props) => {

    if (props.multiple === false) {
        return (
            <Img fluid={props.dog} />
        )
    }

    return (
        <>
            {props.dogs.map(dog => {return <Img key={dog.base64} fluid={dog}/>})}
        </>
    )

}
export default Picture
