import { arc } from 'd3-shape'

view Main {
  <Arc />
}

view Arc {
  const { data, ...props } = view.props
  const a = arc()(props)

  let node

  on.mount(() => {
    a.context(node.getContext("2d"))(data)
  })

  <canvas ref={_ => node = _}></canvas>
}