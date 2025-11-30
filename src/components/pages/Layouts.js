import About from "./About";
import Visionvalues from "./Visionvalues";
import Awards from "./Awards";
import Milestones from "./Milestones";
import EHSPolicy from "./EHS";
import ManagementTeam from "./Management";
import Certifications from "./Certifications";
import BusinessSegments from "./Business";
import Institutional from "./Institution";
import Brand from "./Brand";
import Research from "./Research";
import Manufacture from "./Manufacture";
import Exports from "./Exports";
import ProductsPage from "./ProductList";
import Global from "./Global";
import GlobalOps from "./Global_Ops";
import IndiaOps from "./India_Ops";
import CustomerNetwork from "./CustomerNetwork";
import Technical from "./Techinical";

export default function Layouts({ title, content, sectionType }) {
  let layoutStyles;
  switch (sectionType) {
    case "about":
      return <About title={title} content={content} />;
    case "company-overview":
      return <About title={title} content={content} />;
    case "vision-values":
      return <Visionvalues title={title} content={content} />;
    case "awards-and-recognitions":
      return <Awards title={title} content={content} />;
    case "milestones":
      return <Milestones title={title} content={content} />;
    case "ehs-policy":
      return <EHSPolicy title={title} content={content} />;
    case "management-team":
      return <ManagementTeam title={title} content={content} />;
    case "certifications":
      return <Certifications title={title} content={content} />;
    case "business-segments":
      return <BusinessSegments title={title} content={content} />;
    case "institutional":
      return <Institutional title={title} content={content} />;
    case "brand":
      return <Brand title={title} content={content} />;
    case "r-and-d":
      return <Research title={title} content={content} />;
    case "manufacturing":
      return <Manufacture title={title} content={content} />;
    case "exports":
      return <Exports title={title} content={content} />;

    case "products":
      return <ProductsPage title={title} content={content} />;

    case "technical-grade":
      return <Technical title={title} content={content} />;
    case "brands":
      return <ProductsPage title={title} content={content} />;

    case "bulk-products":
      return <Technical title={title} content={content} />;
    case "product-exports":
      return <Technical title={title} content={content} />;

    case "global-presence":
      return <Global title={title} content={content} />;
    case "global-operations":
      return <GlobalOps title={title} content={content} />;

    case "india-operations":
      return <IndiaOps title={title} content={content} />;

    case "customer-network":
      return <CustomerNetwork title={title} content={content} />;

    case "team":
      layoutStyles = "bg-green-100 text-gray-900 p-10";
      break;
    default:
      layoutStyles = "bg-white text-gray-900 p-10";
  }

  return (
    <section className={layoutStyles}>
      <h1 className="text-5xl text-black font-bold">{title}</h1>
      <p className="mt-4 text-lg">{content}</p>
    </section>
  );
}
