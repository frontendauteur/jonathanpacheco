import marked from 'marked'
import typogr from 'typogr'
import toTitleCase from 'titlecase'

export default function (title) {
  var titleRenderer = new marked.Renderer()

  titleRenderer.paragraph = function (text) {
    return text
  }
  
  return typogr.typogrify(
    marked(
      typogr.smartypants(
        toTitleCase(title)
      ), {
        renderer: titleRenderer
      }
    )
  )
}
