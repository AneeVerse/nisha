import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function DomesticCargoContainersPage() {
  const service = getServiceBySlug("domestic-cargo-containers");
  
  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}

export async function generateMetadata() {
  const service = getServiceBySlug("domestic-cargo-containers");
  
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