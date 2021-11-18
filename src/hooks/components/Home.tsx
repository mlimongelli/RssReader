import React from 'react';
import {Button, View} from 'react-native';

export const Home: React.VFC = ({navigation}) => {
  return (
    <View>
      <Button title="Rss Feed" onPress={() => navigation.navigate('RssFeed')} />
    </View>
  );
};
