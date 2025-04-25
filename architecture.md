
# Architecture & Flow

## Overview
The system consists of:
- A Node.js/Express backend
- A MongoDB database
- A React frontend

## Flow
1. User submits feedback through React form
2. Form calls POST `/feedback`
3. Feedback is stored in MongoDB
4. Dashboard fetches feedback via GET `/feedback`
5. Optional filters & sorts are applied using query params

## Scalability
- Express handles concurrent requests efficiently
- MongoDB scales horizontally with sharding
- Frontend uses component-based structure for maintainability
