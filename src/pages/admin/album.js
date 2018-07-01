import fetch from 'isomorphic-unfetch'
import Input from './../../components/form/Input/Input'
import Textarea from './../../components/form/Textarea/Textarea'

const Album = ({
  title,
  description,
  releaseDate,
  duration,
  availableWorks,
  work,
  availableArtists,
  artist,
  id
}) => (
  <form action='/admin/album' method='POST' enctype='multipart/form-data'>
    <Input id='title' type='text' name='title' required value={title || ''}>
      Title
    </Input>
    <Textarea id='description' name='description' value={description}>
      Description
    </Textarea>
    <Input id='releaseDate' type='date' name='releaseDate' value={releaseDate || ''}>
      Release Date
    </Input>
    <Input id='artwork' type='file' name='artwork'>
      Artwork
    </Input>
    <Input id='duration' type='number' min='1' name='duration' value={duration || ''}>
      Duration
    </Input>
    <label for='work'>
      Work
      <select id='work' name='work' required defaultValue={work && work.id ? work.id : ''}>
        <option value=''>Choose a Work</option>
        {availableWorks && availableWorks.map((availableWork, index) => {
          return (
            <option value={availableWork.id} key={index}>
              {availableWork.title}
            </option>
          )
        })}
      </select>
    </label>
    <label for='artist'>
      Artist
      <select id='artist' name='artist' defaultValue={artist && artist.id ? artist.id : ''}>
        <option value=''>Choose an Artist</option>
        {availableArtists && availableArtists.map((availableArtist, index) => {
          return (
            <option value={availableArtist.id} key={index}>
              {availableArtist.name}
            </option>
          )
        })}
      </select>
    </label>
    {id && (
      <input type='hidden' name='id' value={id} />
    )}
    <button type='submit'>Submit</button>
  </form>
)
Album.getInitialProps = async (context) => {
  const id = context.query ? context.query.id : ''
  const url = `http://localhost:3000/api/admin/album/${id}`
  const res = await fetch(url)
  const data = await res.json()
  return data.album || {}
}

export default Album
