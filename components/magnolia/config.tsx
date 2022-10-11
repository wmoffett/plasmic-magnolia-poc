import Expander from '@components/magnolia/components/Expander';
import Headline from '@components/magnolia/components/Headline';
import Image from '@components/magnolia/components/Image';
import Item from '@components/magnolia/components/Item';
import List from '@components/magnolia/components/List';
import Paragraph from '@components/magnolia/components/Paragraph';
import ThreeColumn from '@components/magnolia/components/ThreeColumn';
import TwoColumn from '@components/magnolia/components/TwoColumn';
import Basic from '@components/magnolia/pages/Basic';
import Contact from '@components/magnolia/pages/Contact';
import SearchTile from '@components/Search/SearchTile';

const config = {
  componentMappings: {
    'spa-lm:pages/basic': Basic,
    'spa-lm:pages/contact': Contact,
    'next-ssg-minimal-lm:pages/basic': Basic,
    'next-ssg-minimal-lm:pages/contact': Contact,
    'spa-lm:components/headline': Headline,
    'spa-lm:components/image': Image,
    'spa-lm:components/paragraph': Paragraph,
    'spa-lm:components/expander': Expander,
    'spa-lm:components/list': List,
    'spa-lm:components/listItem': Item,
    'spa-lm:components/twocolumn': TwoColumn,
    'spa-lm:components/threecolumn': ThreeColumn,
    'dxp-module:components/searchTile': SearchTile,
  },
};

export default config;
