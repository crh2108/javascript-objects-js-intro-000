var playlist = {
  'john prine': 'paradise'
}

function updatePlaylist(playlist, key, value) {
  playlist.assign({}, playlist, {[key]: value})
  return playlist
}
