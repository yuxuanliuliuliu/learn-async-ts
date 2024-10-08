interface Product {
  name: string;
  price: number;
  image: string;
  type: string;
}

const fetchPromise2: Promise<Response> = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise2.then((response: Response) => {
  const jsonPromise = response.json() as Promise<Product[]>;
  jsonPromise.then((products: Product[]) => {
    products.forEach((product: Product) => {
      console.log(product.name);
    });
  });
});



console.log('Fetching products ... ');
