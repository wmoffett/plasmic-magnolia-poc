
import DefaultPage from '@components/magnolia/pages/DefaultPage';
import OneColumnPage   from '@components/magnolia/pages/OneColumnPage';
import TwoColumnPage from '@components/magnolia/pages/TwoColumnPage';
import Headline from '@components/magnolia/components/Headline';
import Image from '@components/magnolia/components/Image';
import Paragraph from '@components/magnolia/components/Paragraph';
import Expander from '@components/magnolia/components/Expander';
import List from '@components/magnolia/components/List';
import Item from '@components/magnolia/components/Item';
import  TwoColumn from "@components/magnolia/components/TwoColumn";
import  ThreeColumn from "@components/magnolia/components/ThreeColumn";

import Basic from '@components/magnolia/pages/Basic';
const config = {
  componentMappings: {
    'base-lm:pages/default': DefaultPage,
    'base-lm:pages/1column': OneColumnPage,
    'base-lm:pages/2column': TwoColumnPage,
    'base-lm:components/headline': Headline,
    'base-lm:components/image': Image,
    'base-lm:components/paragraph': Paragraph,
    'base-lm:components/expander': Expander,
    'base-lm:components/list': List,
    'base-lm:components/listItem': Item,
    'base-lm:components/twocolumn': TwoColumn,
    'base-lm:components/threecolumn': ThreeColumn,
  },
};

export default config;