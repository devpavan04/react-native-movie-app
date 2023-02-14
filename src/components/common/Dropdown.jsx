import { Select } from 'native-base';
import { Feather } from '@expo/vector-icons';

export const Dropdown = ({ options, selected, onSelect }) => {
  return (
    <Select
      selectedValue={selected}
      minWidth={200}
      accessibilityLabel='Filter by category'
      placeholder='Filter by category'
      _selectedItem={{
        backgroundColor: '#3B4252',
        _text: {
          color: 'white',
        },
        rounded: 'md',
        endIcon: <Feather name='check' size={24} color='white' />,
      }}
      mt={1}
      onValueChange={(value) => onSelect(value)}
      dropdownIcon={<Feather name='chevron-down' size={20} color='#3B4252' />}
    >
      {options.map((option) => (
        <Select.Item label={option.label} value={option.value} />
      ))}
    </Select>
  );
};
