import About from '../../components/pages/About';
import CompanyOverview from '../../components/pages/CompanyOverview';
import Visionvalues from '../../components/pages/Visionvalues';
import Brand from '../../components/pages/Brand';
import Awards from '../../components/pages/Awards';
import Contact from '../../components/pages/Contact';
import NotFound from '../../components/pages/NotFound';
import Milestones from '../../components/pages/Milestones';
import Certifications from '../../components/pages/Certifications';
import EHSPolicy from '../../components/pages/EHS';
import ManagementTeam from '../../components/pages/Management';
import { pageContent } from '../lib/pageContent';
import BusinessSegments from '../../components/pages/Business';
import Institutional from '../../components/pages/Institution';
import Manufacture from '../../components/pages/Manufacture';
import Research from '../../components/pages/Research';
import Exports from '../../components/pages/Exports';
import Technical from '../../components/pages/Techinical';
import ProductsPage from '../../components/pages/ProductList';
import GlobalOps from '../../components/pages/Global_Ops';
import Global from '../../components/pages/Global';
import CustomerNetwork from '../../components/pages/CustomerNetwork';
import IndiaOps from '../../components/pages/India_Ops';

//Generate MetaData
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const slugArray = resolvedParams.slug || [];
    const slugPath = `/${slugArray.join("/")}`;
    const pageData = pageContent.find((page) => page.slug === slugPath);

    if (!pageData) {
        return {
            title: "Page Not Found | Willowood",
            description: "This page does not exist on Willowood.",
        };
    }
    return {
        title: `${pageData.title} | Willowood`,
        description: pageData?.meta?.description ?? pageData?.content.slice(0, 150),
        openGraph: {
            title: `${pageData.title} | Willowood`,
            description: pageData.content.slice(0, 200),
        },
        alternates: {
            canonical: `https://yourdomain.com${slugPath}`,
        },
    };
}

// Mapping of URL paths to Components
const PAGE_COMPONENTS = {
    '/about': About,
    '/about/company-overview': CompanyOverview,
    '/about/vision-values': Visionvalues,
    '/business/brand': Brand,
    '/about/awards-and-recognitions': Awards,
    '/about/milestones': Milestones,
    '/about/certifications': Certifications,
    '/about/management-team': ManagementTeam,
    '/about/ehs-policy': EHSPolicy,
    '/business-segments': BusinessSegments,
    '/business/institutional': Institutional,
    '/business/manufacturing': Manufacture,
    '/business/r-and-d': Research,
    '/business/exports': Exports,
    '/products/technical-grade': Technical,
    '/products/brand': ProductsPage,
    '/products': ProductsPage,
    '/products/bulk-products': Technical,
    '/products/exports': Technical,
    '/global': Global,
    '/global-presence/global-operations': GlobalOps,
    '/global-presence/india-operations': IndiaOps,
    '/global-presence/customer-network': CustomerNetwork,







    '/contact': Contact,
};

export default function Page({ params }) {
    // params.slug is an array, e.g., ['about', 'company-overview']
    // We join it to form the path key: '/about/company-overview'
    const path = `/${params.slug.join('/')}`;

    const Component = PAGE_COMPONENTS[path] || NotFound;

    // Find data in pageContent array matching the slug
    const data = pageContent.find(item => item.slug === path) || {};

    return <Component {...data} />;
}
