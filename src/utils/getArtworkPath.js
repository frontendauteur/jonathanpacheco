import path from 'path'

export default function (file) {
  return path.join(__dirname, '../../', 'public', 'images', file.originalname)
}
