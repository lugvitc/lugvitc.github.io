import PhotoAlbum from "react-photo-album";
import photos from "./Photos";

export default function Gallary() {
  return <PhotoAlbum photos={photos} layout="masonry" />;
}
