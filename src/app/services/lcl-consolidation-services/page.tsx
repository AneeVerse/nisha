import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceTemplate from '@/components/ServiceTemplate';
import { getServiceBySlug } from '@/data/services';

const slug = 'lcl-consolidation-services';

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Nisha Roadways`,
    description: service.subtitle,
    keywords: `LCL consolidation, less than container load, cost effective shipping, small shipments, ${service.title}`,
  };
}

export default function LCLConsolidationServicesPage() {
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}