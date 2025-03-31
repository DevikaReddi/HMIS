import Test from "../models/test.js"
// Create a test entry
export const createTest = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTest = new Test({ title, description });
    await newTest.save();

    res.status(201).json({ message: "Test created successfully", test: newTest });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all test entries
export const getTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

