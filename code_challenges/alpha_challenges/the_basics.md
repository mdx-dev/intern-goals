# The Basics

Answer the questions below. Feel free to use this [markdown cheat sheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) to help with formatting!

## Question 1

```ruby
a = 5
b = 4
a = b
```

At the end of this program, what are the values of a and b? Try to explain, in plain English, how you got your answer for each one.

**Answer 1:**
a is 4 and b is 4
Code reads from top to bottom, since a is being assigned to the value b at the end of the code. Then variable a is 4 which is what the value of b is as well.

## Question 2

```ruby
e = 3
f = 9
g = e + f
f == g
e = 3
```

At the end of this program, what are the values of e, f, and g? Try to explain, in plain English, how you got your answer for each one.

**Answer 2:**
e is 3, f is 9, and g is 12
<!-- e was originally 3 and was reassigned to 3 again. f was 9 but reassigned to the value of g which is 12. Since g is 12 because e from the first line was 3 and f was 9 equals to 12. -->

## Question 3

```ruby
weather = "cloudy"
weather == "cloudy"
```

What is the difference between these two statements? Explain your answer.

**Answer 3:**
One is the assignment operator, while the second one is the comparison operator because on line 38 it is assigning the variable weather to a string called cloudy, while the line 39 is only comparing weather to a string called "cloudy".

## Question 4

```ruby
x = 2

if x == 3
  puts "sushi is tasty"
elsif x > 0
  puts "sushi is delicious"
end
```

Imagine that you take the code from this question, save it to a file called `sushi.rb`, and run `ruby sushi.rb` in your Terminal.

What would be the output? Explain your answer.

**Answer 4:**
The output would be 
- sushi is delicious

because the if statement is false, variable x does not equal 3, then elsif is next which is a true statement and the string will be displayed in the output

## Question 5

```ruby
food = "walnut"

if food == "walnut"
  puts "I'm allergic!"
end
```

If you ran this code, what would be the output? Explain your answer.

**Answer 5:**
the output would be
- I'm allergic!

Since its double equal signs it must have the same variable type and value, so I believe the statement returns true.

## Question 6

```ruby
  a = "4" + 10
```

What would happen here and why? How should I change this code to get an output of 14?

**Answer 6:**
A syntax error will occur because a string and a integer is not the same type of variable to be added together.
By Removing the qoutes on the 4 to make it a integer instead to get a output of 14.

## Question 7

```ruby
 turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]
```

What is the index value of "Michelangelo"?

**Answer 7:**
Index value is 2

## Questions 8

```ruby
 jurassic_park = { "T-Rex" => 1, "Triceratops" => 4, "Velociraptors" => 6, "Humans" => ["Dr. Malcolm", "Dr. Grant"] }
```

* In Ruby, write code to access access the number of "Triceratops" in `jurassic_park`.

**Answer 8A:**
```ruby
# write your code here
jurassic_park["Triceratops"]
jurassic_park.fetch("Triceratops", "Hello")
```

* In Ruby, write code to add "Dr. Satler" to the "Humans" of `jurassic_park`.

**Answer 8B:**
```ruby
# write your code here
jurassic_park["Humans"] << "Dr. Satler"
jurassic_park["Humans"].insert(3, "Dr. Satler")
jurassic_park["Humans"].push("Dr.Sather")
```

## Question 9

```ruby
x = 0

while x < 4
  turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]
  puts turtles[x]

  x = x + 1
end
```

* Examine the above code and imagine that you run it.
* What do you expect the outcome will be? Explain your answer.

**Answer 9:**
The expected outcome would be an error because there is no index of 4 in that array.
Since x equals 0, the code will run 4 times because its adding 1 to the variable after the statement is done. 

## Question 11

* Write a ruby method called `names` that returns an array with two names as strings inside of it.

**Answer 11:**
```ruby
def names
  # write your code in here
  ["Brailyn", "Paulino"]
end

```

## Question 12

* Write a ruby method called `caps` that takes a string as an argument and returns that string with all capital letters. (Hint: use the format from question 11 to write your method.)

**Answer 12:**
```ruby
# write your code here
def caps(str)
  str.upcase
end
```