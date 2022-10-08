import { ChakraProvider } from '@chakra-ui/react';
import { getPage, PageProps, getNav, NavProps } from '@components/magnolia/api';
import config from '@components/magnolia/config';
import PageContainer from "@components/PageContainer";
import theme from '@styles/theme';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { EditablePage } from "@components/magnolia/EditablePage";

import { Navigation } from "@components/magnolia/components/Navigation";


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


  const navigation = await getNav();

  console.log(navigation.content["@nodes"]);

  // Use revalidate if you want incremental static regeneration
  return {
    props: {
      page: page,
      templateAnnotations: templateAnnotations,
      navigation: navigation,
    }
  };
};


interface CatchAllProps extends PageProps {
  navigation: NavProps
}

export default function CatchAllPage(
  props: CatchAllProps
) {
  const {
    page,
    templateAnnotations,
    navigation
  } = props;


  return (
    <>     
      <ChakraProvider theme={theme}>
        <PageContainer>
        {/* <Navigation 
          content={navigation.content} 
          nodeName={navigation.nodeName} 
          basename={navigation.basename} 
        /> */}
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

