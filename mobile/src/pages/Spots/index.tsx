import React, {useEffect, useState} from 'react'
import {
     Container,
     Content,
     ImgLogo, 
     HeaderButton, 
     HeaderContainer,
     Text,
     TextBold,
     ScrollView,
     ImgCompany,
     TitleCompany,
     DailyCompany,
     ButtonCompany, 
     ButtonText,
     LineSpotView} from './styles'
import api from '../../services/api'
import logo from '../../assets/logo.png'
import AsyncStorage from '@react-native-community/async-storage'
import {useNavigation} from '@react-navigation/native'

interface Spots{
    id: string;
    thumbnail: string;
    company: string;
    price: number;
    techs: string;
    user_id: string;
    created_at: string;
    updated_at: string;
}

interface Techs{
    techs: string | null
}

const Login: React.FC = () => {
    const [spots, setSpots] = useState<Spots[]>([])
    const [techs, setTechs] = useState<Techs>()

    const navigation = useNavigation()

    useEffect(() => {
        async function loadSpots(){
            const techs = await AsyncStorage.getItem('techs')
            setTechs(techs)

            const response = await api.get('/spots', {
                params: {techs}
            })

            setSpots(response.data)
            console.log(spots)
            console.log(techs)
        }

        loadSpots()
    }, [])

    function handleNavigate(id: string){
        navigation.navigate('Book', {id})
    }

    return(
        <>
            <Container>
                <HeaderContainer>
                    <HeaderButton onPress={() => navigation.goBack()}>
                    <ImgLogo source={logo}/>    
                    </HeaderButton>
                </HeaderContainer>
    
                <Content>
                   <Text>Empresas que Usam <TextBold>{techs}</TextBold></Text>
                   <ScrollView>
                        {spots.map(spot => 
                                <LineSpotView key={spot.id} >
                                 <ImgCompany source={{uri: spot.thumbnail}} />
                                 <TitleCompany>{spot.company}</TitleCompany>
                                 <DailyCompany>{spot.price ? `R$${spot.price}/DIA` : 'GRATUITO'}</DailyCompany>
                                 <ButtonCompany onPress={() => handleNavigate(spot.id)}>
                                     <ButtonText>Agendar Spot</ButtonText>
                                 </ButtonCompany>
                                 </LineSpotView>
                            )}
                   </ScrollView>
                </Content>
            </Container>
        </>
    )
}

export default Login