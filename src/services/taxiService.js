const Taxi = require('../models/taxi.Model');

const saveTaxiData = async (taxiData) => {
    try {
        let taxi = await Taxi.findOne({ where: { taxi_number: taxiData.taxi_number } });

        if (taxi) {
            // อัปเดตเฉพาะฟิลด์ที่ส่งมา
            await taxi.update(taxiData, { fields: Object.keys(taxiData) });
        } else {
            //  ถ้ายังไม่มี → ทำการสร้างใหม่
            taxi = await Taxi.create(taxiData);
        }
        return { success: true, taxi };
    } catch (error) {
        console.error('Error saving taxi data:', error);
        return { success: false, error };
    }
};

module.exports = { saveTaxiData };
