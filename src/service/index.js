import { supabase } from "./supabase";

export const uploadVIdeo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID();

  const { data, error } = await supabase.storage
    .from("videos")
    .upload(`uploads/${filename}.mp4`, videoFile);

  return [error, data];
};

export const publishVideo = async ({ videoSrc, description }) => {
  const { data, error } = await supabase.from("videos")
  .update("videos/", videoSrc);
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
