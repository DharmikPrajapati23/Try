# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from bson import ObjectId
from pymongo import MongoClient
import os

# Load .env variables (MONGODB_URL)
load_dotenv()

MONGODB_URL = os.getenv("MONGODB_URL")  # your Atlas connection string
DB_NAME = os.getenv("DB_NAME", "Dataset")  # optional, default name

app = Flask(__name__)
CORS(app)

# Mongo client + DB + collection
client = MongoClient(MONGODB_URL)
db = client[DB_NAME]
attendance_col = db["attendance"]


def serialize_attendance(doc):
    """Convert Mongo document to JSON-serializable dict."""
    return {
        "id": str(doc["_id"]),
        "date": doc.get("date"),
        "subject_name": doc.get("subject_name"),
        "faculty_name": doc.get("faculty_name"),
        "time_from": doc.get("time_from"),
        "time_to": doc.get("time_to"),
        "attendance": doc.get("attendance"),
    }


# ---------- CREATE ----------
@app.route("/api/attendance", methods=["POST"])
def create_attendance():
    data = request.get_json() or {}

    required_fields = [
        "date",
        "subject_name",
        "faculty_name",
        "time_from",
        "time_to",
        "attendance",
    ]
    missing = [f for f in required_fields if f not in data]
    if missing:
        return jsonify({"error": f"Missing fields: {', '.join(missing)}"}), 400

    new_doc = {
        "date": data["date"],                 # e.g. "2026-02-07"
        "subject_name": data["subject_name"],
        "faculty_name": data["faculty_name"],
        "time_from": data["time_from"],       # e.g. "09:00"
        "time_to": data["time_to"],           # e.g. "10:00"
        "attendance": data["attendance"],     # e.g. "Present", "Absent", "75%"
    }

    result = attendance_col.insert_one(new_doc)
    created = attendance_col.find_one({"_id": result.inserted_id})
    return jsonify(serialize_attendance(created)), 201


# ---------- READ ALL ----------
@app.route("/api/attendance", methods=["GET"])
def get_all_attendance():
    docs = attendance_col.find().sort("date", -1)
    return jsonify([serialize_attendance(d) for d in docs]), 200


# ---------- READ ONE ----------
@app.route("/api/attendance/<string:attendance_id>", methods=["GET"])
def get_attendance(attendance_id):
    try:
        oid = ObjectId(attendance_id)
    except Exception:
        return jsonify({"error": "Invalid ID"}), 400

    doc = attendance_col.find_one({"_id": oid})
    if not doc:
        return jsonify({"error": "Attendance record not found"}), 404

    return jsonify(serialize_attendance(doc)), 200


# ---------- UPDATE ----------
@app.route("/api/attendance/<string:attendance_id>", methods=["PUT"])
def update_attendance(attendance_id):
    try:
        oid = ObjectId(attendance_id)
    except Exception:
        return jsonify({"error": "Invalid ID"}), 400

    data = request.get_json() or {}

    update_fields = {}
    allowed = ["date", "subject_name", "faculty_name", "time_from", "time_to", "attendance"]
    for key in allowed:
        if key in data:
            update_fields[key] = data[key]

    if not update_fields:
        return jsonify({"error": "No valid fields to update"}), 400

    result = attendance_col.update_one({"_id": oid}, {"$set": update_fields})
    if result.matched_count == 0:
        return jsonify({"error": "Attendance record not found"}), 404

    updated = attendance_col.find_one({"_id": oid})
    return jsonify(serialize_attendance(updated)), 200


# ---------- DELETE ----------
@app.route("/api/attendance/<string:attendance_id>", methods=["DELETE"])
def delete_attendance(attendance_id):
    try:
        oid = ObjectId(attendance_id)
    except Exception:
        return jsonify({"error": "Invalid ID"}), 400

    result = attendance_col.delete_one({"_id": oid})
    if result.deleted_count == 0:
        return jsonify({"error": "Attendance record not found"}), 404

    return jsonify({"message": "Attendance record deleted"}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)), debug=False)
