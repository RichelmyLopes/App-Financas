import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';

import {Container, Nome, NewLink, NewText, Logout, LogoutText} from './styles';


export default function Profile() {
    
const {user, signOut} = useContext(AuthContext);

const navigation = useNavigation();

    return(
        <Container>
            <Header/>
            <Nome>{user.nome}</Nome>
            <NewLink onPress={() => navigation.navigate('Registrar')}>
                <NewText>Registrar Gastos</NewText>
            </NewLink>
            <Logout onPress={() => signOut()}>
                <LogoutText>Sair</LogoutText>
            </Logout>
        </Container>
    );
}