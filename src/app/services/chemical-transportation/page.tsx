import { getServiceBySlug } from "@/data/services";
import ServiceTemplate from "@/components/ServiceTemplate";
import { notFound } from "next/navigation";

export default function ChemicalTransportationPage() {
  const service = getServiceBySlug("chemical-transportation");
  
  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}

export async function generateMetadata() {
  const service = getServiceBySlug("chemical-transportation");
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Nisha Roadways`,
    description: service.subtitle,
  };
}