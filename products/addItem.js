

import { client, icecreamCollection } from '../index.js'

const product1 = {
  name: 'Sunda',
  price: 236.99,
  flavor: 'Choice of 3 Flavors',
  description: 'Choice of 1,2, or 3 scoops of icecream and topped with caramel and chocolate syrup and whipped cream.',
}


const addIcecream = async () => {
try {
  await client.connect()
  const addedIcecream = await icecreamCollection.insertOne(product1);
  console.log(addedIcecream);
} catch (error) {
  console.log(error) 
} finally {
  await client.close()
}
}

addIcecream()