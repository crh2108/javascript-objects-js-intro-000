var playlist = {
  'john prine': 'paradise'
}

function updatePlaylist(obj, key, value) {
  return playlist.assign({}, obj, {[key]: value})
}
