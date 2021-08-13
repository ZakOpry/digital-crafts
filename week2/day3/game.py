from random import randint
from random import choice
from time import sleep

class Hero:
    def __init__(self, name, health=100):
     self.name = name
     self.health = health
     

    def printAll(self):
        print("\nName: ", self.name)
        print("\nHealth: ", self.health, "\n")
        return

    def getHealth(self): 
        self.health += 5

    def takeDamage0(self):
        self.health = 0

    def takeDamage1(self):
        self.health -= 25

    def takeDamage2(self):
        self.health -= 20

    def takeDamage3(self):
        self.health -= 40



class Villain:
    def __init__(self, name, health=100):
        self.name = name
        self.health = health

    def takeDamage4(self):
        self.health -= 20

    def takeDamage5(self):
        self.health -= 30

    def takeDamage6(self):
        self.health -= 25

    def takeDamage7(self): 
        self.health = 0

    def printItAll(self):
        print("\nName: ", self.name)
        print("\nHealth: ", self.health, "\n")

def fightMenu():
    fight = input("What do You do??\n1: Upper Cut\n2: Attack With Pirougue Paddle\n3: Throw a Delicous Yet Dangerous Seasoning Blend at Her\n")
    if fight == "1":
     print("\n(Marie Takes an Uppercut)")
     villain1.takeDamage4()
     sleep(1)
     print("\n Marie's Health is now", villain1.health)
    elif fight == "2":
     print("\n(Marie Gets Whacked With Paddle)")
     villain1.takeDamage5()
     sleep(1)
     print("\n Marie's Health is now", villain1.health)
    elif fight == "3":
     print("\n(Marie Has Seasonoing Thrown Into Her Eyes)")
     villain1.takeDamage6()
     sleep(1)
     print("\n Marie's Health is now", villain1.health)
    else:
        print("\nINVALID ENTRY: PLEASE CHOOSE NUMBER OF ACTION YOU WISH TO TAKE\n")
        fightMenu()
    return 

def villianAttack():
    x = choice(("Marie Attacks With a Voodoo Doll", "Marie Attacks by Throwing Voodoo Dust", "Marie Attacks With a Screech (Sahhhhhh!)"))
    sleep(1)
    print(x)
    if x == "Marie Attacks With a Voodoo Doll":
        hero1.takeDamage1()
        sleep(1)
        print("\nYour Health is now", hero1.health )
    elif x == "Marie Attacks by Throwing Voodoo Dust":
        hero1.takeDamage2()
        sleep(1)
        print("\nYour Health is now", hero1.health )
    elif x == "Marie Attacks With a Screech (Sahhhhhh!)":
        hero1.takeDamage3()
        sleep(1)
        print("\nYour Health is now", hero1.health )
    return 
      
def finalFight():
 while hero1.health > 0 and villain1.health > 0:   
    sleep(1)
    print("\nBoudreaux: I'LL NEVER ACCEPT DEFEAT!!!\n")
    fightMenu()
    if villain1.health > 0:
     villianAttack()
    if hero1.health <= 0:
     sleep(1)
     print("****MARIE LAVEAU HAS DEFEATED YOU, BETTER LUCK NEXT TIME****")
    elif villain1.health <= 0:
     sleep(1)
     print("****CONGRATS! YOU HAVE DEFEATED MARIE LAVEAU****")
    
hero1 = Hero("Boudreaux", 100)
villain1 = Villain("Marie Laveau", 120)

                    


print("\n****WELCOME TO ATCHAFALAYA ADVENTURES!!!!****")
print("\n\nDeep in the Swamps of the Atchafalaya Basin in Southern Louisiana, You Find Yourself at Home Getting Ready for the Crawfish Harvest Season.")
print("Everything Seemed Normal Until You Heard Talk Going Around that the Famous Voodoo Queen Marie Laveau has Come Back to Claim the Swamp and Wreak Havoc!")
print("\nYou Must Now Prepare for the FIGHT OF YOUR LIFE!\n")

def mainMenu():
 while hero1.health > 0 and villain1.health > 0:
     menuChoice = input("What Would You Like to Do?\n1: Harvest Crawfish for Health\n2: View Boudreaux's Stats:\n3: View Marie Laveau's Stats\n4: Take on Marie Laveau!")
     if menuChoice == "1":
      print("\nThibodeau: Welcome to da Annual Crawfish Harvest Boudreaux, We've Got 10 of Dem Traps Set Out There. You Needa Pick da right trap to Get us dem Crawdaddys! ")
      print("Thibodeau: For Every Trap ya Pick Dats got Crawfish in it, I'll Give you 5 Health Points!")

      trap = randint(1, 10)
      while True:
        userChoice = input("\nChoose Which Trap (1-10) to Pick Up or Press 'q' to go back to main menu:\n")
        if userChoice == "q" or userChoice == "Q":
          break
          

        elif int(userChoice) == trap:
             print("\nOhhh Ya Got it! Heres 5 Health Points for all Ya Hard Work\n")
             hero1.getHealth()
             trap = randint(1, 10)
             continue
                
        elif int(userChoice) != trap:
             sleep(.5)
             print("\nThis One Aint Got No Crawfish Boudreaux!! Try again!\n")
             continue
         

     elif menuChoice == "2":
      hero1.printAll()

     elif menuChoice == "3":
      villain1.printItAll()

     elif menuChoice == "4":
      print("\nAs You are Paddling Down the Swamp in Your Trusty Pirougue, You Hear a Terrible Screech (AHHHHHHHH) and You Look in the Distance and See the Voodoo Queen Herself!")
      print("It's Marie Laveau! She Quickly Notices You and Charges!\n")
      sleep(1)
      fightMenu()

      print("\nStunned by Your Attack, Marie Yells: PUNY CAJUN, YOU'RE NO MATCH FOR ME!\n") 
      villianAttack()

      fightOrFlight = input("\nMarie is Getting Ready for Another Attack, QUICK; DO YOU 1: FIGHT OR 2: RUN?")
      if fightOrFlight == "1":
        print("\nBoudreaux: I AIN'T SCARED!!!!")
        fightMenu()
        print("\n Marie: YOU WILL NOT DEFEAT ME, THIS SWAMP IS MINE!!!!!")
        villianAttack()

        print("\nMarie's Attack has Left You Injured")

        choice2 = input("\nWhat do You Do?\n1: Continue Fighting!\n2: Beg for Mercy! ")
        while True:
         if choice2 == "1":
          while hero1.health > 0 and villain1.health > 0:   
           print("\nBoudreaux: I'LL NEVER ACCEPT DEFEAT!!!\n")
           fightMenu()
           if villain1.health > 0:
            villianAttack()
           if hero1.health <= 0:
              print("****MARIE LAVEAU HAS DEFEATED YOU, BETTER LUCK NEXT TIME****")
           elif villain1.health <= 0:
               print("****CONGRATS! YOU HAVE DEFEATED MARIE LAVEAU****")
               break
         elif choice2 == "2":
             print("****MARIE LAVEAU HAS DEFEATED YOU, BETTER LUCK NEXT TIME****")
             hero1.takeDamage0()
             break
         else:
            print("Invalid Choice, Please Enter the Number for the Action You'd Like to Take")

         
      elif fightOrFlight == "2":
          print("\nYou Run and Take Cover Behind a Nearby Tree")
          hero1.getHealth()
          print("\nTaking Cover has Given You 5 Additional Health Points!")
          print("\n Your Health is now", hero1.health, "\n")
          finalFight()
      
        

     else:
      print("Invalid Choice, Please Enter the Number for the Action You'd Like to Take")
  
         

mainMenu()

print("\n+++++THANK YOU FOR PLAYING ATCHAFALAYA ADVENTURES!!!+++++")


    













