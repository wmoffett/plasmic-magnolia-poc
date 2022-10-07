
import React from 'react';
import { EditablePage as MognoliaEditablePage } from "@magnolia/react-editor";
import { ComponentMeta } from "@plasmicapp/host";

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