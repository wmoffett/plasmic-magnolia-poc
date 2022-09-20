import * as React from "react";
import {
  PlasmicComponent,
  extractPlasmicQueryData,
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import type { 
  GetStaticPaths, 
  GetStaticProps 
} from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import { PLASMIC } from "../plasmic-init";
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@styles/theme';
// import Navigation from '../templates/components/Navigation';
import config from '@components/magnolia/config';
import { 
  getStaticPaths as mgnlGetStaticPaths, 
  getStaticProps as mgnlGetStaticProps
} from "@components/magnolia/api";

export const getStaticPaths: GetStaticPaths = async () => {

  let paths =  await mgnlGetStaticPaths();
    // Magnolia is our primary data provider
    // if we were using plasmic to do the same thing.
    // const pageModules = await PLASMIC.fetchPages();
    // return {
    //   paths: pageModules.map((mod) => ({
    //     params: {
    //       catchall: mod.path.substring(1).split("/"),
    //     },
    //   })),
    //   fallback: "blocking",
    // };

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  // Magnolia LOADING
  const { isPagesApp, isPagesAppEdit, basename, page, pagenav, templateAnnotations} = await mgnlGetStaticProps(context);

  // PLASMIC LOADING
  const { catchall } = context.params ?? {};
  const plasmicPath = typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);

  if (!plasmicData) {
    // non-Plasmic catch-all
    return { props: {} };
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  // Cache the necessary data fetched for the page
  // The Plasmic Component, ie template by Page Name.
  // console.log('!pageMeta.displayName', pageMeta.displayName);
  // component={pageMeta.displayName}
  const queryCache = await extractPlasmicQueryData(
    <ChakraProvider theme={theme}>
      <PlasmicRootProvider
        loader={PLASMIC}
        prefetchedData={plasmicData}
        pageParams={pageMeta.params}
      >
        <PlasmicComponent 
          component={pageMeta.displayName} 
          componentProps={{
            editablePage:{
              props: {
                content: page,
                config: config,
                templateAnnotations: templateAnnotations
              }
            }
          }}
        />
      </PlasmicRootProvider>
     </ChakraProvider>
   );
  // Use revalidate if you want incremental static regeneration
  return {
    props: {
      isPagesApp: isPagesApp,
      isPagesAppEdit: isPagesAppEdit,
      basename: basename,
      page: page,
      pagenav: pagenav,
      templateAnnotations: templateAnnotations,
      plasmicPath: plasmicPath,
      plasmicData: plasmicData,
      queryCache: queryCache
    },
    revalidate: 60
  };
}
interface catchallProps {
  isPagesApp:any;
  page:any;
  templateAnnotations: any;
  pagenav:any;
  isPagesAppEdit:any;
  basename:any;
  plasmicPath: string;
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, any>;
}

export default function PlasmicAndMagnoliaLoaderPage(props: catchallProps) {

  const { page, templateAnnotations, pagenav, isPagesAppEdit, basename, plasmicData, queryCache } = props;
  const router = useRouter();
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  const pageMeta = plasmicData.entryCompMetas[0];

  console.log('!page', page);
  return (
    <>
      {/* 
      The original Magnolia Render Flow
      <div className={isPagesAppEdit ? 'disable-a-pointer-events' : ''}>
        {pagenav && <Navigation content={pagenav} nodeName={nodeName} basename={basename} />}
        {page && <EditablePage content={page} config={config} templateAnnotations={templateAnnotations} />}
      </div> */}
      <ChakraProvider theme={theme}>
        <PlasmicRootProvider
          loader={PLASMIC}
          prefetchedData={plasmicData}
          prefetchedQueryData={queryCache}
          pageParams={pageMeta.params}
          pageQuery={router.query}
        >
          <PlasmicComponent 
            component={pageMeta.displayName}
            componentProps={{
              editablePage:{
                props: {
                  content: page,
                  config: config,
                  templateAnnotations: templateAnnotations
                }
              }
            }}
          />
        </PlasmicRootProvider>
      </ChakraProvider>
  </>
  );
}
