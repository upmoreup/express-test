const { Router } = require("express");
const router = Router();

// 캐싱 데이터 조회
router.get("/", cache);