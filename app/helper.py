from .data import charToFuncMap

def is_float(char):
        try:
            float(char)
            return True
        except ValueError:
            return False


def mapToFunc(arr, constants):
    def cb(char):
        if char not in charToFuncMap.keys():
            return [char]
        else:
            return [*charToFuncMap[char]]

    def sqr_root_handler(arr):
        idx = 0
        mapped_arr = []
        while idx < len(arr):
            if arr[idx] == "√":
                if idx < len(arr) - 1:
                    if arr[idx + 1][0].isnumeric() or arr[idx+1] in constants:
                        mapped_arr.append(arr[idx+1])
                        mapped_arr.append("^")
                        mapped_arr.append("0.5")
                        idx += 2
                    elif arr[idx + 1] == "(":
                        j = idx + 1
                        while j < len(arr) and arr[j] != ")":
                            mapped_arr.append(arr[j])
                            j += 1
                        if arr[j] == ")":
                            mapped_arr.append(arr[j])
                        mapped_arr.append("^")
                        mapped_arr.append("0.5")
                        idx = j + 1
                    else:
                        mapped_arr.append("^")
                        mapped_arr.append("0.5")

            else: mapped_arr.append(arr[idx])
            idx+=1
        return mapped_arr

    ans = []
    for char in arr:
        ans = ans + cb(char)

    ans = sqr_root_handler(ans)

    return ans

def validate(arr, operators, constants):
    # validate brackets
    def validate_brackets(arr):
        stack = []
        for char in arr:
            if char == "(":
                stack.append(char)
            elif char == ")":
                if len(stack):
                    stack.pop()
                else:
                    return False
        if len(stack):
            return False
        else:
            return True


    # validate or other words
    def validate_for_other_words(arr, operators, constants):
        for char in arr:
            if char not in operators and mapToFunc(char, constants) not in operators and not is_float(char) and char not in constants and char not in ("(", ")"):
                return False
        return True


    # validate operator syntax
    def validate_operator_syntax(arr, operators):
        for idx, char in enumerate(arr):
            if char in operators:
                if idx == 0 or idx == len(arr) - 1 or (not (is_float(arr[idx-1]) or arr[idx-1] in ("(", ")")) and (is_float(arr[idx+1]) or arr[idx+1] in ("(", ")"))):
                    return False
        return True

    print(
        validate_brackets(arr),
        validate_for_other_words(arr, operators, constants),
        validate_operator_syntax(arr, operators)
    )

    return validate_brackets(arr) and validate_for_other_words(arr, operators, constants) and validate_operator_syntax(arr, operators)
