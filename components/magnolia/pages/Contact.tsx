import {
  Box,
  Heading,
  HStack,
} from "@chakra-ui/react";

import { EditableArea } from "@magnolia/react-editor";
import Container from "@components/Container";

interface ContactProps {
  title: string;
  main: any;
}

const Contact = (props : ContactProps) => {

  const { title, main } = props;
  return (
    <Container>
      <HStack spacing={8}>
        <Box width="container.xl">
          <Heading as="h1" size={"xl"} m={1}>{title}</Heading>
          <EditableArea className="Area" content={main} />
        </Box>
      </HStack>
    </Container>
  );
}

export default Contact;
