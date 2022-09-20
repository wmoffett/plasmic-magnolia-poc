import React from 'react';
import { 
  Heading
} from '@chakra-ui/react';

interface HeadlineProps {
  text: string;
}
  const Headline = ({
    ...props
  }: HeadlineProps): React.ReactElement => (
    <Heading as="h2" size={"xl"} m={1} {...props} />
  );

export default Headline;