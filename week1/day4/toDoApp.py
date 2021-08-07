
tasksList = []


while True:
 menu = input("\nPress 1 and hit 'enter' to add task\n\nPress 2 and hit 'enter' to delete task\n\nPress 3 and hit 'enter' to view all tasks\n\nPress q to quit:")


 if menu == "1":
    task = input("\nEnter title of task and then hit 'enter'; or hit 'enter' to go back to main menu:")
    priority = input("\nEnter Priority of Task (High, Medium, or Low) or hit 'enter' to go back to main menu:")
    while len(task) > 0 and len(priority) > 0:
       tasksList.append(task + "--" + priority)
       count = 1
       for tasks in tasksList:
          print("%d: %s" % (count, tasks))
          count = count + 1
       task = input("\nEnter title of task and then hit 'enter'; or hit 'enter' to go back to main menu:")
       if task == "":
          break
       priority = input("\nEnter Priority of Task (High, Medium, or Low) or hit 'enter' to go back to main menu:")
       if priority == "":
          break
       


 elif menu == "2":
     count = 1
     for tasks in tasksList:
        print("\n%d: %s" % (count, tasks))
        count += 1
     choice = input("\nEnter the number of the task you want to delete:")
     while len(choice) > 0:
          choice = int(choice)
          choice -= 1

          if choice >= 0 and choice < len(tasksList):
              deletedTask = tasksList[choice]
              del tasksList[choice]
              print("\n%s has been deleted!" % deletedTask)
          else:
             print("\nValue Error:")
          choice = input("\nEnter the number of the task you want to delete or hit 'enter' to go back to main menu:")
 
 
 #for menu item "3" viewing all tasks
 elif menu == "3":
     count = 1
     print("\nYour Current Tasks Are:")
     for items in tasksList:
        print("\n%d: %s" % (count, items))
        count += 1
     userInput = input("\nHit 'enter' To Go Back To Main Menu")


#for menu item "q" stopping the program
 elif menu == "q" or menu == "Q":
    print("Goodbye!")
    break

 
 #This is incase the user types anything other than an option from the main menu when prompted to enter a menu number. 
 else:
    print("\nError: Please Type a Valid Number from the Menu and Hit 'enter':")
    

         
       
    

  
          
       
    

    


         