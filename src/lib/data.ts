import fs from 'fs';
import path from 'path';

const productsFilePath = path.join(process.cwd(), 'data', 'products.json');
const categoriesFilePath = path.join(process.cwd(), 'data', 'categories.json');

export function getAllProducts() {
  const fileContents = fs.readFileSync(productsFilePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getProductById(id: string) {
  const products = getAllProducts();
  return products.find((product: any) => product.id === id);
}

export function getAllCategories() {
  const fileContents = fs.readFileSync(categoriesFilePath, 'utf8');
  return JSON.parse(fileContents);
}
