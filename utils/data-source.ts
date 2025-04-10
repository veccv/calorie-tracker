import { DataSource } from "typeorm";
import { FoodItem } from "@/entity/FoodItem";

/**
 * The AppDataSource now supports a combined connection string via the DATABASE_URL environment variable.
 * This is useful when your service (like Supabase) provides a full URL that includes all connection parameters.
 * If DATABASE_URL is not set, the configuration falls back to using separated environment variables.
 */
export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL || undefined,
  host: process.env.DATABASE_URL
    ? undefined
    : process.env.DB_HOST || "localhost",
  port: process.env.DATABASE_URL
    ? undefined
    : parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DATABASE_URL
    ? undefined
    : process.env.DB_USER || "postgres",
  password: process.env.DATABASE_URL
    ? undefined
    : process.env.DB_PASS || "password",
  database: process.env.DATABASE_URL
    ? undefined
    : process.env.DB_NAME || "calorie_tracker",
  entities: [FoodItem],
  synchronize: true, // Automatically create/update tables; use with caution in production!
  logging: true,
  ssl: {
    rejectUnauthorized: false, // Accept self-signed certificates
  },
});
