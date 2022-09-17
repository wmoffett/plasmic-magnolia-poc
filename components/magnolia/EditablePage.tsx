
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


// static propTypes = {
//   children: PropTypes.elementType,
//   content: PropTypes.object,
//   templateDefinitions: PropTypes.object,
//   templateAnnotations: PropTypes.object,
//   config: PropTypes.shape({
//     componentMappings: PropTypes.object
//   })
// }

// static defaultProps = {
//   children: null,
//   content: null,
//   templateDefinitions: null,
//   templateAnnotations: null,
//   config: {
//     componentMappings: {}
//   }
// }

// EditablePage extends React.PureComponent
//  : React.PureComponent
export function EditablePage({
  content,
  config,
  templateAnnotations 
}:EditablePageProps) {
  return <MognoliaEditablePage content={content} config={config} templateAnnotations={templateAnnotations} />
}

export const EditablePageMeta: ComponentMeta<EditablePageProps> = {
  name: "EditablePage",
  displayName: "Editable Page",
  description: "Magnolia Editable Page",
  importName: "EditablePage",
  importPath: './components/',
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
};