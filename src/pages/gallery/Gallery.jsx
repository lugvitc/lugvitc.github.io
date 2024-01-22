import PhotoAlbum from "react-photo-album";
import photos from "./Photos";

export default function Gallery() {
  return <PhotoAlbum photos={photos} layout="masonry" />;
}
