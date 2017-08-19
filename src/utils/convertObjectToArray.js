export default function (arrayLikeObject) {
  const arr = []

  arrayLikeObject.forEach(object => {
    arr.push(object)
  })
  return arr
}
