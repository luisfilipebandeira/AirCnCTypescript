import styled from 'styled-components'
import backgroundImg from '../../assets/background.jpg'

export const Body = styled.div`
  background: #000 url(backgroundImg) no-repeat;
  background-size: cover;   
`

export const Container = styled.div`
  margin: 80px auto;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImgLogo = styled.div``

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;
`

export const ContentText = styled.text`
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 30px;
`

export const ButtonContent = styled.button`
    border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background: #f05a5b;
  color: #fff;
  cursor: pointer;

  
  &:hover{
    background: #e14f50;
  }
`

export const Span = styled.span`
  font-size: 15px;
  color: #999;
`

export const Strong = styled.strong`
 margin-top: 10px;
  font-size: 24px;
  color: #444;
`

export const Header = styled.header`
  width: 100%;
  height: 120px;
  background-size: cover;
  border-radius: 4px;
`

export const LI = styled.li`
  display: flex;
  flex-direction: column;
`

export const UnorderedList = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
`
