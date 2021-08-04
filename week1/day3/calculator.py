input1 = int(float(input("Enter Number")))
print(input1)

input2 = input("Type +, -, *, or /")
print(input2)

input3 = int(float(input("Enter Number")))
print(input3)


if input2 == "+":
    print(int(float(input1 + input3)))

elif input2 == "-":
    print(int(float(input1 - input3)))

elif input2 == "*":
    print(int(float(input1 * input3)))

elif input2 == "/":
    print(int(float(input1 / input3)))

else:
    print("Error: Please select + - * or /")