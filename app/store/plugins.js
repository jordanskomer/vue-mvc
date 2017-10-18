// Plugins
let plugins = []
if (APP.use.localStorage && typeof createPersist == 'function') {
  plugins.push(createPersist({
    namespace: "PROJECT__NAMESPACE",
    expires: 1.21e9 // Two Weeks
  }))
}

export default {
  plugins
}