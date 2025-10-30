import { getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';
import ServiceTemplate from '@/components/ServiceTemplate';

export async function generateMetadata() {
  const service = getServiceBySlug('rail-services');
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    };
  }

  return {
    title: `${service.title} | Nisha Roadways`,
    description: service.subtitle,
  };
}

export default function RailServicesPage() {
  const service = getServiceBySlug('rail-services');
  
  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}