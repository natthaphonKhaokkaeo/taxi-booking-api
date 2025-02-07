const { body, validationResult } = require('express-validator');

const validateWebhook = [
    body('parking_slot').isString().notEmpty().withMessage('parking_slot ต้องเป็น string และห้ามว่าง'),
    body('event_type').isInt().withMessage('event_type ต้องเป็น number'),
    body('taxi_number').isString().notEmpty().withMessage('taxi_number ต้องเป็น string และห้ามว่าง'),
    body('status').isInt().withMessage('status ต้องเป็น number'),
    body('payload').optional().isObject().withMessage('payload ต้องเป็น object หรือ null'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                message: 'Invalid request data',
                errors: errors.array()
            });
        }
        next();
    }
];

module.exports = validateWebhook;
