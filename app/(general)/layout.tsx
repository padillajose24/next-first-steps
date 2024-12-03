import { Navbar } from "@/components";
export default function generalLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
     <Navbar />
        <main className="flex flex-col items-center p-20">
      
        <span className="text-lg items-center">Hola mundo</span>

      
      {children}
      </main>
    </>
  );
}