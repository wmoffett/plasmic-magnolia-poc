import React from 'react';
import { 
  Box
} from '@chakra-ui/react';

interface ParagraphProps {
  richText: string;
}

const Paragraph = ( props : ParagraphProps): React.ReactElement => {
  return (
    <Box textStyle='paragraph' dangerouslySetInnerHTML={{ __html: props.richText }} />
  );
}

export default Paragraph;