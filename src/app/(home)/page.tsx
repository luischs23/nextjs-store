import { Suspense } from "react";
import { MainProduct } from "../../components/home/MainProducts";
import { Loader } from "../../components/shared/Loader";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <MainProduct />
      </Suspense>
    </main>
  );  
}
