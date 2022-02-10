import Index, { meta } from '../../articles/ton-year-explainer/index.md'

import references from '../../articles/ton-year-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} displayTitle={null}>
    <Index />
  </Article>
)

export default Content