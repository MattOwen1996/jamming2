const clientId = '8987923f517f499693cbf6be0750a19a';
const clientSecret = '17a2ddfbf5e341b2a12a6f2a5454466d'
const redirectUrl = 'http://localhost:3000/';
const spotifySearchAPI = 'https://api.spotify.com/v1/search';
const spotifyUserProfileAPI = 'https://api.spotify.com/v1/me';
const spotifyPlaylistAPI = 'https://api.spotify.com/v1/users/${userId}/playlists';
const spotifyPlaylistTracksAPI = 'https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks';


let accessToken;
let expiresIn;

const Spotify = {

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    let url = window.location.href;
    accessToken = this.extract(url, "access_token=", "&");
    if (accessToken) {
      expiresIn = this.extract(url, "expires_in=", "&");
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      console.log("access token successful retrieved.");
      return accessToken;
    } else {
        let state = 4321; // TODO generate state, save to app-state and validate
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-private&redirect_uri=${spotifyRedirectUrl}&state=${state}`;
    }
  },

  search(term) {
    return fetch(`${spotifySearchAPI}?type=track&q=${term}`,
    {headers: this.buildAuthorizationHeader()})
    .then(response => response.json())
    .then(jsonResponse => {
    if (jsonResponse.tracks) {
      return jsonResponse.tracks.items.map(function(track) {
        return {
          id: track.id,
          name: track.name,
          uri: track.uri,
          album: track.album.name,
          artist: track.artists[0].name
        }}
      )}
      else {
        return [];
      }
    });
  }

};

export default Spotify;
