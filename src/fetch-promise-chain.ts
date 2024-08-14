interface Product {
  name: string;
  price: number;
  image: string;
  type: string;
}

const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response: Response) => response.json() as Promise<Product[]>)
    .then((products: Product[]) => {
        products.forEach((product: Product) => {
            console.log(product.name);
          });
    });

    console.log('Chaining promises ... ');
  