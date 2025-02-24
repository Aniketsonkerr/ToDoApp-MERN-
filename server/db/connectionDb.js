import mongoose from "mongoose";

const connectionDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

export default connectionDb;
