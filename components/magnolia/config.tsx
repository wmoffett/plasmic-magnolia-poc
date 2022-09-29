
import Basic from '@components/magnolia/pages/Basic';
import Contact from '@components/magnolia/pages/Contact';
import Headline from '@components/magnolia/components/Headline';
import Image from '@components/magnolia/components/Image';
import Paragraph from '@components/magnolia/components/Paragraph';
import Expander from '@components/magnolia/components/Expander';
import List from '@components/magnolia/components/List';
import Item from '@components/magnolia/components/Item';
import  TwoColumn from "@components/magnolia/components/TwoColumn";
import  ThreeColumn from "@components/magnolia/components/ThreeColumn";

const config = {
  componentMappings: {
    'spa-lm:pages/basic': Basic,
    'spa-lm:pages/contact': Contact,
    'nextjs-ssg-minimal-lm:pages/basic': Basic,
    'nextjs-ssg-minimal-lm:pages/contact': Contact,
    'spa-lm:components/headline': Headline,
    'spa-lm:components/image': Image,
    'spa-lm:components/paragraph': Paragraph,
    'spa-lm:components/expander': Expander,
    'spa-lm:components/list': List,
    'spa-lm:components/listItem': Item,
    'spa-lm:components/twocolumn': TwoColumn,
    'spa-lm:components/threecolumn': ThreeColumn,
  },
};

export default config;