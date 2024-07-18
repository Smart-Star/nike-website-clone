export const ShoeCard = ({ imgUrl, changeImage, currentImage }) => {
  const handleClick = () => {
    if (currentImage != imgUrl.bigShoe) {
      changeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 
        ${
          currentImage === imgUrl.bigShoe
            ? 'border-coral-red'
            : 'border-transparent'
        }
        `}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe tumbnail"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};
