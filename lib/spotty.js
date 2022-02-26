import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
    "user-read-email",
    "user-read-private",
    "user-read-currently-playing",
    "playlist-read-private",
    "playlist-read-collaborative",
    "streaming",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-recently-played",
    "user-read-currently-playing",
    "user-follow-read"
].join(',');

const params = {
    scope:scopes
};

const queryParamString = new URLSearchParams(params);

const log_url = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyApi;

export {log_url}
