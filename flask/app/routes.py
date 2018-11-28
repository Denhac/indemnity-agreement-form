from app import app, mail
from flask import request
from flask_mail import Message
from pprint import pprint
from app.classes import SignatureSchema

@app.route('/')
@app.route('/index')
def index():
    return("IAFprocessor is running")

@app.route('/signature', methods={'POST'})
def process_signature():
    content = request.get_json()
    schema = SignatureSchema()
    result = schema.load(content)[0]
    return result["name"]