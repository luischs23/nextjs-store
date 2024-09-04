import { Suspense } from "react";
import { MainProduct } from "../../components/home/MainProducts";
import { Loader } from "../../components/shared/Loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future World",
  description: "Welcome to the future world, an ecommerce from other century",
  keywords: ["future", "world", "ecommerce", "technology"],
}

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <MainProduct />
      </Suspense>
    </main>
  );  
}
