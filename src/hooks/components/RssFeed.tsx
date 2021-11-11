import React from 'react';
import {Button, FlatList, Image, Text, View} from 'react-native';

import {RssFeedItem, RssFeedItems} from '../constants/types/components';
import {useRssFeed} from '../useRssFeed';

export interface RssFeedProps {
  items: RssFeedItems;
}

interface RssFeedItemProps {
  item: RssFeedItem;
}

const RssFeedItemLine = ({item}: RssFeedItemProps): React.ReactElement => {
  return (
    <View>
      <Text>{item.title}</Text>
      {item.images && (
        <Image
          style={{width: 75, height: 75}}
          source={{
            uri: item.images[0],
          }}
        />
      )}
    </View>
  );
};

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
