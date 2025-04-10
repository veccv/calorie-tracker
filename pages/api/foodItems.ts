import type { NextApiRequest, NextApiResponse } from "next";
import { AppDataSource } from "@/utils/data-source";
import { FoodItem } from "@/entity/FoodItem";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Ensure the database is initialized
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  } catch (error) {
    console.error("DB initialization error:", error);
    return res.status(500).json({ error: "Database initialization failed" });
  }

  // Handle different HTTP methods
  if (req.method === "GET") {
    try {
      const foodItemRepository = AppDataSource.getRepository(FoodItem);
      const items = await foodItemRepository.find();
      return res.status(200).json(items);
    } catch (error) {
      console.error("Error fetching food items:", error);
      return res.status(500).json({ error: "Failed to fetch food items" });
    }
  } else if (req.method === "POST") {
    try {
      const { name, kcal, fat, carbs, sugar } = req.body;
      // Basic validation
      if (!name || isNaN(kcal) || isNaN(fat) || isNaN(carbs) || isNaN(sugar)) {
        return res.status(400).json({ error: "Invalid food item data" });
      }
      const foodItemRepository = AppDataSource.getRepository(FoodItem);
      const newFoodItem = foodItemRepository.create({
        name,
        kcal,
        fat,
        carbs,
        sugar,
      });
      const savedItem = await foodItemRepository.save(newFoodItem);
      return res.status(201).json(savedItem);
    } catch (error) {
      console.error("Error creating food item:", error);
      return res.status(500).json({ error: "Failed to create food item" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}