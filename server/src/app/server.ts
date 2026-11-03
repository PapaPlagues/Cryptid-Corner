import "dotenv/config";
import app from "./app.js";
import { seedGuestAccount } from "../scripts/seedGuestAccount.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, async (err) => {
  if (err) {
    console.error("Server failed to start:", err);
    process.exit(1);
  }
  // Server setup scripts
  await seedGuestAccount();
  console.log(`Server running on port ${PORT}`);
});
