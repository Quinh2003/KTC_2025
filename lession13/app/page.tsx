import Link from "next/link";
import { ExternalLink, RefreshCcwDot, Clock } from "lucide-react";

export const revalidate = 10;

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: { name: string };
};

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      next: { revalidate: 10 },
    });
    if (!res.ok) throw new Error("Không thể tải sản phẩm");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi fetch sản phẩm:", error);
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-xl">
            <RefreshCcwDot className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Tất cả sản phẩm
            </h1>
            <div className="flex items-center gap-2 text-orange-600 mt-1">
              <Clock size={18} />
              <span className="text-sm font-medium">
                Tổng: {products.length} sản phẩm
              </span>
            </div>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.images?.[0] || "/placeholder.jpg"}
                    alt={product.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category?.name || "Không có danh mục"}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="text-3xl font-bold text-orange-600">
                    ${product.price}
                  </div>

                  <Link
                    href={`/product-isr/${product.id}`}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <span>Xem chi tiết</span>
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Không thể tải sản phẩm</p>
          </div>
        )}

        
      </div>
    </div>
  );
}
