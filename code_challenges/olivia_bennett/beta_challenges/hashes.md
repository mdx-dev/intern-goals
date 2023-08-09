# Hashing It Out

## Movies

Manually create a hash with the following keys/values:

| Key | Value |
|---|---|
| 'Hitchcock' | ['Rear Window']|
| 'Truffaut' | ['400 Blows'] |
| 'Myers'  | ['Austin Powers', 'Shrek']|
| 'fruit' | 'banana' |

Programmatically do the following:

1. `fruit` and `banana` aren't movies! Delete them from the hash.

```ruby
data = {
  'Hitchcock' => ['Rear Window'],
  'Truffaut' => ['400 Blows'],
  'Myers' => ['Austin Powers', 'Shrek'],
  'fruit' => 'banana'
}

data.delete('fruit')

puts data```

2. Add "The Birds" to the `Hitchcock` array.

```ruby
data['Hitchcock'] << 'The Birds'

puts data```

3. Remove `Shrek`.

```ruby
data['Myers'].delete('Shrek')

puts data
```

4. Return all of the keys.

```ruby
keys = data.keys

puts keys```

5. Return all the values.

```ruby
values = data.values

puts values```

## Quit Putin Me On

```
putins_brain = {
  launch_code: "a5Mjp257GHMGH23e5qxE",
  fav_hobby: "Riding ponies",
  prideful: true
}
```
Programmatically do the following:

1. Return the string `"Riding ponies"`

```ruby
fav_hobby = putins_brain[:fav_hobby]
puts fav_hobby```

2. Return the string `"a5Mjp257GHMGH23e5qxE"`

```ruby
launch_code = putins_brain[:launch_code]
puts launch_code```

3. Add the key-value pair `obsessive_crush: "Condoleezza Rice"`

```ruby
putins_brain[:obsessive_crush] = "Condoleezza Rice"
```

4. Add the key-value pair `torture_count: 931`

```ruby
putins_brain[:torture_count] = 931
```

## The Most Ridiculous Grocery List

Create a hash with keys representing the following foods: avocados, steak, grass, whiskey, muffins, fish, and soap.

Avocados are fresh, steak is meaty, grass is fiber-filled, whiskey is smooth, muffins are sweet, fish is mercury-tastic, and soap is disgusting. Here is some starter code:

Starter code:
```
groceries = {
  avocados: "fresh",
  steak: "meaty",
  grass: "fiber-filled",
  whiskey: "smooth",
  muffins: "sweet",
  fish: "mercury-tastic",
  soap: "disgusting"
}
```
Programmatically do the following:

1. Avocados are full of that good fat. Change the avocado value to be "fatty".

```ruby
groceries[:avocados] = "fatty"

puts groceries
```

2. Muffins are super unhealthy. Change the value for muffins to be "carbtastic".

```ruby
groceries[:muffins] = "carbtastic"

puts groceries```

3. Soap? Who would eat soap? Delete that from your hash.

```ruby
groceries.delete(:soap)

puts groceries```

4. The fish went bad. The flavor of fish should be "rotten".

```ruby
groceries[:fish] = "rotten"

puts groceries```

5. Juice cleanse! Add "raw carrot juice" to your hash with the flavor "wallet-draining good".

```ruby
groceries["raw carrot juice"] = "wallet-draining good"

puts groceries```

6. Atkins diet! Get those muffins out of that hash.

```ruby
groceries.delete(:muffins)

puts groceries```

7. Time to dry yourself out. Delete whiskey from the hash.

```ruby
groceries.delete(:whiskey)

puts groceries```

8. You just moved to Park Slope and joined the co-op! Add "gluten free bread" to your hash with the flavor "sadness".

```ruby
groceries["gluten free bread"] = "sadness"

puts groceries```

9. Time to fast. Delete everything from the hash!

```ruby
groceries.clear

puts groceries```