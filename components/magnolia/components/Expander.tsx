import React, { useState } from 'react';
import { EditableArea } from '@magnolia/react-editor';
import { 
  Box
} from '@chakra-ui/react';

import { Icon } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons'

interface ExpanderProps {
  expanderItems: object;
  metadata: object;
}

const Expander = ( props : ExpanderProps): React.ReactElement => {

  const { expanderItems, metadata } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
      <Box className='expander2'>
        <Box pos='relative' border='1px' borderColor='gray.200' borderRadius='lg' p={1} onClick={() => setIsCollapsed(isCollapsed ? false : true)} className={isCollapsed ? 'open expanderHeader' : 'closed expanderHeader'}>  
          <Box p="3" pos='relative'>
            <Box pos='absolute' top='0' right='0'>
            {isCollapsed ? <Icon as={ChevronDownIcon} w={6} h={6} /> : <Icon as={ChevronUpIcon} w={6} h={6} />}
            </Box>
          </Box>
        </Box>
        {!isCollapsed && (
          <Box>
            <EditableArea content={expanderItems} parentTemplateId={metadata['mgnl:template']} />
          </Box>
        )}
      </Box>
  );
}

export default Expander;
