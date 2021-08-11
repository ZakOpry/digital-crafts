

shoppingLists = []

class List1:
    def __init__(self, title, store):
        self.title = title
        self.store = store
        self.items = []

    def addItems(self, items):
        self.items.append(items)


class Item:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity


while True:
 mainChoice = input("\nHello!\n\nType 1 to create a new list:\nType 2 to Add to an Exsisting List\nType 3 to View Current Lists\nType 'q' to Quit")

 if mainChoice == "1":
     listname = input("What Would You Like to Call this List? ")
     storeChoice = input("What Store Will this List be for?")
     userList = List1(listname, storeChoice)
    
     while True:
      productName = input("\nEnter the Name of the Item You Want on Your List:")
      productPrice = input("\nEnter the Price of the Item:")
      productQty = input("\nEnter the QTY of the Item:")
      userItems = Item(productName, productPrice, productQty)
      userList.addItems(userItems)
      shoppingLists.append(userList)
      yesOrNo = input("Would You Like to Add More?")

      while True:
       if yesOrNo == "Yes" or yesOrNo == "YES" or yesOrNo == "yes":
          productName = input("\nEnter the Name of the Item You Want on Your List:")
          productPrice = input("\nEnter the Price of the Item:")
          productQty = input("\nEnter the QTY of the Item:")
          userItems = Item(productName, productPrice, productQty)
          userList.addItems(userItems)
          yesOrNo = input("Would You Like to Add More?")
           
       elif yesOrNo == "No" or yesOrNo == "NO" or yesOrNo == "no":
             break
      break 


 elif mainChoice == "2":
     y = 1
     for x in shoppingLists:
         print(y, x.title)
         y += 1
     listChoice = input("\nWhich List Would You Like to Add Too?")
     while len(listChoice) > 0:
         listChoice = int(listChoice)
         listChoice -= 1
         productName = input("\nEnter the Name of the Item You Want on Your List:")
         productPrice = input("\nEnter the Price of the Item:")
         productQty = input("\nEnter the QTY of the Item:")
         userItems = Item(productName, productPrice, productQty)
         exsitingList = shoppingLists[listChoice].items
         exsitingList.append(userItems)
         input3 = input("Would You Like to Add More?")
         if input3 == "yes" or input3 == "Yes":
             continue
         else: 
             break




 elif mainChoice == "3":
  while True:

     y = 1
     print("\nYour Current List(s) are")
     for x in shoppingLists:
         print(y, x.title)
         y += 1
     viewList = input("\n Select the Number of the List You Want to View")
     viewList = int(viewList)
     viewList -= 1

     print("\nStore:", "", shoppingLists[viewList].store)
        

     for z in shoppingLists[viewList].items:
         print("\nName:", "", z.name)
         print("Price:", "", z.price)
         print("Quantity:", "", z.quantity)
         

     userChoice3 = input("Would You Like to View Another List?")
     if userChoice3 == "Yes" or userChoice3 == "yes":
         continue
     else:
         break


 else:
     break


     
        






 

    

    




