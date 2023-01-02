# Find min days

The purpose of the code is to find the minimum number of days to watch movies, it is to find the best combination to watch movies per day with a limit of hours
#
**Example:**

You have three hours a day to watch some movies, and you need to find the best combination to watch those movies in as few days as possible with that hour limit.

movies = [2, 1, 1, 2]

if you watch the movies[1] + movies[2] you can't watch more movies, and this was one day watching movies, now you can't watch the movies[0] + movies[3] because your limit hours per day is 3 , and you watched all movies in 3 days, but if you add movies[0] + movies[1] and movies[2] + movies[3], you can watch all movies in 2 days.
