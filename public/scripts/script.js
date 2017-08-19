if ('serviceWorker' in navigator) {
  // If service workers are supported
  console.log('supported')
  navigator.serviceWorker.register('/serviceworker.js')
}
