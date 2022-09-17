import { Container as ChakraContainer } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
}

const Container = (props : Props) => {

  const { children } = props;
  return (
    <ChakraContainer px={{ base: 4, lg: 8 }} maxW="container.xl" width="container.xl">
      {children}
    </ChakraContainer>
  );
};

export default Container;