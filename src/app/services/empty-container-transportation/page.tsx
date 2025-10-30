import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function EmptyContainerTransportationPage() {
  const service = getServiceBySlug("empty-container-transportation");
  
  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}

export async function generateMetadata() {
  const service = getServiceBySlug("empty-container-transportation");
  
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