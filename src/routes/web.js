import express from "express";
import { homePage } from "../controller/homePageController.js";
import { userPage } from "../controller/userPageController.js";

const router = express.Router();


router.get('/', homePage)
router.get('/user', userPage)
export default router;