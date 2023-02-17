from flask import Blueprint, render_template, request
from .data import nameMapping
from .helper import mapToFunc, validate

bp_root = Blueprint("root", __name__, url_prefix="/")
bp_app = Blueprint("app", __name__, url_prefix="/app")

@bp_root.route("/")
def root():
    return render_template("base.html", root='root')


@bp_app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST" :
        data = request.get_json()
        infix_array = data['payload']

        print(infix_array)

        # map to func names
        infix_array_updated = mapToFunc(infix_array)

        # operators
        oprs = [
            "+",
            "/",
            "*",
            "-",
            "**",
            "^",
        ]

        # validate the expression
        value = None
        if validate(infix_array_updated, oprs):
            try:
                print(infix_array_updated)
                value = eval(''.join(infix_array_updated))
            except:
                value = "Wrong expression"
            # if validation successfull evaluate the expression
            # and load page

            # else return load error page
        else:
            value = "Wrong expression"
        return {
            "value": value
        }

    return render_template("calculatorSkeleton.html", nameMapping=nameMapping)
