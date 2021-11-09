import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';

import {RssFeedItem, RssFeedItems} from '../constants/types/components';
import {useRssFeed} from '../useRssFeed';

export interface RssFeedProps {
  items: RssFeedItems;
}

interface RssFeedItemProps {
  item: RssFeedItem;
}

const RssFeedItemLine = ({item}: RssFeedItemProps): React.ReactElement => (
  <View>
    <Text>{item.title}</Text>
    <Text>{item.content}</Text>
  </View>
);

export const RssFeed: React.VFC<RssFeedProps> = () => {
  const {refresh, rssFeedItems} = useRssFeed();

  return (
    <View>
      <Button title="Refresh" onPress={refresh} />
      <FlatList
        data={rssFeedItems}
        renderItem={({item}) => <RssFeedItemLine item={item} />}
      />
    </View>
  );
};
