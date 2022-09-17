
import Basic from '@components/magnolia/pages/Basic';
import Contact from '@components/magnolia/pages/Contact';
import Headline from '@components/magnolia/components/Headline';
import Image from '@components/magnolia/components/Image';
import Paragraph from '@components/magnolia/components/Paragraph';
import Expander from '@components/magnolia/components/Expander';
import List from '@components/magnolia/components/List';
import Item from '@components/magnolia/components/Item';

const config = {
  componentMappings: {
    'nextjs-ssg-minimal-lm:pages/basic': Basic,
    'nextjs-ssg-minimal-lm:pages/contact': Contact,
    'spa-lm:components/headline': Headline,
    'spa-lm:components/image': Image,
    'spa-lm:components/paragraph': Paragraph,
    'spa-lm:components/expander': Expander,
    'spa-lm:components/list': List,
    'spa-lm:components/listItem': Item,
  },
};

export default config;