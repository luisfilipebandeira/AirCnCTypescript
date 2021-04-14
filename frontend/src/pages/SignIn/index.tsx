import React,{FormEvent, useState} from 'react'

import api from '../../services/api'

import {
     Container,
     ImgLogo,
     Content,
     ContentText,
     FormContent,
     LabelContent,
     InputContent,
     ButtonContent,
     ButtonText} from './styles'

import logo from '../../assets/logo.svg'

import { useHistory } from 'react-router-dom'

interface SignInData{
    email: string
}

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('')
    const history = useHistory()

    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        
        const response = await api.post('/users', { email })

        const { id } = response.data
        
        localStorage.setItem('user', id)

        history.push('/dashboard')
    }
    return (
        <>
            <Container>
                <ImgLogo>
                    <img src={logo} alt="AirCnc"/>
                </ImgLogo>

                <Content>
                    <ContentText>Ofereça <strong>spots </strong> 
                        para programadores e encontre <strong>talentos </strong> 
                        para sua empresa
                    </ContentText>

                    <FormContent onSubmit={handleSubmit}>
                        <LabelContent></LabelContent>

                        <InputContent 
                        type="text" 
                        placeholder="Email" 
                        name="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}>
                        </InputContent>

                        <ButtonContent>
                            <ButtonText>Entrar</ButtonText>
                        </ButtonContent>
                    </FormContent>
                </Content>
            </Container>
        </>
    )
}

export default SignIn