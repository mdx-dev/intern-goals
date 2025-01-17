# Hashing It Out

## Movies

Manually create a hash with the following keys/values:

| Key | Value |
|---|---|
| 'Hitchcock' | ['Rear Window']|
| 'Truffaut' | ['400 Blows'] |
| 'Myers'  | ['Austin Powers', 'Shrek']|
| 'fruit' | 'banana' |

movies = {
  Hitchcock: ["Rear Window"],
  Triffaut: ["400 Blows"],
  Myers: ["Austin Powers", "Shrek"],
  fruit:"banana"
}

Programmatically do the following:

1. `fruit` and `banana` aren't movies! Delete them from the hash.

```ruby
# write your code here
movies.delete(:fruit)
```

2. Add "The Birds" to the `Hitchcock` array.

```ruby
# write your code here
movies[:Hitchcock] << "The Birds"
```

3. Remove `Shrek`.

```ruby
# write your code here
movies[:Myers].delete("Shrek")
```

4. Return all of the keys.

```ruby
# write your code here
movies.keys
```

5. Return all the values.

```ruby
# write your code here
movies.values

```

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
# write your code here
putins_brain[:fav_hobby]

```

2. Return the string `"a5Mjp257GHMGH23e5qxE"`

```ruby
# write your code here
putins_brain[:fav_hobby]

```


3. Add the key-value pair `obsessive_crush: "Condoleezza Rice"`

```ruby
# write your code here 
putins_brain.store(:obsessive_crush, "Condolezza Rice")
#Another example
putins_brain[:obsessive_crush] = "Condolezza Rice"
```

4. Add the key-value pair `torture_count: 931`

```ruby
# write your code here
putins_brain.store(:torture_count, "931")
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
# write your code here
groceries[:avocados] = "fatty"
```

2. Muffins are super unhealthy. Change the value for muffins to be "carbtastic".

```ruby
# write your code here
groceries[:muffins] = "carbtastic"
```

3. Soap? Who would eat soap? Delete that from your hash.

```ruby
# write your code here
groceries.delete(:soap)
```

4. The fish went bad. The flavor of fish should be "rotten".

```ruby
# write your code here
groceries[:fish] = "rotten"
```

5. Juice cleanse! Add "raw carrot juice" to your hash with the flavor "wallet-draining good".

```ruby
# write your code here
groceries.store(:raw_carrot_juice, "wallet-draining good")
```

6. Atkins diet! Get those muffins out of that hash.

```ruby
# write your code here
groceries.delete(:muffins)
```

7. Time to dry yourself out. Delete whiskey from the hash.

```ruby
# write your code here
groceries.delete(:whiskey)
```

8. You just moved to Park Slope and joined the co-op! Add "gluten free bread" to your hash with the flavor "sadness".

```ruby
# write your code here
groceries.store(:gluten_free_bread, "sadness")
```

9. Time to fast. Delete everything from the hash!

```ruby
# write your code here
groceries.clear
```