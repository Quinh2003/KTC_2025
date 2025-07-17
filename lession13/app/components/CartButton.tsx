"use client";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "../lib/cart-store";
import Link from "next/link";

export default function CartButton() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="flex items-center gap-1 cursor-pointer hover:text-gray-700"
    >
      <div className="relative">
        <ShoppingBag size={20} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
      <span className="text-sm">Giỏ hàng</span>
    </Link>
  );
}
