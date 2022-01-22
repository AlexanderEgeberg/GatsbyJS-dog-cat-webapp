import React, { FC } from "react"
import Img from "gatsby-image"
import Slider from "infinite-react-carousel"
import styled from "styled-components"

type Props = { multiple: false; dog: fluid } | { multiple: true; dogs: fluid[] }

type fluid = {
  aspectRatio: number
  base64: string
  sizes: string
  src: string
  srcSet: string
}

const Picture: FC<Props> = (props: Props) => {
  if (props.multiple === false) {
    return <Img style={{ width: "480px" }} fluid={props.dog} />
  }

  const Wrapper = styled.div`
    width: 100%;
  `

  return (
    <Wrapper>
      <Slider autoplay pauseOnHover dots>
        {props.dogs.map(dog => {
          return <Img style={{ width: "480px" }} key={dog.base64} fluid={dog} />
        })}
      </Slider>
    </Wrapper>
  )
}
export default Picture
