interface Product {
    name: string;
    price: number;
    image: string;
    type: string;
  }

const fetchPromise3 = fetch(
    "https://mdn.github.io/learningarea/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise3
    .then((response: Response) => {
        if(response.ok) {
            return response.json() as Promise<Product[]>;
        }
        throw new Error(`Bad Response : ${response.status}`) 
    })
    .then((products: Product[]) => {
        products.forEach((product: Product) => {
            console.log(product.name);
          });
        })
    .catch((error) => {
        console.error(`Failed to get products: ${error}`);
    });

    console.log('Chaining promises ... ');
  