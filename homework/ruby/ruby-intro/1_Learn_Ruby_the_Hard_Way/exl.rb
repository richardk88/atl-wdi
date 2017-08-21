# puts "I will now count my chickens:"

# puts "Hens #{25 + 30 / 6}"
# puts "Roosters #{100 - 25 * 3 % 4}"

# puts "Now I will count the eggs:"

# puts 3 + 2 + 1 - 5 + 4 % 2 - 1 / 4 + 6

# puts "Is it true that 3 + 2 < 5 - 7?"

# puts 3 + 2 < 5 - 7

# puts "What is 3 + 2? #{3 + 2}"
# puts "What is 5 - 7? #{5 - 7}"

# puts "Oh, that's why it's false."

# puts "How about some more."

# puts "Is it greater? #{5 > -2}"
# puts "Is it greater or equal? #{5 >= -2}"
# puts "Is it less or equal? #{5 <= -2}"




# cars = 100
# space_in_a_car = 4.0
# drivers = 30
# passengers = 90
# cars_not_driven = cars - drivers
# cars_driven = drivers
# carpool_capacity = cars_driven * space_in_a_car
# average_passengers_per_car = passengers / cars_driven

# puts "There are #{cars} cars available."
# puts "There are only #{drivers} drivers available."
# puts "There will be #{cars_not_driven} empty cars today."
# puts "We can transport #{carpool_capacity} people today."
# puts "We have #{passengers} to carpool today."
# puts "We need to put about #{average_passengers_per_car} in each car."




# my_name = 'Zed A. Shaw'
# my_age = 35 # not a lie in 2009
# my_height = 74 # inches
# my_weight = 180 # lbs
# my_eyes = 'Blue'
# my_teeth = 'White'
# my_hair = 'Brown'

# puts "Let's talk about #{my_name}."
# puts "He's #{my_height} inches tall."
# puts "He's #{my_weight} pounds heavy."
# puts "Actually that's not too heavy."
# puts "He's got #{my_eyes} eyes and #{my_hair} hair."
# puts "His teeth are usually #{my_teeth} depending on the coffee."

# # this line is tricky, try to get it exactly right
# puts "If I add #{my_age}, #{my_height}, and #{my_weight} I get #{my_age + my_height + my_weight}."




# types_of_people = 10
# x = "There are #{types_of_people} types of people."
# binary = "binary"
# do_not = "don't"
# y = "Those who know #{binary} and those who #{do_not}."

# puts x
# puts y

# puts "I said: #{x}."
# puts "I also said: '#{y}'."

# hilarious = false
# joke_evaluation = "Isn't that joke so funny?! #{hilarious}"

# puts joke_evaluation

# w = "This is the left side of..."
# e = "a string with a right side."

# puts w + e




# puts "Mary had a little lamb."
# puts "Its fleece was white as #{'snow'}."
# puts "And everywhere that Mary went."
# puts "." * 10  # what'd that do?

# end1 = "C"
# end2 = "h"
# end3 = "e"
# end4 = "e"
# end5 = "s"
# end6 = "e"
# end7 = "B"
# end8 = "u"
# end9 = "r"
# end10 = "g"
# end11 = "e"
# end12 = "r"

# # watch that print vs. puts on this line what's it do?
# print end1 + end2 + end3 + end4 + end5 + end6
# puts end7 + end8 + end9 + end10 + end11 + end12




# days = "Mon Tue Wed Thu Fri Sat Sun"
# months = "Jan\nFeb\nMar\nApr\nMay\nJun\nJul\nAug"

# puts "Here are the days: #{days}"
# puts "Here are the months: #{months}"

# puts %q{
# There's something going on here. 
# With this weird quote
# We'll be able to type as much as we like.
# Even 4 lines if we want, or 5, or 6.
# }




# def gold_room
#     puts "This room is full of gold.  How much do you take?"
  
#     print "> "
#     choice = $stdin.gets.chomp
  
#     # this line has a bug, so fix it
#     if choice.include?("0") || choice.include?("1")
#       how_much = choice.to_i
#     else
#       dead("Man, learn to type a number.")
#     end
  
#     if how_much < 50
#       puts "Nice, you're not greedy, you win!"
#       exit(0)
#     else
#       dead("You greedy bastard!")
#     end
#   end
  
  
#   def bear_room
#     puts "There is a bear here."
#     puts "The bear has a bunch of honey."
#     puts "The fat bear is in front of another door."
#     puts "How are you going to move the bear?"
#     bear_moved = false
  
#     while true
#       print "> "
#       choice = $stdin.gets.chomp
  
#       if choice == "take honey"
#         dead("The bear looks at you then slaps your face off.")
#       elsif choice == "taunt bear" && !bear_moved
#         puts "The bear has moved from the door. You can go through it now."
#         bear_moved = true
#       elsif choice == "taunt bear" && bear_moved
#         dead("The bear gets pissed off and chews your leg off.")
#       elsif choice == "open door" && bear_moved
#         gold_room
#       else
#         puts "I got no idea what that means."
#       end
#     end
#   end
  
  
#   def cthulhu_room
#     puts "Here you see the great evil Cthulhu."
#     puts "He, it, whatever stares at you and you go insane."
#     puts "Do you flee for your life or eat your head?"
  
#     print "> "
#     choice = $stdin.gets.chomp
  
#     if choice.include? "flee"
#       start
#     elsif choice.include? "head"
#       dead("Well that was tasty!")
#     else
#       cthulhu_room
#     end
#   end
  
  
#   def dead(why)
#     puts why, "Good job!"
#     exit(0)
#   end
  
#   def start
#     puts "You are in a dark room."
#     puts "There is a door to your right and left."
#     puts "Which one do you take?"
  
#     print "> "
#     choice = $stdin.gets.chomp
  
#     if choice == "left"
#       bear_room
#     elsif choice == "right"
#       cthulhu_room
#     else
#       dead("You stumble around the room until you starve.")
#     end
#   end
  
#   start




# ten_things = "Apples Oranges Crows Telephone Light Sugar"

# puts "Wait there are not 10 things in that list. Let's fix that."

# stuff = ten_things.split(' ')
# more_stuff = ["Day", "Night", "Song", "Frisbee", "Corn", "Banana", "Girl", "Boy"]

# # using math to make sure there's 10 items

# while stuff.length != 10
#   next_one = more_stuff.pop
#   puts "Adding: #{next_one}"
#   stuff.push(next_one)
#   puts "There are #{stuff.length} items now."
# end

# puts "There we go: #{stuff}"

# puts "Let's do some things with stuff."

# puts stuff[1]
# puts stuff[-1] # whoa! fancy
# puts stuff.pop()
# puts stuff.join(' ')
# puts stuff[3..5].join("#")




class Song
    
      def initialize(lyrics)
        @lyrics = lyrics
      end
    
      def sing_me_a_song()
        @lyrics.each {|line| puts line }
      end
    end
    
    happy_bday = Song.new(["Happy birthday to you",
               "I don't want to get sued",
               "So I'll stop right there"])
    
    bulls_on_parade = Song.new(["They rally around tha family",
                "With pockets full of shells"])
    
    happy_bday.sing_me_a_song()
    
    bulls_on_parade.sing_me_a_song()