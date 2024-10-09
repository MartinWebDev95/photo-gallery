import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Photo Gallery",
  description: "Web that shows images from the Unsplash API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#bdbdbd] overflow-hidden'>
        <Header />
        
        {children}
      </body>
    </html>
  );
}
