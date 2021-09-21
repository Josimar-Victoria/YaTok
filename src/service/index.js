import { supabase } from "./supabase";

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL;
export const uploadVIdeo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID();

  const { data, error } = await supabase.storage
    .from("videos")
    .upload(`uploads/${filename}.mp4`, videoFile);

  const file = data?.Key ? `${prefix}${data.Key}` : "";
  return [error, file];
};

export const publishVideo = async ({ videoSrc, description }) => {
  const albumunCover = 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/49f48aba94373da5d6536f4dfad8d177~c5_100x100.jpeg?x-expires=1632240000&x-signature=EVTNX3IFw%2BPqNBG5iZOEDVYsA2k%3D'
  const defaultSong = 'midudev songs'

  const { data, error } = await supabase
    .from("videos")
    .insert([{ 
      user_id: "cf765533-3307-4b57-b401-cd7cc10fcc4e",
      description: "otherValue",
      albumunCover: albumunCover,
      songTitle: defaultSong,
      src: videoSrc
    }]);

    return [ data, error ]
};

export const getVideos = async () => {
  const { data, error } = await supabase
    .from("videos")
    .select(
      `*, user:user_id (
      avatar,
      username,
      id
    )`
    )
    .order("created_at", { ascending: false });

  return [error, data];
};
