import React from 'react';
import { 
  ListItem
} from '@chakra-ui/react';

interface ListItemProps {
  text: string;
}

const Item = ({
  ...props
}: ListItemProps): React.ReactElement => (
  <ListItem>{props.text}</ListItem>
);

export default Item;