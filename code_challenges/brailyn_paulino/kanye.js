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

// Below each comment below, write code that executes the directions in the comment, using the data above.
// Print the name of every Kanye record to the console.
for (let key of kanyeRecords) {
  console.log(key.title)
}
// Print the year every Kanye record was released.
for (let key of kanyeRecords) {
  console.log(key.year)
}
// Look into the future and add a forthcoming Kanye record into our array. It should be released in 2020 and have a title that is completely asinine.
kanyeRecords.push({year: "2021", title: "completely asinine"})
console.log(kanyeRecords)

// Iterate through the collection. For each record, print out a sentence detailing each record (e.g. "'Graduation' was released in 2007.").
for (let key of kanyeRecords) {
  console.log(`${key.title}` + " was released in " + `${key.year}` + ".")
}


// Iterate through the collection. Replace the letter 'o' in each record title with the number 0, and then print out the title.
for (let key of kanyeRecords) {
  let new_record = key.title.replaceAll("o", "0")
  console.log(new_record)
}