import {
  Box,
  Heading,
  HStack,
} from "@chakra-ui/react";

import { EditableArea } from "@magnolia/react-editor";
import Container from "@components/Container";


interface Metadata {
  // see below from example response contract
  name: string;
  "@path": string;
  "@id": string; 
  "@nodeType": string;
  "mgnl:lastModified": string;
  "mgnl:template": string;
  "mgnl:created": string;
  "@nodes": Array<string>;
}

interface BasicProps {
  title: string;
  main: any;
  extras: any;
  metadata: Metadata;
}

const Basic = (props : BasicProps) => {

  const { main, extras, title, metadata } = props;
  return (
    <Container>
      <HStack spacing={8}>
        <Box width="container.xl">
          <Heading as="h1" size={"xl"} m={1}>{title}</Heading>
          <EditableArea className="Area" content={main} />
        </Box>
        <Box>
          <EditableArea className="Area" content={extras} />
        </Box>
      </HStack>
      
    </Container>
  );
}

export default Basic;

// Down and dirty
// this is an example response object from magnolia
// {
//   title: "Basic page",
//   main: {
//     "0": {
//       "@name": "0",
//       "@path": "/nextjs-ssg-minimal/basic/main/0",
//       "@id": "e5653b43-b037-476f-877b-9979cbb68c5e",
//       "@nodeType": "mgnl:component",
//       text: "Headlines",
//       "mgnl:lastModified": "2022-09-15T16:27:13.545-07:00",
//       "mgnl:template": "spa-lm:components/headline",
//       "mgnl:created": "2022-09-15T13:53:40.625-07:00",
//       "@nodes": []
//     },
//     "@name": "main",
//     "@path": "/nextjs-ssg-minimal/basic/main",
//     "@id": "9f0650a7-ffa4-410f-9f30-8c9a100b1a33",
//     "@nodeType": "mgnl:area",
//     "mgnl:lastModified": "2022-09-16T11:57:33.610-07:00",
//     "mgnl:created": "2022-09-15T13:53:40.622-07:00",
//     "00": {
//       "@name": "00",
//       "@path": "/nextjs-ssg-minimal/basic/main/00",
//       "@id": "cb52115b-7b78-4833-bd95-217c59e28cb5",
//       "@nodeType": "mgnl:component",
//       richText: "<p>Add some copy into this paragraph</p>\n",
//       "mgnl:lastModified": "2022-09-16T11:57:47.316-07:00",
//       "mgnl:template": "spa-lm:components/paragraph",
//       "mgnl:created": "2022-09-16T11:57:47.316-07:00",
//       "@nodes": []
//     },
//     "@nodes": [ "0", "00" ]
//   },
//   extras: {
//     "@path": "/nextjs-ssg-minimal/basic/extras",
//     "@nodes": [],
//     "@id": "/nextjs-ssg-minimal/basic/extras"
//   },
//   metadata: {
//     "@name": "basic",
//     "@path": "/nextjs-ssg-minimal/basic",
//     "@id": "bc534c30-0145-4202-b11f-0cb45369add5",
//     "@nodeType": "mgnl:page",
//     "mgnl:lastModified": "2022-09-16T11:57:33.610-07:00",
//     "mgnl:template": "nextjs-ssg-minimal-lm:pages/basic",
//     "mgnl:created": "2022-09-15T12:34:58.881-07:00",
//     "@nodes": [ "main" ]
//   }
// }
