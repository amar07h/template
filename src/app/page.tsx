import type { Metadata } from "next";
import Footer from '@/src/components/layouts/footer';

export const metadata:Metadata = {
  //TODO : add description to home page 
  description: 'pizza.',
  openGraph: {
    type: 'website'
  }
};
export default function Home() {
  return (
    <>
      <Footer />
    </>
  );
}
