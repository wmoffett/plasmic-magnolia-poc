import React from 'react';
import { Box, Image as ChakraImage} from '@chakra-ui/react';
import { Metadata } from "@components/magnolia/Types";

interface ImageProps {
  image: {
    "@name": string
    "@path": string;
    "@id": string;
    "@link": string;
    metadata: {
      fileName: string;
      mimeType: string;
      caption: string;
      fileSize: number;
      height: number;
      width: number;
      title: string; // dup caption
      format: string; // dup mimeType
      coverage: string;
      publisher: string;
      rights: string;
      source: string;
      creator: Array<string>;
      contributor: Array<string>;
      subject: Array<string>;
      date: string;
      created: string;
      modified: string;
    }
  }
  metadata: Metadata;
}
const Image = ( props : ImageProps): React.ReactElement => {
    return (
      <Box boxSize='md'>
        <ChakraImage 
          src={process.env.NEXT_PUBLIC_MGNL_HOST + '/dam/' + props.image['@id'] + props.image['@path']}
          alt={props.image.metadata.caption} 
          />
      </Box>
    );
  }

export default Image;

