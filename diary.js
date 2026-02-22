const router = require("express").Router();
const pool = require("./config/db");
const { encrypt, decrypt } = require("./encryption");

router.post("/create", async (req, res) => {
  const { userId, content } = req.body;
  const encrypted = encrypt(content);

  await pool.query(
    "INSERT INTO diary(user_id,content) VALUES($1,$2)",
    [userId, encrypted]
  );

  res.json({ message: "Saved securely" });
});

router.get("/:userId", async (req, res) => {
  const entries = await pool.query(
    "SELECT * FROM diary WHERE user_id=$1",
    [req.params.userId]
  );

  const decrypted = entries.rows.map(entry => ({
    ...entry,
    content: decrypt(entry.content)
  }));

  res.json(decrypted);
});

module.exports = router;