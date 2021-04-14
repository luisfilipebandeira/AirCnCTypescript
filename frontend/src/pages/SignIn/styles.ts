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

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
`

export const LabelContent = styled.label`
  font-size: 14px;
  color: #444;
  font-weight: bold;
  margin-bottom: 8px;
`

export const InputContent = styled.input`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 45px;
  padding: 0 15px;
  font-size: 16px;
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

export const ButtonText = styled.text``