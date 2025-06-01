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

async function createMovie(movie) {
  movie.poster = "/images/placeholder.jpg";
  movie.actors = [];
  movie.watchlist = false;
  try {
    const collection = db.collection("movies");
    const result = await collection.insertOne(movie);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function updateMovie(movie) {
  try {
    let id = movie._id;
    delete movie._id; 
    const collection = db.collection("movies");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: movie });

    if (result.matchedCount === 0) {
      console.log("No movie with id " + id);
    } else {
      console.log("Movie with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function deleteMovie(id) {
  try {
    const collection = db.collection("movies");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No movie with id " + id);
    } else {
      console.log("Movie with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

export default {
  getSpecs,
  getBikes,
  getBike,
};
