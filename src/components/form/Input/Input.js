import Head from 'next/head'
import Module from './../../Module'
import { stylesheet, classNames } from './Input.css'

const Input = (props) => {
  const {
  id,
    name,
    value = '',
    type = 'text',
    required = false
} = props

  return (
    <Module stylesheet={stylesheet}>
      <label className={classNames.label} for={id}>
        {props.children}
        <input className={classNames.input} id={id} type={type} name={name} defaultValue={value} required={required} />
      </label>
    </Module>
  )
}

export default Input