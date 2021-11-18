import React from 'react';
import {Button, FlatList, Image, Text, View} from 'react-native';

import styled, {css} from '@emotion/native';

import {RssFeedItem} from '../constants/types/components';
import {useRssFeed} from '../useRssFeed';

interface RssFeedItemProps {
  item: RssFeedItem;
}

const $RecordView = styled(View)`
  flex: 1;
  padding: 15px 5px;
  flex-direction: row;
  /* justify-content: space-between; */
  border-bottom-width: 1px;
  border-bottom-color: #202020;
`;

const RssFeedItemLine = ({item}: RssFeedItemProps): React.ReactElement => {
  return (
    <$RecordView>
      <View>
        {item.images && (
          <Image
            style={{width: 75, height: 75}}
            source={{
              uri: item.images[0],
            }}
          />
        )}
      </View>
      <View
        style={css`
          padding: 0 70px 0 15px;
        `}>
        <Text>{item.published?.toLocaleString()}</Text>
        <Text
          style={css`
            padding-top: 3px;
            font-weight: bold;
          `}>
          {item.title}
        </Text>
      </View>
    </$RecordView>
  );
};

export const RssFeed: React.VFC = () => {
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
