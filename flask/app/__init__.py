from flask import Flask
from flask_mail import Mail

mail = Mail()

app = Flask(__name__)
mail.init_app(app)

from app import routes