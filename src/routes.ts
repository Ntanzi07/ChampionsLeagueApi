import { Router } from "express";
import * as playerController from "./controllers/playersController";

const router = Router();

router.get("/players", playerController.getPlayers);
router.post("/players", playerController.postPlayerController);

router.get("/players/:id", playerController.getPlayerById);
router.delete("/players/:id", playerController.deletePlayerController);
export default router