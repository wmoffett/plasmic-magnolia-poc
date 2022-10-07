import { ChakraProvider } from '@chakra-ui/react';
import { getPage, PageProps } from '@components/magnolia/api';
import config from '@components/magnolia/config';
import PageContainer from "@components/PageContainer";
import theme from '@styles/theme';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { EditablePage } from "@components/magnolia/EditablePage";


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  const {
    page,
    templateAnnotations,
  } = await getPage({pagePath: `/senior-living/stateOrCareType`});

  return {
    props: {
      page: page,
      templateAnnotations: templateAnnotations
    },
  };
};


export default function CareTypePage(
  props: PageProps
) {
  const {
    page,
    templateAnnotations,
  } = props;

  return (
    <>     
      <ChakraProvider theme={theme}>
        <PageContainer>
          <EditablePage 
            content={page} 
            config={config} 
            templateAnnotations={templateAnnotations} 
          />
        </PageContainer>
      </ChakraProvider>
    </>
  );
}