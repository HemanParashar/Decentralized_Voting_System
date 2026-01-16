from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash
from pymongo import MongoClient

auth = Blueprint("auth", __name__)

client = MongoClient("mongodb://localhost:27017/")
db = client.votingDB
users = db.users


@auth.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    print("LOGIN ATTEMPT:", email, password)  # DEBUG

    user = users.find_one({"email": email})

    if not user:
        print("USER NOT FOUND")
        return jsonify({"message": "Invalid email or password"}), 401

    if not check_password_hash(user["password"], password):
        print("PASSWORD MISMATCH")
        return jsonify({"message": "Invalid email or password"}), 401

    print("LOGIN SUCCESS")

    return jsonify({
        "user": {
            "id": str(user["_id"]),
            "email": user["email"],
            "role": user["role"]
        }
    }), 200
