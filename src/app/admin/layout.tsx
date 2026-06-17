import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel de Administración - CEAS",
  description: "Panel privado de administración de contenido",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {children}
    </div>
  );
}
