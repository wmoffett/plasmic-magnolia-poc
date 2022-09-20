import React from 'react';
import { 
  Box
} from '@chakra-ui/react';

// props.richText {
//   richText: '<p>extra paragraph</p>\n',
//   items: {
//     '@path': '/nextjs-ssg-minimal/basic/extras/0/items',
//     '@nodes': [],
//     '@id': '/nextjs-ssg-minimal/basic/extras/0/items'
//   },
//   metadata: {
//     '@name': '0',
//     '@path': '/nextjs-ssg-minimal/basic/extras/0',
//     '@id': '1c475137-27b7-414c-949c-6b0f64e506e8',
//     '@nodeType': 'mgnl:component',
//     'mgnl:lastModified': '2022-09-16T15:09:51.736-07:00',
//     'mgnl:template': 'spa-lm:components/paragraph',
//     'mgnl:created': '2022-09-16T15:09:51.736-07:00',
//     '@nodes': []
//   }
// }
function Paragraph(props) {
  return (
  <Box textStyle='paragraph' dangerouslySetInnerHTML={{ __html: props.richText }} />
  );
}

export default Paragraph;