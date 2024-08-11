export async function getPlacesOfWorkTransport() {
  return await fetch('https://dummyjson.com/products/category-list').then(res => {
    return res.json()
  }).catch(error => {
    console.log(error)
  })
}