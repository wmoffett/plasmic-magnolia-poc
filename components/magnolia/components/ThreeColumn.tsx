import {
  Box,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { EditableArea } from "@magnolia/react-editor";
import { Container } from "@chakra-ui/react";
interface BasicProps {
  col1: any;
  col2: any;
  col3: any;
  metadata: object;
}

const ThreeColumn = (props : BasicProps) => {

  const { col1, col2, col3, metadata } = props;

  return (
    <Box as="main" role="threecolumn" paddingY="2" marginX="auto">
      <Container px={{ base: 4, lg: 2 }} maxW="container.lg" width="container.lg">
        <HStack spacing={0}>
        <Grid 
          width={"container.lg"}
          templateRows='repeat(1, 1fr)'
          templateColumns='repeat(12, 1fr)'
          gap={4}
        >
          <GridItem colSpan={4} width="container.xs">
            <EditableArea content={col1} parentTemplateId={metadata['mgnl:template']} />
          </GridItem>
          <GridItem colSpan={4} width="container.xs">
            <EditableArea content={col2} parentTemplateId={metadata['mgnl:template']} />
          </GridItem>
          <GridItem colSpan={4} width="container.xs">
            <EditableArea content={col3}  parentTemplateId={metadata['mgnl:template']} />
          </GridItem>
        </Grid>
        </HStack>
      </Container>
    </Box>
  );
}

export default ThreeColumn;