# - Write code to programmatically print "Protect Ya Neck" to the screen.
# - Write code to programmatically print the word "RCA" to the screen.
# - Write code to programmatically print "Iron Flag" to the screen.
# - Change the label for "Wu-Tang Forever" to "Sony".
# - Add the single "Out of the Woods" to the album "Eight Diagrams"

wu_tang = [
  {
    :title => "Enter the Wu Tang",
    :release_date => "11-09-93",
    :singles => ["Protect ya neck", "Method Man", "C.R.E.A.M.", "Can it be all so simple"],
    :label => "Loud",
    :length => "61:00",
  },
  {
    :title => "Wu-Tang Forever",
    :release_date => "06-03-97",
    :singles => ["Triumph", "Itz yours", "Reunited"],
    :label => "RCA",
    :length => "45:00",
  },
  {
    :title => "The W",
    :release_date => "11-21-2000",
    :singles => ["Protect Ya Neck", "Gravel Pit", "Careful"],
    :label => "Loud",
    :length => "59:00",
  },
  {
    :title => "Iron Flag",
    :release_date => "12-21-01",
    :singles => ["Uzi", "Rules"],
    :label => "Columbia",
    :length => "54:00",
  },
  {
    :title => "Eight Diagrams",
    :release_date => "12-11-07",
    :singles => ["The Heart Gently Weeps"],
    :label => "Universal Motown",
    :length => "71:00",
  }
]

print "Protect Ya Neck"
print "RCA"
print "Iron Flag"

wu_tang.each | word | do
  if word[:title] == "Wu-Tang Forever"
    word[:title] = "Sony"
  end
end



# Real Deal
# Write a method, single_sampler, that takes a Wu-Tang album hash and prints out the names of all the singles.
def single_sampler
  wu_tang.each | word | do
    word[:singles].each | name | do
      puts name
    end
  end
end

# Write a method, single_counter, that returns the number of singles for a given Wu-Tang album.
def single_counter
  wu_tang[0][:singles].count 
end

# Write a method, album length, that returns an album's play time.
def album_length
  wu_tang[0][:length]
end
# Write a method, singlegram, that returns a hash of the single count for the Wu-Tang discography, like so:
{
  "Enter the Wu Tang" => 4,
  "Wu-Tang Forever" => 3,
}
def singlegram
  single_hash = {}
  wu_tang.each | word | do
    single_hash[word[:title]] = word[:singles].count
  end
    single_hash
end
  
  # Write a method, wu-marathon, that returns the total playtime of all the Wu-Tang albums combined.
def wu_marathon
  counter = 0
  wu_tang.each | word | do
    counter += wu_tang[:length].gsub(":00","").to_i
  end
    counter
end