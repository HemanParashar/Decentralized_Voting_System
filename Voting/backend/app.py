from flask import Flask
from auth import auth
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth, url_prefix="/auth")

if __name__ == "__main__":
    app.run(debug=True)
