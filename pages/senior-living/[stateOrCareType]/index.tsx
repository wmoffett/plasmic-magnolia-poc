import { ChakraProvider } from '@chakra-ui/react';
import { getPage, PageProps } from '@components/magnolia/api';
import config from '@components/magnolia/config';
import PageContainer from "@components/PageContainer";
import theme from '@styles/theme';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { EditablePage } from "@components/magnolia/EditablePage";
import { ParseMagnoliaPage } from '@components/parser'

interface PageParams {
  stateOrCareType: string;
}

interface CareTypePageProps extends PageProps{
  pageParams: PageParams;
}


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  const {
    page,
    templateAnnotations,
  } = await getPage({pagePath: `/senior-living/stateOrCareType`});

  return {
    props: {
      page: page,
      templateAnnotations: templateAnnotations,
      pageParams: {
        stateOrCareType: context.params?.stateOrCareType,
      }
    },
  };
};


export default function CareTypePage(
  props: CareTypePageProps
) {
  const {
    page,
    templateAnnotations,
    pageParams
  } = props;

  ParseMagnoliaPage(
    {
      source: page, 
      values: {
        'stateOrCareType': pageParams.stateOrCareType ? pageParams.stateOrCareType : '',
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