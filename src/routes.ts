import { Router } from "express";
import { getPlayers, getPlayerById } from "./controllers/playersController";

const router = Router();

router.get("/players", getPlayers);
router.get("/players/:id", getPlayerById);

export default router