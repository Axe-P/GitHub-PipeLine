import models from '../models/index.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];
    if (!model || !model.db || !model.db.db) {
      throw new Error(`Model or database not found for modelName: ${modelName}`);
    }

    let modelExists = await model.db.db.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists.length) {
      await model.db.db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}