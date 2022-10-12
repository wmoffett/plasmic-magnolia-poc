import Expander from '@components/magnolia/components/Expander';
import Headline from '@components/magnolia/components/Headline';
import Image from '@components/magnolia/components/Image';
import Item from '@components/magnolia/components/Item';
import List from '@components/magnolia/components/List';
import Paragraph from '@components/magnolia/components/Paragraph';
import ThreeColumn from '@components/magnolia/components/ThreeColumn';
import TwoColumn from '@components/magnolia/components/TwoColumn';
import DefaultPage from '@components/magnolia/pages/DefaultPage';
import OneColumnPage from '@components/magnolia/pages/OneColumnPage';
import TwoColumnPage from '@components/magnolia/pages/TwoColumnPage';

import SearchTile from '@components/Search/SearchTile';
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
    'dxp-module:components/searchTile': SearchTile,
  },
};

export default config;
