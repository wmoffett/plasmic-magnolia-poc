import { ChakraProvider } from '@chakra-ui/react';
import { getPage, PageProps } from '@components/magnolia/api';
import config from '@components/magnolia/config';
import PageContainer from "@components/PageContainer";
import theme from '@styles/theme';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { EditablePage } from '@components/magnolia/EditablePage';
import { ParseMagnoliaPage } from '@components/parser'

interface PageParams {
  rollupType: string;
  stateOrCareType: string;
  city: string;
  provider: string;
}

interface ProviderProps extends PageProps{
  pageParams: PageParams;
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  const pagePath = `/senior-living/stateOrCareType/city/provider`

  const {
    page,
    templateAnnotations,
  } = await getPage({pagePath: pagePath});

  return {
    props: {
      page: page,
      templateAnnotations: templateAnnotations,
      pageParams: {
        stateOrCareType: context.params?.stateOrCareType,
        city: context.params?.city,
        provider: context.params?.provider,
      }
    },
  };
};

export default function ProviderPage(
  props: ProviderProps
): JSX.Element {
  const {
    page,
    templateAnnotations,
    pageParams,
  } = props;

  const values = {
    'rollupType': pageParams.rollupType ? pageParams.rollupType : '',
    'stateOrCareType': pageParams.stateOrCareType ? pageParams.stateOrCareType : '',
    'city': pageParams.city ? pageParams.city : '',
    'provider': pageParams.provider ? pageParams.provider : ''
  }
  
  ParseMagnoliaPage({source: page, values: values, strip: true});
  
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
