export const getTransaction = () =>{
    return fetch('https://dummyjson.com/carts')
    .then(res => res.json())
}