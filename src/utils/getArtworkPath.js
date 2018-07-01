import path from 'path'

export default function (file) {
  return path.join('images', file.originalname)
}
