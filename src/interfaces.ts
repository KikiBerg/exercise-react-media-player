export interface ITrack {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverArt: string;
}

export interface IPlaylist {
  id: number;
  name: string;
  tracks: ITrack[];
}

export interface IUser {
  id: number;
  name: string;
  avatar: string;
}

export interface IPlayerState {
  currentTrack: ITrack | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
}

export interface ISidebarItem {
  id: number;
  name: string;
  icon: string;
}

export interface IMediaCardProps {
  track: ITrack;
}

