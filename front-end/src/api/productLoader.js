import { BACK_END_URL } from "../const/api";

export async function productLoader({ params: { productId } }) {
    const productUrl = fetch(`${BACK_END_URL}/products/${productId}`);
    const cartUrl = fetch(`${BACK_END_URL}/cart?_expand=product`);
    const favUrl = fetch(`${BACK_END_URL}/favorites?_expand=product`);

    return Promise.all([productUrl, cartUrl, favUrl])
        .then((ress) => Promise.all(ress.map((res) => res.json())))
        .then((products) => {
            return products;
        });
}
