export type GenresType = { id: number; name: string };

export type UserInfo = {
  name: string | null | undefined;
  email: string | null | undefined;
  photo: string | null | undefined;
};

export type ContentType = {
  id: number;
  media_type: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  first_air_date: string;
  title: string;
  name: string;
  vote_average: number;
  runtime: number;
  episode_run_time: number[];
  genres: GenresType[];
  overview:string
};
