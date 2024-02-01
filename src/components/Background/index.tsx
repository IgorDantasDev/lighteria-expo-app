import React from 'react';
import {BackgroundImage, Container, Content, Header} from './styles';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {Icon} from '../Icon';
import {Bag} from '../Bag';

export const Background: React.FC = () => {
  const {goBack} = useNavigation();

  return (
    <Container>
      <BackgroundImage
        resizeMode="cover"
        source={require('~/assets/images/bgimg.jpg')}>
        <Header>
          <TouchableOpacity onPress={goBack}>
            <Icon color="orange" icon="arrowLeft" />
          </TouchableOpacity>
          <Bag />
        </Header>
      </BackgroundImage>
    </Container>
  );
};
