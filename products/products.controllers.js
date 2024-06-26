const Product = require("./products.schema");

exports.createProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const result = await Product.find();
    res.status(200).json({
      success: true,
      message: "Product retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieved product",
      error: error.message,
    });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findById(id);
    res.status(200).json({
      success: true,
      message: "Single product retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieved single product",
      error: error.message,
    });
  }
};
