export default (regl, src) => {
  const texture = regl.texture()

  const image = new Image()

  image.src = require(`~assets/${src}`).default

  image.onload = function() {
    texture({
      data: image,
      flipY: true,
      min: "mipmap",
    })
  }

  return texture
}
