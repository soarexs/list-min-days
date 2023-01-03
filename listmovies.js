const moviesHours = [1.04, 1.25, 1.75, 1.9, 2.5]

const findMinDaysToWatch = (moviesToWatch, hoursPerDay) => {
  const listMovies = moviesToWatch.sort((a, b) => (b - a))

  for(let i = 0; i < listMovies.length; i++) {
    for(let j = i + 1; j < listMovies.length; j++) {
      if(listMovies[i] + listMovies[j] <= hoursPerDay) {
        listMovies[i] = listMovies[i] + listMovies[j]
        listMovies[j] = 0
      }
    }
  }

  return `minimum days: ${listMovies.filter((e) => e !== 0).length}`
}

console.log(findMinDaysToWatch(moviesHours, 3))
