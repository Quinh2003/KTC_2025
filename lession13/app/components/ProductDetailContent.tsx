"use client";
import {
  RefreshCcwDot,
  Star,
  ShoppingCart,
  Heart,
  CheckCircle,
} from "lucide-react";
import { useCartStore } from "../lib/cart-store";
import { useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: { name: string };
};

export default function ProductDetailContent({
  product,
}: {
  product: Product;
}) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
    });

    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in">
          <CheckCircle size={20} />
          <span>Đã thêm vào giỏ hàng!</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg">
            <RefreshCcwDot className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Chi tiết sản phẩm
            </h1>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.slice(1, 5).map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl overflow-hidden bg-gray-100"
                  >
                    <img
                      src={img}
                      alt={`${product.title} ${i}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {product.category.name}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-gray-600">(4.8)</span>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                <div className="text-4xl font-bold text-purple-700 mb-2">
                  ${product.price}
                </div>
                <p className="text-gray-600">Miễn phí vận chuyển</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <ShoppingCart size={20} />
                  Thêm vào giỏ hàng
                </button>
                <button className="p-4 border-2 border-purple-200 rounded-2xl hover:bg-purple-50 transition-colors duration-200">
                  <Heart size={20} className="text-purple-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
