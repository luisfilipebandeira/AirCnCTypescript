import React, {useState} from 'react'
import {Container, Content, ImgLogo, Span, Input, Button, ButtonText} from './styles'
import api from '../../services/api'
import logo from '../../assets/logo.png'
import AsyncStorage from '@react-native-community/async-storage'
import {useNavigation} from '@react-navigation/native'

const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [techs, setTechs] = useState('')

    const navigation = useNavigation()

    async function handleSubmit(){
        const response = await api.post('users', {email})

        const {id} = response.data

        await AsyncStorage.setItem('user', id)
        await AsyncStorage.setItem('techs', techs)
        console.log(techs)

        navigation.navigate('Spots')
    }

    return(
        <>
            <Container>
                <Content>
                   <ImgLogo source={logo}/>    
                   <Span>Email*</Span>                
                   <Input 
                   keyboardType="email-address" 
                   placeholder="Digite seu Email"
                   value={email}
                   onChangeText={setEmail}
                   />
                   <Span>Tecnologias*</Span>                
                   <Input 
                   keyboardType="default" 
                   placeholder="Quais tecnologias usam?" 
                   value={techs} 
                   onChangeText={setTechs}
                   />

                   <Button onPress={handleSubmit}>
                       <ButtonText>Encontrar Spots</ButtonText>
                    </Button>
                </Content>
            </Container>
        </>
    )
}

export default Login