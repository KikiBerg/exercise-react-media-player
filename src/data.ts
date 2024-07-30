import { ITrack, IPlaylist, IUser, ISidebarItem, IPlayerState } from './interfaces';
import onYourSide from './assets/on_your_side.jpg';
import onceAgain from './assets/once_again.jpg';
import stayplus from './assets/stayplus.webp';
import human from './assets/human.png';
import imagineDragons from './assets/imagine_dragons.jpg';
import userAvatar from './assets/user_avatar.jpg';

export const tracks: ITrack[] = [
  {
    id: 1,
    title: 'Like we used to',
    artist: 'A Rocket to the Moon',
    album: 'On Your Side',
    duration: '5:55',
    coverArt: onYourSide,
  },
  {
    id: 2,
    title: 'Save Room',
    artist: 'John Legend',
    album: 'Once Again',
    duration: '5:55',
    coverArt: onceAgain,
  },
  {
    id: 3,
    title: 'We Just Don’t Care',
    artist: 'John Legend',
    album: 'Once Again',
    duration: '5:55',
    coverArt: onceAgain,
  },
  {
    id: 4,
    title: 'Dakota',
    artist: 'A Rocket to the Moon',
    album: 'On Your Side',
    duration: '5:55',
    coverArt: onYourSide,
  },
  {
    id: 5,
    title: 'Candyman',
    artist: 'Zedd & Aloe Blacc',
    album: 'Stay +',
    duration: '5:55',
    coverArt: stayplus,
  },
  {
    id: 6,
    title: 'Human',
    artist: "Rag'n'Bone Man",
    album: 'Human',
    duration: '5:55',
    coverArt: human,
  },
  {
    id: 7,
    title: 'Shots',
    artist: 'Imagine Dragons',
    album: 'Smoke + Mirrors',
    duration: '5:55',
    coverArt: imagineDragons,
  },
];

export const playlists: IPlaylist[] = [
  {
    id: 1,
    name: 'My Favorites',
    tracks: tracks.slice(0, 5),
  },
  {
    id: 2,
    name: 'When cooking',
    tracks: tracks.slice(1, 3),
  },
];

export const currentUser: IUser = {
  id: 1,
  name: 'Maria',
  avatar: userAvatar,
};

export const sidebarItems: ISidebarItem[] = [
  { id: 1, name: 'Home', icon: 'home' },
  { id: 2, name: 'Search', icon: 'search' },
  { id: 3, name: 'Your Library', icon: 'library_music' },  
];
export const initialPlayerState: IPlayerState = {
    currentTrack: null,
    isPlaying: false,
    volume: 50,
    progress: 0
  };