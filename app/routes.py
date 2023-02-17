from flask import Blueprint, render_template, request
from .data import nameMapping

bp_root = Blueprint("root", __name__, url_prefix="/")
bp_app = Blueprint("app", __name__, url_prefix="/app")

@bp_root.route("/")
def root():
    return render_template("base.html", root='root')


@bp_app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST" :
        print(request.get_json())

        # validate the expression

            # if validation successfull evaluate the expression
            # and load page

            # else return load error page

        return {
            "value": 'done!'
        }
    return render_template("calculatorSkeleton.html", nameMapping=nameMapping)
