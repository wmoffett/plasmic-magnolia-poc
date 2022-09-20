import React from 'react';
import { 
  UnorderedList
} from '@chakra-ui/react';
import { EditableArea } from '@magnolia/react-editor';
import { Metadata } from "@components/magnolia/Types";

interface ListProps extends Metadata {
  "@name": string;
  "items": Array<string>;
  "metadata": Metadata;
}

const List = ( props : ListProps): React.ReactElement => {

  const { items, metadata } = props;
  return (
      <UnorderedList>
        <EditableArea content={items} parentTemplateId={metadata['mgnl:template']} />
      </UnorderedList>
  );
}

export default List;