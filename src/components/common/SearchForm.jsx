import { useState } from 'react';
import { FormControl, HStack, VStack, Input, Button, Icon, View } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Dropdown } from './Dropdown';

export const SearchForm = ({ options, selected, onSearchSelect, onSelect }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View>
      <VStack space={2} width='75%' py={5}>
        <FormControl isRequired>
          <FormControl.Label fontSize='sm'>Search Movies or TV Shows</FormControl.Label>
          <Input
            placeholder='i.e. James Bond, CSI'
            value={searchText}
            variant='filled'
            bg='gray.200'
            px={3}
            width='120%'
            InputLeftElement={<Icon size={5} ml={2} color='gray.400' name='ios-search' as={<Ionicons />} />}
            onChangeText={(value) => {
              setSearchText(value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label isRequired>Choose Search Type</FormControl.Label>
          <HStack space={2} alignItems='center'>
            <Dropdown options={options} selected={selected} onSelect={onSelect} />
            <Button
              onPress={() => onSearchSelect(searchText)}
              width='32'
              variant='solid'
              colorScheme='info'
              fontWeight='bold'
              marginTop={1}
              startIcon={<Icon as={Ionicons} name='ios-search' />}
              size='sm'
            >
              Search
            </Button>
          </HStack>
        </FormControl>
      </VStack>
    </View>
  );
};
