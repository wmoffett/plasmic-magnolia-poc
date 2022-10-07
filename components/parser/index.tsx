import { isObject, isString } from 'lodash';

interface ParsingProps {
  source: string;
  values: {
    [key: string]: string|number;
  },
  strip: boolean;
}

export const ParseMagnoliaPage = (props: ParsingProps) => {

  const { source, values, strip } = props; 

  Object.keys(source).forEach(key => {

    if (!key.startsWith('@') && !key.startsWith('mgnl:') && !key.startsWith('jcr:')) {

      if (isString(source[key])){
        source[key] = Parser({source: source[key],  values: values, strip: strip});
      }
    
      if (isObject(source[key])){
        ParseMagnoliaPage({source: source[key], values: values, strip: strip})
      }
    }
  });
}

export const Parser = (props: ParsingProps): String => {

  const keys = props.source.match(/\{[\w]+\}/g);

  keys && keys.forEach((search) => { 
    
    const key = search.split(/{|}/g)[1];

    if (typeof props.values[key] != 'undefined') {
      props.source = 
        props.source.replace(
          search,
          props.values[key].toString()
        );
    } 

    if(props.strip) {
      props.source = 
        props.source.replace(
          search,
          ''
        );
    }
  });

  return (
     props.source
  );
}

export default Parser;