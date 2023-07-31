# More Method Madness

## Method of Thrones

Create a method called `character_house`.
* This method should take two string arguments: `first_name` and `house_name`.
* When executed, the method should return "`first_name`, house of `house_name`".

Example:
```ruby
character_house("Tyrion", "Lannister")
# output => "Tyrion, house of Lannister."
```
```ruby
# write your code here
def character_house(first_name,house_name)
  "#{first_name}, house of #{house_name}"
end
```

## Triangulate It

Create a method called `triangle_checker`.
* It should take three numbers as arguments.
* Each of those arguments represents an angle.
* If those three numbers add up to 180, then return `true`.
* If those three numbers do not add up to 180, then return `false`.

```ruby
# write your code here
def triangle_checker(ang1,ang2,ang3)
  return true if ang1 + ang2 + ang3 == 180

  false
end

```

## Fizz Buzz

Everyone's favorite! Create a method called `fizz_buzz` that takes a number (`max_number`) as an argument.

When `fizz_buzz(max_number)` is executed, it should do the following for every number from 0 *up to* the `max_number`:
* If a number is divisible by 3, it should log the word "Fizz" to the console.
* If a number is divisible by 5, it should log "Buzz".
* If a number is divisible by both 3 and 5, it should log "FizzBuzz".
* Otherwise, it should just log the number.

## Manipulative Methods

1. Declare a method called `big_backwards` that takes a single string as an argument and returns that string backwards and uppercase.

```ruby
# write your code here
def fizz_buzz(max_number)
  (0..max_number).each do |num|
    if num % 3 == 0 && num % 5 == 0
      puts "FizzBuzz"
    elsif num % 3 == 0 
      puts "Fizz"
    elsif num % 5 == 0 
      puts "Buzz"
    else
      puts num
    end
  end
end
```

2. Declare a method called `informed_counter` that takes a string and returns a string explaining the size of that string.

Example output:
```
"The word 'dog' has 3 letters!"
```
```ruby
# write your code here
def informed_counter(str)
  "The word #{str} has #{str.chars.count} letters!"
end
```

3. Declare a method called `big_ordered_array` that takes an array of strings and returns that array of strings with all the letters uppercased. Sort the array by the length of each string, and then alphabetically.

Example output:
```ruby
test_array = ['i', 'love', 'making', 'arrays', 'full', 'of', 'strings']
big_ordered_array(test_array)
# output => ['I', 'OF', 'FULL', 'LOVE', 'ARRAYS', 'MAKING', 'STRINGS']
```
```ruby
# write your code here
def big_ordered_array(words)
  words.map(&:upcase).sort_by(&:length).sort
end
```

4. Declare a method called `lucky_number` that takes two numbers as arguments and returns "Unlucky!" if the sum of those numbers is divisible by 13, and "Lucky!" if not.

```ruby
# write your code here
def lucky_number(num1,num2)
  return "Unlucky!" if (num1 + num2) % 13 == 0

  "Lucky!"
end
```
