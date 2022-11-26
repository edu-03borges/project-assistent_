import { Router } from "express";
import { CreatePhraseController } from "../../../../modules/Phrase/useCases/createPhrase/CreatePhraseController";
import { GetPhraseController } from "../../../../modules/Phrase/useCases/getPhrase/GetPhraseController";
import { UpdatePhraseController } from "../../../../modules/Phrase/useCases/updatePhrase/UpdatePhraseController";

import ensureAthenticated from "../middlewares/ensureAthenticated";
import ensureAdmin from "../middlewares/ensureAdmin";

const phraseRoutes = Router();

const createPhraseController = new CreatePhraseController();
const getPhraseController = new GetPhraseController();
const updatePhraseController = new UpdatePhraseController();

phraseRoutes.post("/phrase/create", ensureAthenticated, ensureAdmin, createPhraseController.handle);

phraseRoutes.get("/phrase/get", getPhraseController.handle);

phraseRoutes.patch("/phrase/update/:id", ensureAthenticated, ensureAdmin, updatePhraseController.handle);

export { phraseRoutes };