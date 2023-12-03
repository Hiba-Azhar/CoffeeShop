function updateTime() {
  const clockElements = document.getElementsByClassName('time')

  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0')
  const timeString = `${hours}:${minutes}:${seconds}`

  // Loop through all elements with the "time" class and update their text content
  for (const element of clockElements) {
    element.textContent = timeString
  }
}

setInterval(updateTime, 1000) // Update the time every second
updateTime() // Initialize the time immediately
