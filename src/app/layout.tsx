import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Las 3 Fórmulas Prohibidas para Liberar tu Flujo de Caja",
  description: "Desbloquea las 3 fórmulas prohibidas para liberar tu flujo de caja y duplicar tus ganancias. Sistema de 3 módulos de implementación inmediata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
