import { createClient } from "@supabase/supabase-js";
import type {} from "multer";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("SUPABASE_URL and SUPABASE_KEY must be configured.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const AVATAR_BUCKET = "avatars";

const getPublicUrl = (bucket: string, path: string): string => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};

const emptyFolder = async (bucket: string, folder: string): Promise<void> => {
  try {
    const { data, error } = await supabase.storage.from(bucket).list(folder);
    if (error) throw error;
    // create array of files to delete
    const filePathArray: string[] = [];
    if (data && data.length > 0) {
      data.forEach((file) => {
        filePathArray.push(`${folder}/${file.name}`);
      });
      // delete files
      if (filePathArray.length > 0) {
        const { error } = await supabase.storage
          .from(AVATAR_BUCKET)
          .remove(filePathArray);
        if (error) throw error;
      }
    }
  } catch (err) {
    console.error(err);
  }
};

const uploadFile = async (
  folderPath: string,
  file: Express.Multer.File,
  bucket: string,
): Promise<string> => {
  const timestamp = Date.now();
  const ext = file.mimetype.split("/")[1];
  const path = `${folderPath}/${timestamp}.${ext}`;
  await emptyFolder(bucket, folderPath);
  const { error } = await supabase.storage
    .from(bucket)
    .upload(path, file.buffer, {
      contentType: `image/${ext}`,
      cacheControl: "3600",
      upsert: true,
    });

  if (error) throw error;
  return getPublicUrl(bucket, path);
};

// Uploads image to the avatars bucket, then gives me a publicurl for prisma
const uploadAvatar = async (
  userId: string,
  file: Express.Multer.File,
): Promise<string> => {
  const folderPath = `user-${userId}`;
  return uploadFile(folderPath, file, AVATAR_BUCKET);
};

export { uploadAvatar };
