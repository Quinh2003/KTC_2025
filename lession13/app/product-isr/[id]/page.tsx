import ProductDetailContent from "@/app/components/ProductDetailContent";

// app/product-isr/[id]/page.tsx
export const revalidate = 10; // ISR every 10s

type Props = {
  params: Promise<{
    id: string;
  }>;
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: { name: string };
};

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  if (!res.ok) throw new Error("Lỗi khi tải sản phẩm");
  return res.json();
}

export default async function ProductDetailISR({ params }: Props) {
  const { id } = await params; 
  const product = await getProduct(id);

  return <ProductDetailContent product={product} />;
}