const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const galleryLink = (id, width, height) =>
  `http://127.0.0.1:5000/gallery/image/${id}`;

const unsplashPhotos = [
  { id: "1", width: 1080, height: 800 },
  { id: "2", width: 1080, height: 1620 },
  { id: "3", width: 1080, height: 1620 },
  { id: "4", width: 1080, height: 721 },
  { id: "5", width: 1080, height: 1620 },
  { id: "6", width: 1080, height: 607 },
  { id: "7", width: 1080, height: 608 },
  { id: "8", width: 1080, height: 940 },
  { id: "9", width: 1080, height: 1549 },
  { id: "10", width: 1080, height: 940 },
  { id: "11", width: 1080, height: 694 },
  { id: "12", width: 1080, height: 1620 },
  { id: "13", width: 1080, height: 940 },
  { id: "14", width: 1080, height: 1440 },
  { id: "15", width: 1080, height: 1620 },
  { id: "16", width: 1080, height: 810 },
  { id: "17", width: 1080, height: 610 },
  { id: "18", width: 1180, height: 1300 },
  { id: "19", width: 1080, height: 810 },
  { id: "20", width: 1080, height: 940 },
  { id: "21", width: 1080, height: 1440 },
  { id: "22", width: 1080, height: 1549 },
  { id: "23", width: 1080, height: 940 },
  { id: "24", width: 1080, height: 694 },
  { id: "25", width: 1080, height: 1620 },
  { id: "26", width: 1080, height: 940 },
  { id: "27", width: 1080, height: 1440 },
  { id: "28", width: 1080, height: 1620 },
  { id: "29", width: 1080, height: 810 },
  { id: "30", width: 1080, height: 810 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: galleryLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: galleryLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
