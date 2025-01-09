import Header from "@/components/Header";
import "./globals.css";
import Blob from "@/components/Blob";

export const metadata = {
  title: "Photo Gallery",
  description: "Web that shows images from the Unsplash API",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden bg-black'>
        <Blob />

        <div className="backdrop-blur-3xl text-white">
          <Header />
          
          <main className='container mx-auto px-4 lg:px-0'>
            {children}
          </main>

        </div>

        {modal}
      </body>
    </html>
  );
}
