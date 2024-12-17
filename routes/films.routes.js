import {  Router } from "express";

// import { Films } from "../models/Films";
import { ApiRoutes } from "../const/const.js";

const router = Router();

router.get(ApiRoutes.GET_FILMS, async (req, res) => {
  try {
    console.log('стучимся в ApiRoutes.GET_FILMS')

  } catch (error) { 
    console.log(error);
}
});

router.post(ApiRoutes.SET_FILMS, async (req, res) => {
  try {
    console.log('стучимся в ApiRoutes.SET_FILMS')

  } catch (error) { 
    console.log(error);
}
});

export default router;
