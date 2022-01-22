import styled from "styled-components"

export const Button = styled.button`
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  font-weight: bold;

  &:disabled {
    cursor: default;
  }

  &:focus {
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
      rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
`

export const ButtonWrapper = styled.div`
  position: absolute;
  width: 300px;
  bottom: 0px;
  right: 25%;
  left: 50%;
  margin-left: -150px;
  background-color: #ffffff;
  padding: 0 42px;
`
export const BoxWrapper = styled.div`
  position: relative;
  padding-bottom: 20px;
  padding-top: 25%;
`
export const Box = styled.div`
  text-align: center;
  min-height: 250px;
  border-style: solid;
  border-color: #405cf5;
  padding: 25px;
`
