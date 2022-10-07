import { ChakraProvider } from '@chakra-ui/react';
import { getPage, PageProps } from '@components/magnolia/api';
import config from '@components/magnolia/config';
import PageContainer from "@components/PageContainer";
import theme from '@styles/theme';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { EditablePage } from "@components/magnolia/EditablePage";
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  
const catchall = context.params?.catchall;
const pagePath = typeof catchall === 'string'
    ? catchall
    : Array.isArray(catchall)
    ? `/${[...new Set(catchall)].join('/')}`
    : `/home`;
  const {
    page,
    templateAnnotations,
  } = await getPage({pagePath: pagePath});

  // Use revalidate if you want incremental static regeneration
  return {
    props: {
      page: page,
      templateAnnotations: templateAnnotations,
    }
  };
};

export default function CatchAllPage(
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

