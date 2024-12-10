const PhotoGallery = () => {
  const photos = [
    
    {
      src: "./image0.png",
    },
    {
      src: "./image1.png",
    },
    {
      src: "./image.png",
    },
    {
      src: "./image9.png",
    },
    {
      src: "./image5.png",
    },
    {
      src: "./image8.png",
    },
   
   
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={`Gallery item ${index + 1}`}
          className=" shadow-pink-300 rounded shadow-md  m-2 object-contain w-[100%] h-[450px] transition-transform duration-300 ease-in-out hover:scale-105"
        />
      ))}
    </div>
  );
};
export default PhotoGallery;
