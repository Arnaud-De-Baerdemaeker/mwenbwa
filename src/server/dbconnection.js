/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const {MongoClient} = require("mongodb");
async function main() {
    const uri =
        "mongodb+srv://admin:pedoncule@trees-db.6tbi9.mongodb.net/trees-db?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {useUnifiedTopology: true});

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}
