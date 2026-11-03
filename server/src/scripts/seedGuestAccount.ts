import * as userQueries from "#features/users/user.queries.js";

const seedGuestAccount = async () => {
  try {
    const guestUsername = process.env.GUEST_USERNAME;
    const guestPassword = process.env.GUEST_PASSWORD;

    if (!guestUsername || !guestPassword) {
      throw new Error(
        "Guest credentials are missing from environment variables.",
      );
    }

    const guest = await userQueries.getUserByUsername(guestUsername);

    if (!guest) {
      await userQueries.createUser(guestUsername, guestPassword);
      console.log("Seeding guest account.");
    }
  } catch (err) {
    console.log("Unable to seed guest account.");
  }
};

export { seedGuestAccount };
