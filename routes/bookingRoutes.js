import express from "express";

import { requireAuth } from "../middleware/requireAuth.js";
import {
  createBooking,
  getBookings,
  getBookingById,
  cancelBooking,
  getActiveBookings,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", requireAuth, createBooking);
router.get("/", requireAuth, getBookings);
router.get("/:id", requireAuth, getBookingById);
router.get("/place/:placeId", getActiveBookings);
router.patch("/:id/cancel", requireAuth, cancelBooking);

export default router;
