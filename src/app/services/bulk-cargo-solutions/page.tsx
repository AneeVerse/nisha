import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceTemplate from '@/components/ServiceTemplate';
import { getServiceBySlug } from '@/data/services';

const slug = 'bulk-cargo-solutions';

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
    keywords: `bulk cargo, steel transportation, construction materials, grains transport, industrial cargo, ${service.title}`,
  };
}

export default function BulkCargoSolutionsPage() {
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}