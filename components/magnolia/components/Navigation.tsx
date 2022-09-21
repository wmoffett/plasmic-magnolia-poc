import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { languages } from '~/utils';

let BASENAME = '';

// In author build all links should go via preview API e.g. /contact => /api/preview?slug=/contact

function renderLink(item) {
  return (
    <BreadcrumbItem key={item['@id']}>
      <BreadcrumbLink href={BASENAME + item['@path'] || '/'}>
        {item['@name']}
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}

function Navigation(props) {
  const { content, nodeName, basename } = props;

  BASENAME = basename;

  return (
    <Flex justify="space-between">
      <Breadcrumb>
        {content['@nodes'].length > 0 &&
          content['@nodes'].map((nodeName) =>
            renderLink(content[nodeName])
          )}
      </Breadcrumb>
      <Menu>
        <MenuButton as={Button}>Languages</MenuButton>
        <MenuList>
          {languages.map((language, i) => (
            <MenuItem
              onClick={() =>
                (window.location.href =
                  '/' + (i === 0 ? '' : language))
              }
              key={language}
            >
              {language}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Navigation;
