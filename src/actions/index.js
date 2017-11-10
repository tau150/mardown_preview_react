
import marked from 'marked';

export const CONVERT_MARKDOWN = 'convert_markdown'

export function convertMarkdown(text){
  console.log(text)
  const result = marked(text, {sanitize: true});
  return{
    type: CONVERT_MARKDOWN,
    payload: result
  }
}
