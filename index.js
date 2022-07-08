let pos = -1

function changeColors() {
  // Available colors
  let colors = ['red', 'pink', 'dark-blue', 'dark-pink']

  // Cycles the colors
  if (pos == 3) pos = 0
  else pos++

  // Removes every class from the body
  for (i in colors) document.body.classList.remove(colors[i])

  // Checks to the theme we are using
  // If the current colors are in the dark mode,
  // then, we must set our theme icon to the white
  // color
  if (colors[pos].includes('dark'))
    document.getElementById('widget').classList.add('dark')
  else document.getElementById('widget').classList.remove('dark')

  // Add the current color class to the body
  document.body.classList.add(colors[pos])
}
