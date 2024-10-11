import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Photo Gallery",
  description: "Web that shows images from the Unsplash API",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className='bg-[#bdbdbd] overflow-x-hidden'>
        <Header />
        
        <main className='container mx-auto px-4 lg:px-0'>
          {children}
        </main>

        {modal}
      </body>
    </html>
  );
}
