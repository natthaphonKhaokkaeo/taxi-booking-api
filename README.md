Taxi Booking API

📌 Introduction

This is a Node.js API system for airport taxi bookings, supporting instant and advance bookings, real-time queue management, and notifications.
Ex . API Webhook

🚀 Installation

1️⃣ Prerequisites

Ensure you have the following installed:

Node.js (v16+ recommended)

npm (comes with Node.js)

2️⃣ Clone the Repository

git [clone https://github.com/natthaphonKhaokkaeo/taxi-booking-api.git] ([https://github.com/natthaphonKhaokkaeo/taxi-booking-api.git](https://github.com/natthaphonKhaokkaeo/taxi-booking-api.git))
cd taxi-booking-api

3️⃣ Install Dependencies

npm install

#user demo database with Docker conatainer

docker-compose up db -d --build

4️⃣ Configure Environment Variables

Create a .env file in the root directory and add the following configurations:
From File .env.template


5️⃣ Run Database Migrations

Before starting the application, run the database migrations to create the necessary tables:

npm run  migrate

▶ Running the API

Start the development server with:

npm run start

The API will be available at http://localhost:3000/

📡 Webhook API Usage

1️⃣ Webhook Endpoint

Receives updates from parking lanes.

Endpoint:

POST /api/webhook

Request Body (JSON):

{
  "parking_slot": "A1",
  "event_type": 1,
  "taxi_number": "ABC123",
  "status": 1,
  "payload": {"message": "Taxi arrived"}
}

Response (JSON):

{
    "message": "Webhook received"
}

🛠 Useful Commands

Run the application: npm run start

Run in watch mode (development): npm run dev

Run migrations: npm run  migration


📝 License

MIT License. Feel free to contribute!
