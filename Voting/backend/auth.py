from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash, generate_password_hash
from pymongo import MongoClient

auth = Blueprint("auth", __name__)

client = MongoClient("mongodb://localhost:27017/")
db = client.votingDB
users = db.users


# ---------------- SIGNUP ----------------
@auth.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip().lower()
    password = (data.get("password") or "").strip()
    role = data.get("role")

    if not name or not email or not password:
        return jsonify({"message": "All fields required"}), 400

    if users.find_one({"email": email}):
        return jsonify({"message": "Email already registered"}), 400

    users.insert_one({
        "name": name,
        "email": email,
        "password": generate_password_hash(password),
        "role": role
    })

    print("SIGNUP SUCCESS:", email)

    return jsonify({"message": "User registered successfully"}), 201


# ---------------- LOGIN ----------------
@auth.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = (data.get("email") or "").strip().lower()
    password = (data.get("password") or "").strip()

    user = users.find_one({"email": email})

    if not user:
        return jsonify({"message": "Invalid email or password"}), 401

    if not check_password_hash(user["password"], password):
        print("PASSWORD MISMATCH")
        return jsonify({"message": "Invalid email or password"}), 401

    print("LOGIN SUCCESS")

    return jsonify({
        "user": {
            "id": str(user["_id"]),
            "name": user.get("name", ""),
            "email": user["email"],
            "role": user["role"]
        }
    }), 200