import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceTemplate from '@/components/ServiceTemplate';
import { getServiceBySlug } from '@/data/services';

const slug = 'high-value-goods-escort';

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
    keywords: `high value goods, escort service, security transport, armed escort, valuable cargo, ${service.title}`,
  };
}

export default function HighValueGoodsEscortPage() {
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}