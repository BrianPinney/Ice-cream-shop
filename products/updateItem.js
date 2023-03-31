import { client, icecreamCollection } from '../index.js'

const editIcecream = async () => {
try {
    await client.connect()
    const editedIcecream = await icecreamCollection.findOneAndUpdate({name: 'Sunda'},{$set: {name: 'Sundae'}});
    console.log(editedIcecream)
} catch (error) {
    console.log(error)
} finally {
    await client.close()
}
}

editIcecream()