const defaultBaseUrl = process.env.NEXT_PUBLIC_MGNL_HOST;
const pagesApi = defaultBaseUrl + '/.rest/delivery/pages/v1';
const templateAnnotationsApi =
  defaultBaseUrl + '/.rest/template-annotations/v1';
const pagenavApi = defaultBaseUrl + '/.rest/delivery/pagenav/v1';
const nodeName =
  process?.env?.NEXT_PUBLIC_MGNL_NODE_NAME ?? '/nextjs-ssg-minimal';

export function getLanguages() {
  const languages =
    process?.env?.NEXT_PUBLIC_MGNL_LANGUAGES?.split(' ') ?? [];

  return languages;
}

export interface NavProps {
  content: object;
}

export async function getNav(): Promise<NavProps> {

  const pagenavRes = await fetch(pagenavApi + nodeName);
  const navigation = await pagenavRes.json();

  return {
    content: navigation
  }
}

interface GetPageProps{
  pagePath: string;
}

export interface PageProps {
  page: string;
  templateAnnotations: any;
}

export async function getPage(
  props: GetPageProps
): Promise<PageProps> {

  const { pagePath } = props;

  const isPagesApp = 'false';

  global.mgnlInPageEditor = isPagesApp === 'false';


  // Fetching page content
  const pagesRes = await fetch(pagesApi + pagePath);

  const page = await pagesRes.json();

  let templateAnnotations = {};
  if (isPagesApp) {
    const templateAnnotationsRes = await fetch(
      templateAnnotationsApi + pagePath
    );
    templateAnnotations = await templateAnnotationsRes.json();
  }

  return {
    page: page,
    templateAnnotations: templateAnnotations,
  };
}
