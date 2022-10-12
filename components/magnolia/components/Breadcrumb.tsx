import {
  Breadcrumb as ChkBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";

export interface BreadcrumbProps {
  content: []; 
  nodeName: string; 
  basename: string;
}

function renderLink(item) {
  return (
    <BreadcrumbItem key={item["@id"]}>
      <BreadcrumbLink href={item["@path"] || "/"}>
        {item["@name"]}
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}

export function Breadcrumb(props) {

  const { content } = props;

  if (typeof content["@nodes"] =='undefined') {
    return(<></>);
  }

  return (
    <Flex justify="space-between">
      <ChkBreadcrumb>
        {content["@nodes"].length > 0 &&
          content["@nodes"].map((nodeName) =>
            renderLink(content[nodeName])
          )}
      </ChkBreadcrumb>
    </Flex>
  );
}

export default Breadcrumb;