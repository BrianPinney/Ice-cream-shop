import { client, icecreamCollection } from '../index.js'

const getOne = async () => {
    try {
        await client.connect();
        const allIcecream = await icecreamCollection.findOne({name: 'single scoop'});
        console.log(allIcecream);
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
    }
    
getOne()