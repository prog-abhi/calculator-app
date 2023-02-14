from flask import Flask
from app import routes, config

app = Flask(__name__)
app.config.from_object(config.Config)
app.register_blueprint(routes.bp_root)
app.register_blueprint(routes.bp_app)
