import {
  Box,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { EditableArea } from "@magnolia/react-editor";
// import Container from "@components/Container";
import { Container } from "@chakra-ui/react";
interface BasicProps {
  left: any;
  right: any;
  metadata: object;
}

const TwoColumn = (props : BasicProps) => {

  const { left, right, metadata } = props;

  return (
    <Box as="main" role="twocolumn" paddingY="2" marginX="auto">
      <Container px={{ base: 4, lg: 2 }} maxW="container.lg" width="container.lg">
        <HStack spacing={0}>
          <Grid 
            width={"container.lg"}
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(12, 1fr)'
            gap={4}
          >
            <GridItem colSpan={6} width="container.xs">
              <EditableArea content={left} parentTemplateId={metadata['mgnl:template']} />
            </GridItem>
            <GridItem colSpan={6} width="container.xs">
              <EditableArea content={right} parentTemplateId={metadata['mgnl:template']} />
            </GridItem>
          </Grid>
        </HStack>
      </Container>
    </Box>
  );
}

export default TwoColumn;