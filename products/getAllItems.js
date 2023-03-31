import { client, icecreamCollection } from '../index.js'

const getAll = async (product1) => {
try {
    await client.connect();
    const allIcecream = await icecreamCollection.find().toArray();
    console.log(allIcecream);
} catch (error) {
    console.log(error)
} finally {
    await client.close()
}
}

getAll()