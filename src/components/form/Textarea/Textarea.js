import Head from 'next/head'
import {stylesheet, classNames} from './Textarea.css'

const Textarea = (props) => {
  const {
  id,
  name,
  value = '',
  required = false
} = props

  return (
    <label className={classNames.label} for={id}>
      <Head><style dangerouslySetInnerHTML={{__html: stylesheet}} /></Head>
      {props.children}
      <textarea className={classNames.textarea} id={id} name={name} defaultValue={value} required={required} />
    </label>
  )
}

export default Textarea
