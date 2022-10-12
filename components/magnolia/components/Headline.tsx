import React from 'react';
import { 
  Heading
} from '@chakra-ui/react';

interface HeadlineProps {
  text: string;
}

const Headline = ( props : HeadlineProps): React.ReactElement => {
  return (
    <Heading as="h2" size={"xl"}>
      {props.text}
    </Heading>
  );
}

export default Headline;