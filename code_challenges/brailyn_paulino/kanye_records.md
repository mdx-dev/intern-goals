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
# write your code here
kanyeRecords.each do | key |
  print key[:title]
end
```

2. Print the year every Kanye record was released.

```ruby
# write your code here
#write your code here
kanyeRecords.each do | key |
  print key[:year]
end
```

3. Look into the future and add a forthcoming Kanye record into our array. It should be released in 2021 and have a title that is completely asinine.

```ruby
# write your code here
print kanyeRecords.push({year: "2021", title: "completely asinine"})
```

4. Iterate through Kanye's record collection and print out the titles of all the records released after Kanye's ego exploded (this happened in 2007).

```ruby
# write your code here
kanyeRecords.each do | key |
  print key[:title] if key[:year] > 2007
end
```

5. Iterate through the collection. For each record, print out a sentence detailing each record (e.g. "'Graduation' was released in 2007.").

```ruby
# write your code here
kanyeRecords.each do | key |
  print "#{key[:title]} was realesed in #{key[:year]}. "
end
```

6. Iterate through collection. add a key value pair to each record with the key as `label` and the value as `"def jam"`.

```ruby
# write your code here
kanyeRecords.each do | key |
  key.store(:label,"def jam")
end
```

***BONUS***

1. Iterate through the collection. If a record's title contains more than 15 letters, print `"That's a long title."`

```ruby
# write your code here
kanyeRecords.each do | key |
  print "That's a long title." if key[:title].chars.count > 15
end
```

2. Iterate through the collection. Replace the letter 'o' in each record title with the number 0.

```ruby
# write your code here
kanyeRecords.each do | key |
  new_record = key[:title].gsub("o","0")
end
```