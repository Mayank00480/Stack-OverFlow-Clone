import express from "express";
import auth from "../middleware/Auth.js";
import {
  AskQuestion,
  deleteQuestion,
  getAllQuestions,
  voteQuestion
} from "../controllers/Questions.js";


const router = express.Router();

router.post("/Ask",auth, AskQuestion);
router.get("/get", getAllQuestions);
router.delete("/delete/:id",auth, deleteQuestion);
router.patch('/vote/:id' ,auth, voteQuestion)

export default router;