import ProductList from "./components/product/ProductList";
import ShopsList from "./components/shop/ShopsList";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-10 h-full">
      <div className="bg-blue-100 col-span-1 rounded-xl">
        <ShopsList />
      </div>
      <div className="bg-blue-100 col-span-3 rounded-xl p-20">
        <ProductList />
      </div>
    </main>
  );
}
