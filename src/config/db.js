import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB connection Failed ❌:", error.message);
    process.exit(1);
  }
};
