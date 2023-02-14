import { View } from 'native-base';
import { FlatList } from 'native-base';
import { Card } from './Card';

export const Cards = ({ navigation, items }) => {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
