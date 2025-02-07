const Webhook = require('../models/webhook_log.Model');

const saveWebhookData = async (data) => {
    try {
        const selectedFields = [
            "parking_slot",
            "event_type",
            "taxi_number",
            "status",
            "payload",
            "received_at"
        ]; 

        await Webhook.create(data, { fields: selectedFields });

        return { success: true };
    } catch (error) {
        console.error('Error saving webhook data:', error);
        return { success: false, error };
    }
};

module.exports = { saveWebhookData };
