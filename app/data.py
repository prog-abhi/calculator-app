nameMapping = [
    ["←", "(", ")", "mod", "π"],
    ["7", "8", "9", "/", "√"],
    ["4", "5", "6", "x", "x²"],
    ["1", "2", "3", "-", "="],
    ["0", ".", "%", "+"],
]

charToFuncMap = {
    "mod": '%',
    "%": ["/", "100"],
    "x²": ["^", "2"],
    "π": ["pi"],
    "x": "*",
    "√": ["^", "(",  "1", "/", "2", ")"]
}
