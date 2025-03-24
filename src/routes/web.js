import express from "express";
import { homePage } from "../controller/homePageController.js";
import { createNewUser, userPage } from "../controller/userPageController.js";

const router = express.Router();


router.get('/', homePage)
router.get('/user', userPage)

router.post('/users/create-user', createNewUser)
export default router;