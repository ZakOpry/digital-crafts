# Conditionals

print("Welcome to this program")
firstName = input("What is your first name?")
length_of_first_name = len(firstName)
print(firstName)


if length_of_first_name <= 0:
 print("Please enter at least one character")
else:
    print(f"Hello {firstName}")
   
 