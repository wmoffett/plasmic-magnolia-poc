
import React from 'react';
import { EditablePage as MagnoliaEditablePage } from "@magnolia/react-editor";

interface EditablePageProps {
  content:any;
  config?: {
    componentMappings: {
      [key: string]: (props: any) => JSX.Element;
    }
  },
  templateAnnotations:any;
}

export function EditablePage({
  content,
  config,
  templateAnnotations 
}: EditablePageProps) {

  return <MagnoliaEditablePage content={content} config={config} templateAnnotations={templateAnnotations} />
}