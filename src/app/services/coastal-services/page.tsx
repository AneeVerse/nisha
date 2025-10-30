import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function CoastalServicesPage() {
  const service = getServiceBySlug("coastal-services");
  
  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}

export async function generateMetadata() {
  const service = getServiceBySlug("coastal-services");
  
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