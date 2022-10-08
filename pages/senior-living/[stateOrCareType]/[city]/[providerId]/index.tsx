import { ChakraProvider } from '@chakra-ui/react';
import { getPage, PageProps } from '@components/magnolia/api';
import config from '@components/magnolia/config';
import PageContainer from "@components/PageContainer";
import theme from '@styles/theme';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { EditablePage } from '@components/magnolia/EditablePage';
import { ParseMagnoliaPage } from '@components/parser'
import { getProvider, Provider } from "@components/providers/api";
import { isArray } from 'lodash';
interface PageParams {
  rollupType: string;
  stateOrCareType: string;
  city: string;
  providerId: string;
}

interface ProviderProps extends PageProps{
  pageParams: PageParams;
  provider: Provider;
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  const pagePath = `/senior-living/stateOrCareType/city/provider`

  const {
    page,
    templateAnnotations,
  } = await getPage({pagePath: pagePath});

  const slug 
    = typeof context.params?.providerId == 'undefined' ? '' : isArray(context.params?.providerId) ? context.params?.providerId.join("/") : context.params?.providerId;
  
  const provider 
    = await getProvider(
      { 
        slug: slug == 'provider' ? 'cambridge-village-of-apex-27502' : slug}
    );

  return {
    props: {
      page: page,
      templateAnnotations: templateAnnotations,
      pageParams: {
        stateOrCareType: context.params?.stateOrCareType,
        city: context.params?.city,
        providerId: context.params?.providerId,
      },
      provider: provider
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
    provider
  } = props;
  
  ParseMagnoliaPage(
  {
    source: page, 
    values: {
      'rollupType': pageParams.rollupType ? pageParams.rollupType : '',
      'stateOrCareType': pageParams.stateOrCareType ? pageParams.stateOrCareType : '',
      'city': pageParams.city ? pageParams.city : '',
      'providerId': pageParams.providerId ? pageParams.providerId : '',
      'provider': provider
    }, 
    strip: false}
  );
  
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
