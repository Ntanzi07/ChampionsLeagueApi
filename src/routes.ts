import { Router } from "express";
import { getPlayers } from "./controllers/playersController";

const router = Router();

router.get("/players", getPlayers);

export default router