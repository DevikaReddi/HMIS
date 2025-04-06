import express from 'express';
import { addRatingAndReview,calculateOverallRating, calculateDepartmentRating,getAllFeedbacks,
    analyzeFeedback,getBedOccupancyTrends, getFacilityStatistics,getMedicineInventoryTrends } from '../controllers/analytics.controller.js';

const router = express.Router();

// Route to add rating and review
router.post('/feedback/add/:consultationId', addRatingAndReview);
// Route to get department-wise rating
router.get('/feedback/department-rating/:departmentId', calculateDepartmentRating);
// Route to get all feedbacks
router.get('/feedback/all', getAllFeedbacks);
// Route to get overall rating
router.get('/feedback/overall',calculateOverallRating);

// Route to get medicine inventory trends
router.get('/medicine-trends',getMedicineInventoryTrends);

// Route to get occupied bed trends
router.get('/occupied-beds/:period', getBedOccupancyTrends);
// Route to get facility statistics
router.get('/facility-stats', getFacilityStatistics);

export default router;