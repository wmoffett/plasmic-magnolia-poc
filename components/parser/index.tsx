import { isObject, isString } from 'lodash';
/** 
 * Simple Magnolia Parser to be use to replace content tags {foo} with values in a page response.
 * @author William Moffett <wmoffett@caring.com> 
 */
interface ParsingProps {
  source: string;
  values: {
    [key: string]: string|number|boolean|object|{ url: string; }[];
  },
  strip: boolean;
}

export const ParseMagnoliaPage = (props: ParsingProps) => {

  const { source, values, strip } = props; 

  Object.keys(source).forEach(key => {

    if (!key.startsWith('@') && !key.startsWith('mgnl:') && !key.startsWith('jcr:')) {

      if (isString(source[key])){
        source[key] = Parser({source: source[key], values: values, strip: strip});
      }
    
      if (isObject(source[key])){
        ParseMagnoliaPage({source: source[key], values: values, strip: strip})
      }
    }
  });
  
}

function getProperty(key, props) {

  let notation = key.split( "." );

  for(let i = 0; i < notation.length; i++ ){
    if(typeof props[notation[i]] != 'undefined') {
      props = props[notation[i]];
    }
  }
  return props;
}

export const Parser = (props: ParsingProps): String => {

  const keys = props.source.match(/\{[\w\.]+\}/g);

  keys && keys.forEach((search) => { 
    
    const key = search.split(/{|}/g)[1];

    if(key.includes('.')){

      props.source = 
        props.source.replace(
          search,
          getProperty(key, props.values)
        );

    } else if (typeof props.values[key] != 'undefined') {

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