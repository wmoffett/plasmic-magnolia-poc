import { Box } from "@chakra-ui/react";
import Footer from "@components/Footer";

interface Props {
  // pageTitle: string;
  // pageDescription: string;
  children: React.ReactNode;
}

const PageContainer: React.FC<Props> = ({
  children,
}) => {
  return (
    <>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        {children}
        <Box marginTop="auto">
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default PageContainer;