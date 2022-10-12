import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Grid,
  GridItem,

} from "@chakra-ui/react";

import { EditableArea } from "@magnolia/react-editor";
import Container from "@components/Container";
import { Metadata } from "@components/magnolia/Types";

interface TwoColumnPageProps {
  title: string;
  main: any;
  sidebar: any;
  metadata: Metadata;
}

const TwoColumnPage = (props : TwoColumnPageProps) => {

  const { main, sidebar, title, metadata } = props;

  return (
    
    <Box as="main" role="contentinfo" paddingY="2" marginX="auto">
      <Container>
        <HStack spacing={0}>
        <Grid 
          width={"container.xl"}
          templateRows='repeat(1, 1fr)'
          templateColumns='repeat(12, 1fr)'
          gap={4}
        >
          <GridItem colSpan={10} width="container.lg">
            <Heading as="h1" size={"xl"} m={1}>{title}</Heading>
            <EditableArea content={main} />
          </GridItem>
          <GridItem colSpan={2} paddingBlockStart={12}>
            <EditableArea content={sidebar} />
          </GridItem>
        </Grid>
        </HStack>
      </Container>
    </Box>
  );
}

export default TwoColumnPage;
