const { AppDataSource } = require('../utils/data-source');

AppDataSource.initialize()
  .then(() => {
    console.log("Database initialized successfully.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error initializing database:", error);
    process.exit(1);
  });