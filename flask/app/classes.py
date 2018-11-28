from marshmallow import Schema, fields
import datetime
import base64

class Signature(object):
    name = ""
    handle = None
    date = ""
    email = ""
    signature_image = None

    def __init__(self, name, email, signature_b64, handle = None):
        self.name = name
        self.email = email
        self.handle = handle
        self.date = datetime.datetime.now()
        self.signature_image = base64.b64decode(signature_b64)

    def __repr__(self):
        return "Name: {0}\nDate: {1}\nEmail: {2}\nSignature Image:\n{3}".format(self.name,
                                                                                self.date,
                                                                                self.email,
                                                                                self.signature_image
                                                                               )

class SignatureSchema(Schema):
    name = fields.Str()
    email = fields.Str()
    handle = fields.Str()
    signature_image = fields.Raw()
