from flask import Blueprint, render_template, request
import json
from requests import post
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
            "^",
            "%",
        ]

        constants = ["pi"]

        print(infix_array_updated)


        # validate the expression
        value = None
        if validate(infix_array_updated, oprs, constants):
            try:

                url = "http://api.mathjs.org/v4/"
                headers = {
                    "content-type": "application/json"
                }
                payload = {
                    "expr": ''.join(infix_array_updated)
                }

                response = post(
                    url,
                    headers=headers,
                    data=json.dumps(payload)
                )

                value = response.json()['result']
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
