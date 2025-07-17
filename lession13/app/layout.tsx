import "./globals.css";
import Link from "next/link";
import {
  Monitor,
  Search,
  User,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Tablet,
  Tv,
  CreditCard,
  DollarSign,
} from "lucide-react";
import CartButton from "./components/CartButton";

export const metadata = {
  title: "Lesson 13",
  description: "Demo các phương pháp rendering trong Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className=" from-slate-50 to-blue-50 text-gray-800 min-h-screen">
        <div
          className="relative overflow-hidden py-4"
          style={{ backgroundColor: "#85E3FF" }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <img
              src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/bd/26/bd260331dfc577627b0c955e027cdaba.png"
              alt="Khuyến mãi Sony"
              className="w-full h-8 object-cover rounded-lg"
            />
          </div>
        </div>
        {/* Header */}
        <header className="bg-yellow-400 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <div className="bg-black text-yellow-400 rounded-full p-2 mr-3">
                  <span className="text-sm font-bold">TGD</span>
                </div>
                <span className="text-black font-bold text-lg">
                  thegioididong
                </span>
              </div>

              {/* Ô tìm kiếm */}
              <div className="flex-1 max-w-md mx-6">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Bạn tìm gì..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border-none bg-white text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Icon người dùng */}
              <div className="flex items-center gap-4 text-black">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                  <User size={20} />
                  <span className="text-sm">Đăng nhập</span>
                </div>
                <CartButton />
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                  <span className="text-sm">Hồ Chí Minh</span>
                </div>
              </div>
            </div>

            {/* Menu danh mục */}
            <nav className="flex items-center gap-6 mt-3 text-sm text-black">
              <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer">
                <Smartphone size={16} />
                <span>Điện thoại</span>
              </div>
              <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer">
                <Laptop size={16} />
                <span>Laptop</span>
              </div>
              <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer">
                <Headphones size={16} />
                <span>Phụ kiện</span>
              </div>
              <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer">
                <Watch size={16} />
                <span>Smartwatch</span>
              </div>
              <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer">
                <Tablet size={16} />
                <span>Tablet</span>
              </div>
              <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer">
                <Monitor size={16} />
                <span>Màn hình, Máy in</span>
              </div>
              <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer">
                <CreditCard size={16} />
                <span>Sim, Thẻ cào</span>
              </div>
              <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer">
                <DollarSign size={16} />
                <span>Dịch vụ tiện ích</span>
              </div>
            </nav>
          </div>
        </header>

        <section className="relative bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ArrowButton direction="left" />
              <ArrowButton direction="right" />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i === 0 ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="w-full bg-white shadow-sm mt-4">
              <img
                src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/52/b1/52b1bb50bff9caa98ee302e4151a6fd1.png"
                alt="PK B2"
                className="w-full h-auto max-w-7xl mx-auto"
              />
            </div>
          </div>
        </section>

        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

function ArrowButton({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "left" ? "left-4" : "right-4"
      } bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors`}
    >
      {direction === "left" ? (
        <ChevronLeft size={24} />
      ) : (
        <ChevronRight size={24} />
      )}
    </button>
  );
}
