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
} from "@chakra-ui/react";
import { 
  ComponentMeta,
} from "@plasmicapp/host";
import { getLanguages } from "../api";

function renderLink(item) {
  return (
    <BreadcrumbItem key={item["@id"]}>
      <BreadcrumbLink href={item["@path"] || "/"}>
        {item["@name"]}
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}

export function Navigation(props) {

  const { content } = props;
  // const languages = getLanguages();

  if (typeof content["@nodes"] =='undefined') {
    return(<></>);
  }

  return (
    <Flex justify="space-between">
      <Breadcrumb>
        {content["@nodes"].length > 0 &&
          content["@nodes"].map((nodeName) =>
            renderLink(content[nodeName])
          )}
      </Breadcrumb>
      {/* <Menu>
        <MenuButton as={Button}>Languages</MenuButton>
        <MenuList>
          {languages.map((language, i) => (
            <MenuItem
              onClick={() =>
                (window.location.href =
                  "/" + (i === 0 ? "" : language))
              }
              key={language}
            >
              {language}
            </MenuItem>
          ))}
        </MenuList>
      </Menu> */}
    </Flex>
  );
}

export default Navigation;

export interface NavigationProps {
  content: []; 
  nodeName: string; 
  basename: string;
}

export const NavigationMeta: ComponentMeta<NavigationProps> = {
  name: "Navigation",
  displayName: "Navigation",
  description: "This is a navigation component",
  importName: "Navigation",
  importPath: "./components/magnolia/components/",
  props: {
    pagenav:{
      type: "object",
      defaultValue:
      {
        "@name": "nextjs-ssg-minimal",
        "@path": "/nextjs-ssg-minimal",
        "@id": "7afa0424-eaf2-418c-a192-ddbbab99e45a",
        "@nodeType": "mgnl:page",
        title: "NEXTJS SSG Minimal",
        home: {
          "@name": "home",
          "@path": "/nextjs-ssg-minimal/home",
          "@id": "192c7265-deaf-48c7-8f45-5ae56870a9c3",
          "@nodeType": "mgnl:page",
          hideInNav: false,
          title: "Home",
          noCache: false,
          "@nodes": []
        },
        basic: {
          "@name": "basic",
          "@path": "/nextjs-ssg-minimal/basic",
          "@id": "bc534c30-0145-4202-b11f-0cb45369add5",
          "@nodeType": "mgnl:page",
          title: "Basic page template title is very very long",
          "@nodes": []
        },
        contact: {
          "@name": "contact",
          "@path": "/nextjs-ssg-minimal/contact",
          "@id": "6fc97992-1ac6-4b97-8ecf-a474a1a70a6b",
          "@nodeType": "mgnl:page",
          title: "Contact",
          "@nodes": []
        },
        "@nodes": [ "home", "basic", "contact" ]
      }
    },
    nodeName: {
      type: "string",
      defaultValue:"/nextjs-ssg-minimal",
    },
    basename:{
      type: "string",
      defaultValue:"",
    },
  },
  providesData: false
};
