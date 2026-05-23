import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceDetail, SERVICE_DETAILS } from "@/lib/service-detail-data";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_DETAILS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Kingdom Come Services — Jackson, MS`,
    description: service.description.slice(0, 160),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();
  return <ServicePageLayout service={service} />;
}
