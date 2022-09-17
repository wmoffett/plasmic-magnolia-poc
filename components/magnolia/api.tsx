import type { GetStaticPropsContext } from "next";

const defaultBaseUrl = process.env.NEXT_PUBLIC_MGNL_HOST;
const pagesApi = defaultBaseUrl + '/.rest/delivery/pages/v1';
const templateAnnotationsApi = defaultBaseUrl + '/.rest/template-annotations/v1';
const pagenavApi = defaultBaseUrl + '/.rest/delivery/pagenav/v1';
const nodeName = process?.env?.NEXT_PUBLIC_MGNL_NODE_NAME ?? "/nextjs-ssg-minimal";

function getLanguages() {

  const languages = process?.env?.NEXT_PUBLIC_MGNL_LANGUAGES?.split(' ') ?? [];

  return languages;

}

function getCurrentLanguage(url) {

  let languages = getLanguages();

  for (let i = 0; i < languages.length; i++) {
    const language = languages[i];

    if (url.indexOf('/' + language) > -1) return language;
  }

  return languages[0];
}

function setURLSearchParams(url, param) {
  return url + (url.indexOf('?') > -1 ? '&' : '?') + param;
}

// getStaticPath
// This is a custom Magnolia function that acts on the nodes byrefrence
// on the pagenav API 
// http://localhost:8080/magnoliaAuthor/.rest/delivery/pagenav/v1/nextjs-ssg-minimal
function getStaticPath(node, paths) {

  let catchall = node['@path'].replace(nodeName, '');
  catchall = catchall.split('/');
  catchall.shift();

  getLanguages().forEach((language, i) => {
    let i18ncatchall = JSON.parse(JSON.stringify(catchall));
    if (i !== 0) i18ncatchall.unshift(language);
    paths.push({ params: { catchall: i18ncatchall } });
  });

  node['@nodes'].forEach((nodeName) => getStaticPath(node[nodeName], paths));
}

export async function getStaticPaths(): Promise<string[]> {

  let paths = [];
  const navRes = await fetch(pagenavApi + nodeName);
  const nav = await navRes.json();

  getStaticPath(nav, paths);

  return paths;
}

interface StaticProps {
  isPagesApp: any;
  isPagesAppEdit: boolean;
  basename: string;
  page: string;
  pagenav: string;
  templateAnnotations: any;
}

export async function getStaticProps(context : GetStaticPropsContext): Promise<StaticProps> {

  const resolvedUrl = context.preview
  ? context.previewData?.query?.slug
  : context.params?.catchall
  ? '/' + context.params.catchall.join('/')
  : '';
  const currentLanguage = getCurrentLanguage(resolvedUrl);
  const isDefaultLanguage = currentLanguage === getLanguages()[0];
  const isPagesApp = context.previewData?.query?.mgnlPreview || null;
  const isPagesAppEdit = isPagesApp === 'false';

  global.mgnlInPageEditor = isPagesAppEdit;

  // Find out page path in Magnolia
  let pagePath = context.preview
    ? nodeName + resolvedUrl.replace(new RegExp('.*' + nodeName), '')
    : nodeName + resolvedUrl;

  if (!isDefaultLanguage) {
    pagePath = pagePath.replace('/' + currentLanguage, '');
  }

  // Fetching page content
  const pagesRes = await fetch(setURLSearchParams(pagesApi + pagePath, 'lang=' + currentLanguage));
  const page = await pagesRes.json();

  // Fetching page navigation
  const pagenavRes = await fetch(setURLSearchParams(pagenavApi + nodeName, 'lang=' + currentLanguage));
  const pagenav = await pagenavRes.json();
  // Fetch template annotations only inside Magnolia WYSIWYG

  let templateAnnotations = {};
  if (isPagesApp) {
    const templateAnnotationsRes = await fetch(templateAnnotationsApi + pagePath);
    templateAnnotations = await templateAnnotationsRes.json();
  }

  return {
    isPagesApp: isPagesApp,
    isPagesAppEdit: isPagesApp === 'false',
    basename: isDefaultLanguage ? '' : '/' + currentLanguage,
    page: page,
    pagenav: pagenav,
    templateAnnotations: templateAnnotations
  }
}
