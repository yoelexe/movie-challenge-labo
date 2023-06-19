import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Carousel = () => {

  const slides = [
    {
      url: 'https://images4.alphacoders.com/640/640956.jpg'
    },
    {
      url: 'https://i.pinimg.com/originals/3f/98/0b/3f980b492a81d70da1e20288f01b7927.jpg'
    },
    {
      url: 'https://www.pixelstalk.net/wp-content/uploads/images6/4K-Anime-Wallpaper-Desktop-1.jpg'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlider = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 realtive">
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
    {/* Left Arrow */}
    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <FiChevronLeft onClick={prevSlider} size={30} />
    </div>
    {/* Right Arrow */}
    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <FiChevronRight onClick={nextSlider} size={30} />
    </div>
    </div>
  )
}
