Big-O Algorhythmic Complexity
time - how long things take
space - how much space does this require?

time vs space tradeoff
  if you have a lot of time
  you might not need much memory

  if you have a lot of memory
  you might not need much time

O(1) - constant time
O(N) - linear time
O(N^2) - quadratic time
O(log N) - logarithmic time (cutting the input size in half every turn)
O(N log N) - also logarithmic-ish

Greeting at a Conference
O(1) - constant time
One host greets everyone with a spiel at once
10 people - 1 minute
100 people - 1 minute
1000 people - 1 minute
10000 people - 1 minute

O(N) - the host shakes everyone's hand (1hndshk/s)
10 people - 10s
100 people - 100s
1000 people - 1000s
10000 people - 10000s

O(N) - a function that describes how long things will take

O(N^2) - everyone at a conference greets eachother
10 people - 10 * 10  = 100 greetings
100 people - 100 * 100  = 10,000 greetings
1000 people - 1000 * 1000  = 1,000,000 greetings
10000 people - 10000 * 10000  = 100,000,000 greetings

O(1) - accessing array length will always take a constant same
       amount of time no matter how many thing are in the array
       (assuming the array has a property that stores it's length)

O(N) - searching through an array to see if it contains a value
       will take time exactly proportional to the size of the array
       it has O(N) time because we have to look at each of N things.
       
       It doesn't matter if the thing you're looking for is at the start
       or if the thing you're looking for is at the middle
       or if the thing you're looking for is at the end

       Big-O notation describes what happens in the worst-case scenario.
       
O(N^2) - using two for loops nested inside each other to see if
         there are any duplicates in the array.

          let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5]
          for (let i = 0; i < aa.length; i++) {
            for (let j = 0; j < aa.length; j++) {
              if (i !== j && aa[i] === aa[j]) { 
                return true // this array has duplicates
              }
            }
          }
          return false // no dupes found

Optimizations
This `containsDuplicate(aa)` code could be slightly optimized.
Instead of starting `j = 0` we could say `j = i + 1` so we
never compare things that have ever already been compared to each other.

this is actually faster! it's twice as fast! O(1/2 * N^2)
Too bad Big-O doesn't care about coefficients.

N multiplied by anything is simply ignored.

O(N) == O(.001N) == O(1/2n) == O(3N) == O(9999N) == O(N)

The "scale-factor" number in front of N doesn't matter.
It doesn't matter because these are all O(N) that scale linearly.
And O(N) is better than O(N^2).

O(999 N) though it looks bad is still much better than
O(N^2)   as the size of the data you're working on gets larger

Big-O does care about the exponent, but not numbers in front.

let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5]
for (let i = 0; i < aa.length; i++) {
  for (let j = i + 1; j < aa.length; j++) {
    if (i !== j && aa[i] === aa[j]) { 
      return true // this array has duplicates
    }
  }
}
return false // no dupes found

O(1) Constant Time
This doesn't necessarily mean fast. It just means that it will
always take the same time, no matter the size of the input.

A frieght train car travelling from the west coast to the east
coast will take (effectively) the same amount of time no matter
how many things are in the car.

O(1) - constant time
One host greets everyone with a spiel at once, but it's long!!
10 people - 3 hours
100 people - 3 hours
1000 people - 3 hours
10000 people - 3 hours

Array Search

// O(N) - linear time, worst case it looks at each N thing
// accepts an array of integers and searchers
// for the needle in the haystack
def search(haystack=[], needle)
  needle.each do |element|
    return true if element == needle
  end
  return false
end

// this accepts an array and assumes the array
// is already sorted.
// [12, 23, 23, 26, 28, 29, 31, 33, 37, 39, 40, 41, 44, 67, 73, 88, 90]
def binary_search(haystack, needle)
  is_searching = true

  # in order to properly implement this would need to update these
  # left and right bounds all the time
  left_bound = 0
  right_bound = haystackl.length
  index = (haystack.length / 2).floor

  while is_searching
    value = haystack[index]
    return true if value == needle

    # this is actually sloppy and won't entirely work.
    # I'm not doing perfect math, I think you get the idea
    if value < needle
      index = (haystack.length - index) / 2
    else
      index = index / 2
    end
  end
end

Using binary search we've gone from a linear algorithm that
would look at literally 1 billion things, to an algorithm
that only looks at about 29 items.

log2 1000000000 = 29
1,000,000,000
  500,000,000
  250,000,000
  125,000,000
   60,000,000
   30,000,000
   15,000,000
    8,000,000
    4,000,000
    2,000,000
    1,000,000
      500,000
      250,000
      125,000
       60,000
       30,000
       15,000
        8,000
        4,000
        2,000
        1,000
