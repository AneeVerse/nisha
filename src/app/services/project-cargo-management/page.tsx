import { getServiceBySlug } from "@/data/services";
import ServiceTemplate from "@/components/ServiceTemplate";
import { notFound } from "next/navigation";

export default function ProjectCargoManagementPage() {
  const service = getServiceBySlug("project-cargo-management");
  
  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}

export async function generateMetadata() {
  const service = getServiceBySlug("project-cargo-management");
  
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