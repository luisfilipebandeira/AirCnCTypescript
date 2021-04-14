import React,{useEffect, useState} from 'react'

import api from '../../services/api'

import {
     Container,
     ImgLogo,
     Content,
     Span,
     Strong,
     Header,
     LI,
     UnorderedList} from './styles'

import logo from '../../assets/logo.svg'

import { Link, useHistory } from 'react-router-dom'
import { ButtonContent } from '../SignIn/styles'

interface SpotsDashboard {
    id: string;
    thumbnail: string;
    company: string;
    price: number;
    techs: string;
    user_id: string;
    created_at: string;
    updated_at: string;
  }

const SignIn: React.FC = () => {
    const [spots, setSpots] = useState<SpotsDashboard[]>([])

    useEffect(() => {
        async function loadSpots(){
            const user_id = localStorage.getItem('user')
            const response = await api.get('/dashboard',{
                headers: {user_id}
            })

            setSpots(response.data)
        }

        loadSpots()
    }, [])
    return (
        <>
        <Container>
            <ImgLogo>
             <img src={logo} alt="AirCnc"/>
            </ImgLogo>
        
            <Content>
            <UnorderedList>
                {spots.map(spot => (
                    <LI key={spot.id}>
                        <Header style={{backgroundImage: `url(${spot.thumbnail})`}} >
                        </Header>
                        <Strong>{spot.company}</Strong>
                        <Span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</Span>
                    </LI>
                ))}
            </UnorderedList>
            <Link to="/new">
                <ButtonContent>Cadastrar novo spot</ButtonContent>
            </Link>
            </Content>
        </Container>
        </>
    )
}

export default SignIn