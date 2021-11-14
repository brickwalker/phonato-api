import { Router } from "express";

const router: Router = Router();

router.get('/', (req, res) => {
    res.send("Hello from router")
})

export default router;