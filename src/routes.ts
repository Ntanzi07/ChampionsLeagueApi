import { Router } from "express";
import * as playerController from "./controllers/playersController";
import * as clubController from "./controllers/clubController";

const router = Router();

router.get("/players", playerController.getPlayers);
router.post("/players", playerController.postPlayerController);
router.get("/players/:id", playerController.getPlayerById);
router.delete("/players/:id", playerController.deletePlayerController);
router.patch("/players/:id", playerController.updatePlayerController);

router.get("/clubs", clubController.getClub);
export default router