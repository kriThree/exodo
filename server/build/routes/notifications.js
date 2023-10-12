"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../mdidleware/auth");
const notifications_1 = require("../controllers/notifications");
const router = (0, express_1.Router)();
router.use(auth_1.auth);
router.get("/getAll", notifications_1.getAllNotifications);
router.post("/rejectInvite", notifications_1.rejectInivite);
router.post("/acceptInvite", notifications_1.acceptInvite);
router.post("/closeDaily", notifications_1.closeDaily);
router.get("/isInvited", notifications_1.isInvited);
exports.default = router;
