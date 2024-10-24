'use client'
import { usePathname } from "next/navigation";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";



export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  const hideLayoutRoutes = ["/auth/login", "/auth/signup"];
  return (
    <div>
      {!hideLayoutRoutes.includes(pathname) && <Navbar />}
      {children}
      {!hideLayoutRoutes.includes(pathname) && <Footer />}
    </div>
  );
}
