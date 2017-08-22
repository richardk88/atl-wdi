# Challenge 1:
# a = true
# b = false

# puts a = b
# puts a = !b


#Challenge 2:
# a = nil
# p a
# puts "#{a} was here."
# print a
# puts a.class


#Challenge 3:
# d = Fixnum
# puts d
# e = Float
# puts e 
# d = e
# puts d


#Challenge 4:
# christine = "Hi, I'm Christine"
# likesTo = "long walks on the beach, kinda."
# tims = christine
# puts tims + " and I like " + likesTo
# g = "2"
# gToNumber = 2
# puts g.to_i + gToNumber


#Challenge 5:
# puts "Pick a number 1-10."
# number = gets.chomp.to_i
# puts number * 2

# puts "What's your name?"
# name = gets.chomp

# puts "What do you like to do?"
# hobby = gets.chomp

# puts "#{name} likes to #{hobby}"


#Challenge 6:
# myFirstArray = []
# myFirstArray = ["a","b","c","d","e",1,2,3,4]
# puts myFirstArray.last
# puts myFirstArray.first
# myFirstArray[1] = "Joe"
# myFirstArray[2] = 3
# myFirstArray.push("true")
# puts myFirstArray[3].class


#Challenge 7:
# myFavoritAnimals = {
#     "Edgar": "Donkey",
#     "Mike": "Monkey",
#     "Fred": "Frog",
#     "Jim": "Giraffe",
#     "Lilly": "Lion"
# }
# myFavoritAnimals[:Edgar] = "Bear"

# favoriteMovie = {}
# favoriteMovie = ["movie": "Moana"]


#Challenge 8:
# firstRange = (1..10).to_a
# secondRange = (1...1000).to_a

# for number in firstRange do
#     p number.to_s
# end

# x = 0
# while x < 50 do
#     puts secondRange[x]
#     x += 1
# end

# newArray = []
# firstRange.each_with_index do |number, index|
#     if index.even?
#         newArray << (number * 2)
#     end
# end
# puts newArray


#Challenge 9:
sum = 0
for i in (1...1000) do
    if i % 3 == 0 or i % 5 == 0
        sum += 1
    end
end
puts sum