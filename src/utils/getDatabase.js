import Database from './Database'

const getDatabase = () => {
  return new Database()
}

export { getDatabase as default }
