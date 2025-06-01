import { MongoClient, ObjectId } from "mongodb"; 
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("TwoWheelWiki"); 

async function getSpecs() {
  let specs = [];
  try {
    const collection = db.collection("specs");
    const query = {};
    specs = await collection.find(query).toArray();
    specs.forEach((spec) => {
      spec._id = spec._id.toString(); 
    });
  } catch (error) {
    console.log(error);
  }
  return specs;
}

async function getBikes() {
  let bikes = [];
  try {
    const collection = db.collection("bikes");
    const query = {};
    bikes = await collection.find(query).toArray();
    bikes.forEach((bike) => {
      bike._id = bike._id.toString(); 
    });
  } catch (error) {
    console.log(error);
  }
  return bikes;
}

async function getBike(id) {
  let bike = null;
  try {
    const collection = db.collection("bikes");
    const query = { _id: new ObjectId(id) };
    movie = await collection.findOne(query);

    if (!movie) {
      console.log("No movie with id " + id);
      
    } else {
      movie._id = movie._id.toString();
    }
  } catch (error) {
    console.log(error.message);
  }
  return movie;
}

async function getManufacturers() {
  let manufacturers = [];
  try {
    const collection = db.collection("manufacturers");
    const query = {};
    manufacturers = await collection.find(query).toArray();
    manufacturers.forEach((manufacturer) => {
      manufacturer._id = manufacturer._id.toString(); 
    });
  } catch (error) {
    console.log(error);
  }
  return manufacturers;
}

async function getTips() {
  let tips = [];
  try {
    const collection = db.collection("riding_tips");
    const query = {};
    tips = await collection.find(query).toArray();
    tips.forEach((tip) => {
      tip._id = tip._id.toString(); 
    });
  } catch (error) {
    console.log(error);
  }
  return tips;
}

async function createTip(tip) {
  try {
    const collection = db.collection("riding_tips");
    const result = await collection.insertOne(tip);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

export default {
  getSpecs,
  getBikes,
  getBike,
  getManufacturers,
  getTips,
  createTip,
};
