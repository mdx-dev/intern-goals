# My Beautiful Dark Twisted Enumeration Exercise

```
kanyeRecords = [
  { year: 2016, title: "The Life of Pablo" },
  { year: 2013, title: "Yeezus" },
  { year: 2011, title: "Watch the Throne" },
  { year: 2010, title: "My Beautiful Dark Twisted Fantasy" },
  { year: 2008, title: "808s and Heartbreak" },
  { year: 2007, title: "Graduation" },
  { year: 2005, title: "Late Registration" },
  { year: 2004, title: "The College Dropout" }
]
```


## Programmatically do the following:

1. Print the name of every Kanye record.

```ruby
kanyeRecords.each do |album|
  puts album[:title]
end```

2. Print the year every Kanye record was released.

```ruby
kanyeRecords.each do |album|
  puts album[:year]
end```

3. Look into the future and add a forthcoming Kanye record into our array. It should be released in 2021 and have a title that is completely asinine.

```ruby
kanyeRecords.each do |album|
  puts "#{album[:year]} - #{album[:title]}"
end```

4. Iterate through Kanye's record collection and print out the titles of all the records released after Kanye's ego exploded (this happened in 2007).

```ruby
kanyeRecords.each do |album|
  if album[:year] > 2007
    puts album[:title]
  end
end```

5. Iterate through the collection. For each record, print out a sentence detailing each record (e.g. "'Graduation' was released in 2007.").

```ruby
kanyeRecords.each do |album|
  puts "'#{album[:title]}' was released in #{album[:year]}."
end```

6. Iterate through collection. add a key value pair to each record with the key as `label` and the value as `"def jam"`.

```ruby
kanyeRecords.each do |album|
  album[:label] = "def jam"
end```

***BONUS***

1. Iterate through the collection. If a record's title contains more than 15 letters, print `"That's a long title."`

```ruby
kanyeRecords.each do |album|
  if album[:title].length > 15
    puts "That's a long title."
  end
end```

2. Iterate through the collection. Replace the letter 'o' in each record title with the number 0.

```ruby
kanyeRecords.each do |album|
  album[:title].gsub!('o', '0')
end```