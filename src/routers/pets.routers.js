import { Router } from "express";

const router = Router();
const pets = [];

router.get("/", (req, res) => {
  res.json({  pets });
});

router.post("/", (req, res) => {
  const pet = req.body;
  console.log(pet)
  pets.push(pet);

  res.json({status: 'success'});
  // res.json({ pet });
});

export default router;
