# Conditionals

## Color Conditions

Chartreuse is my favorite color. Magenta is my second favorite. Periwinkle is my third favorite. I hate every other color!
* In Ruby, write a conditional that will check a variable set to a color and tell me how I feel about it.

```ruby
color = "Magenta"

# write your code here
if color == "Chartreuse"
  puts "This is my favorite color!"
elsif color == "Magenta"
  puts "This is my second favorite color!"
elsif color == "Periwinkle"
  puts "This is my least favorite color but atleast it is not something other than my top 3!"
else
  puts "I hate it!"
end
```

Now, turn your color conditional into a method called `color_checker` that takes any color as an argument.

```ruby
def color_checker(color)
  # write your code here
  if color == "Chartreuse"
    puts "This is my favorite color!"
  elsif color == "Magenta"
    puts "This is my second favorite color!"
  elsif color == "Periwinkle"
    puts "This is my least favorite color but atleast it is not something other than my top 3!"
  else
    puts "I hate it!"
  end
end


```

## Conditioner Conditional
Create a Ruby method called `temperature_status` that takes three arguments: the current temperature, whether the A/C is functional or not, and the desired temperature.

  - If the air conditioner is functional and the current temperature is above the the desired temperature, print the string "Turn on the A/C, please."
  - If the air conditioner is non-functional and the current temperature is above the the desired temperature, print the string "Fix the A/C now!  It's hot!"
  - If the air conditioner is non-functional and the current temperature is below the the desired temperature, print the string "Fix the A/C whenever you have the chance. It's cool."

```ruby
# write your code here
def temperature_status(current, condition, desired)
  if condition == true && current > desired
    puts "Turn on the A/C, please."
  elsif condition == false && current > desired
    puts "Fix the A/C now! It's hot!"
  elsif condition == false && current < desired
    puts "Fix the A/C whenever you have the chance. It's cool."
  end
end
```


## Palindrome Checker

Create a Ruby method that takes a word or phrase and checks whether or not it's a palindrome (reads the same backward as forward).

```ruby
# write your code here
def palidromeChecker(word)

  if word == word.reverse()
    puts "It is a Palidrome!"
  else
    puts "It is not a Palidrome."
  end
end

```
