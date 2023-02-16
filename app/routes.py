from flask import Blueprint, render_template
from .data import nameMapping

bp_root = Blueprint("root", __name__, url_prefix="/")
bp_app = Blueprint("app", __name__, url_prefix="/app")

@bp_root.route("/")
def root():
    return render_template("base.html", root='root')


@bp_app.route("/")
def home():
    return render_template("calculatorSkeleton.html", nameMapping=nameMapping)
