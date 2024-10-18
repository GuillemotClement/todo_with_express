import { Router } from "express";
import { HomepageController } from "../controllers/homepage.controller";
export const router = Router();

/**
 * @route /
 */
router.get('/', HomepageController.render);