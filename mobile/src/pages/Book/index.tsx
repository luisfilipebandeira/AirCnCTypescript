import React, { useState } from 'react'
import {useNavigation, useRoute} from '@react-navigation/native'
import { Container,
         ButtonText,
         Button,
         Input,
         Span,
         Content,
         HeaderContainer,
         HeaderButton,
         ImgLogo } from './styles'
import logo from '../../assets/logo.png'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'
import { Alert } from 'react-native'

const Book: React.FC = () => {
    const [date, setDate] = useState('')

    const navigation = useNavigation()
    const route = useRoute();

    async function handleSubmit(){
        const {id} = route.params
        const user_id = await AsyncStorage.getItem('user')

        await api.post('/spots/bookings',{
            date
        },{
            headers: {user_id, spot_id:id}
        })

        Alert.alert('Solicitação de reserva enviada.')

        navigation.navigate('Spots')
    }

    return (
        <>
            <Container>
                <HeaderContainer>
                    <HeaderButton onPress={() => navigation.goBack()}>
                    <ImgLogo source={logo}/>    
                    </HeaderButton>
                </HeaderContainer>

                <Content>
                   <Span>Data de Interesse</Span>                
                   <Input 
                   value={date}
                   onChangeText={setDate}
                   keyboardType="default" 
                   placeholder="Ex: 5 de outubro"
                   
                   />
                   <Button onPress={() => {}}>
                       <ButtonText onPress={handleSubmit}>Solicitar Reserva</ButtonText>
                    </Button>
                </Content>

            </Container>
        </>
    )
}

export default Book