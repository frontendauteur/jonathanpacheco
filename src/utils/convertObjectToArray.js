const convertObjectToArray = (arrayLikeObject) => {
  const arr = []

  arrayLikeObject.forEach(object => {
    arr.push(object)
  })
  return arr
}

export { convertObjectToArray as default }