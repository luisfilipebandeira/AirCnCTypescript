import React,{FormEvent, useState, useMemo, useCallback, ChangeEvent} from 'react'

import api from '../../services/api'

import {
     Container,
     ImgLogo,
     Content,
     FormContent,
     LabelContent,
     InputContent,
     ButtonContent,
     LabelThumbnail} from './styles'

import logo from '../../assets/logo.svg'

import Dropzone from '../../components/Dropzone'

import { useHistory } from 'react-router-dom'

const SignIn: React.FC = () => {
    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [price, setPrice] = useState('')
    const [selectedThumbnail, setSelectedThumbnail] = useState<File>()

    const data = new FormData()
    data.append('company', company)
    data.append('techs', techs)
    data.append('price', price)
    if(selectedThumbnail){
        data.append('thumbnail', selectedThumbnail)
    }

    const history = useHistory()

    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        const user_id = localStorage.getItem('user')

        const response = await api.post('/spots', data, {headers: {user_id}})

        history.push('/dashboard')
        
    }
    return (
        <>
            <Container>
                <ImgLogo>
                    <img src={logo} alt="AirCnc"/>
                </ImgLogo>

                <Content>

                    <FormContent onSubmit={handleSubmit}>
                        <LabelThumbnail id="thumbnail">
                        <Dropzone onFileUploaded={setSelectedThumbnail} />
                        </LabelThumbnail>

                        <LabelContent id="company">Empresa</LabelContent>
                        <InputContent 
                        type="text" 
                        placeholder="Empresa" 
                        name="company"
                        value={company}
                        onChange={event => setCompany(event.target.value)}>
                        </InputContent>

                        <LabelContent id="techs">Tecnologias</LabelContent>
                        <InputContent 
                        type="text" 
                        placeholder="Quais tecnologias usam?" 
                        name="techs"
                        value={techs}
                        onChange={event => setTechs(event.target.value)}>
                        </InputContent>

                        <LabelContent id="price">Valor da Diaria</LabelContent>
                        <InputContent 
                        type="text" 
                        placeholder="Qual o valor cobrado da diária?" 
                        name="price"
                        value={price}
                        onChange={event => setPrice(event.target.value)}>
                        </InputContent>

                        <ButtonContent>
                            Cadastrar novo Spot
                        </ButtonContent>
                    </FormContent>
                </Content>
            </Container>
        </>
    )
}

export default SignIn