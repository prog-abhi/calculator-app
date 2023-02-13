from flask import Blueprint

bp = Blueprint("root", __name__, url_prefix="/")

@bp.route("/")
def root():
    return f"<h1>Working!</h1>"
