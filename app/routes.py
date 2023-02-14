from flask import Blueprint, render_template

bp = Blueprint("root", __name__, url_prefix="/app")

@bp.route("/")
def home():
    return render_template("base.html")
