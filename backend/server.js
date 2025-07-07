const express = require("express");
const fs = require("fs");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

// Fallback gold price per gram (USD)
const FALLBACK_GOLD_PRICE_PER_GRAM = 105;

app.get("/products", async (req, res) => {
  try {
    // Load products
    const data = fs.readFileSync("./products.json", "utf-8");
    const products = JSON.parse(data);

    let usdPerGram;

    try {
      // Fetch gold price
      const goldResponse = await axios.get(
        "https://api.metalpriceapi.com/v1/latest?api_key=98507676cbbc632f7373ec384e81f46a&base=USD&currencies=XAU"
      );

      const usdPerOunce = goldResponse.data?.rates?.USDXAU;

      if (!usdPerOunce || isNaN(usdPerOunce)) {
        throw new Error("Invalid USDXAU in API response");
      }

      usdPerGram = usdPerOunce / 31.1035;

      console.log(`Live gold price per gram: $${usdPerGram.toFixed(2)}`);
    } catch (err) {
      console.error("Error fetching gold price, using fallback:", err.message);
      usdPerGram = FALLBACK_GOLD_PRICE_PER_GRAM;
      console.log(`Fallback gold price per gram: $${usdPerGram}`);
    }

    // Compute prices
    const enrichedProducts = products.map((product) => {
      const price =
        (Number(product.popularityScore) + 1) *
        Number(product.weight) *
        usdPerGram;

      return {
        ...product,
        price: price.toFixed(2)
      };
    });

    res.json(enrichedProducts);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
