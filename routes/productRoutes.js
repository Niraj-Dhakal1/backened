import express from "express";

const router = express.Router();

router.route('/api/products').get().post();
router.route('/api/products/:id').get().patch().delete();


export default router;