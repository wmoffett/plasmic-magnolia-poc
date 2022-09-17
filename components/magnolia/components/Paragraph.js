import React from 'react';

function Paragraph(props) {


  console.log("props.richText", props.richText);

  return <div className='Paragraph' dangerouslySetInnerHTML={{ __html: props.richText }} />;



}

export default Paragraph;