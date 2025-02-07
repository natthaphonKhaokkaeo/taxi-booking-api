const { saveWebhookData } = require('../services/webhookService');
const { saveTaxiData } = require('../services/taxiService');
const receiveWebhook = async (req, res) => {
    const data = req.body;
    if (!data) {
        return res.status(400).json({ message: 'Invalid webhook payload' });
    }

    let dataForm = { ...data }; 
    if (dataForm.payload && typeof dataForm.payload !== 'string') {
        try {
            dataForm.payload = JSON.stringify(dataForm.payload); // แปลงเป็น JSON string เพื่อเก็บลง database
        } catch (error) {
            return res.status(400).json({ message: 'Invalid payload format' }); 
        }
    }
    try {
        //  1. บันทึกข้อมูล Taxi ก่อน (ถ้ายังไม่มี)
        await saveTaxiData({ 
            taxi_number: dataForm.taxi_number, 
            status: dataForm.status, 
            parking_slot: dataForm.parking_slot || null
        });

        // 2. บันทึก Webhook Log
        const result = await saveWebhookData(dataForm);

        if (result.success) {
            return res.status(200).json({ message: 'Webhook received' });
        } else {
            return res.status(500).json({ message: 'Error processing webhook' });
        }
    } catch (error) {
        console.error("Error processing webhook:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { receiveWebhook };
