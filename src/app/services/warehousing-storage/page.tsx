import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceTemplate from '@/components/ServiceTemplate';
import { getServiceBySlug } from '@/data/services';

const slug = 'warehousing-storage';

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
    keywords: `warehousing, storage solutions, climate controlled, inventory management, port storage, ${service.title}`,
  };
}

export default function WarehousingStoragePage() {
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}