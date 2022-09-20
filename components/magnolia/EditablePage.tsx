
import React from 'react';
import { EditablePage as MognoliaEditablePage } from "@magnolia/react-editor";
import { ComponentMeta } from "@plasmicapp/host";


interface EditablePageProps {
  content:any;
  config?: { 
    [key:string]: JSX.Element;
  }
  templateAnnotations:any;
}

export function EditablePage({
  content,
  config,
  templateAnnotations 
}: EditablePageProps) {

  // console.log('loaded EditablePage', content);
  // console.log('loaded config', config);
  // console.log('loaded templateAnnotations', templateAnnotations);

  return <MognoliaEditablePage content={content} config={config} templateAnnotations={templateAnnotations} />
}

export const EditablePageMeta: ComponentMeta<EditablePageProps> = {
  name: "EditablePage",
  displayName: "Editable Page",
  description: "Magnolia Editable Page",
  importName: "EditablePage",
  importPath: './components/magnolia/',
  props: {
    content: {
      type: "object",
      displayName: "Content",
      description: "Page content"
    },
    config: {
      type: "object",
      displayName: "Config",
      description: "List of component Mappings"
    },
    templateAnnotations: {
      type: "object",
      displayName: "Template Annotations",
      description: "Template Annotations"
    },
  },
  providesData: true
};