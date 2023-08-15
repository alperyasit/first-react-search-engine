function ImageItem({ image }) {
  console.log(image);
  return (
    <div>
      <img className="imageListImg" src={image.urls.small} />
    </div>
  );
}

export default ImageItem;
