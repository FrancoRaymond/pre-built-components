import React, { useRef } from "react";

const leftArrow = "<";
const rightArrow = ">";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    message: "This service is amazing! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "A fantastic experience from start to finish.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    message: "Great quality and fast delivery!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    message: "The best customer service I've ever had.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Michael Brown",
    message: "Absolutely loved the experience!",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    message: "Will definitely use this service again.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-[50rem] mx-auto p-6 min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-2xl font-bold text-center mb-4">What Our Clients Say</h2>
      <div className="relative w-full">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 font-bold text-2xl bg-gray-800 text-white rounded-full shadow-md z-10"
        >
          {leftArrow}
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto whitespace-nowrap gap-4 scroll-smooth scrollbar-hide p-4 bg-yellow-500 w-full"
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col w-64 h-fit bg-white p-4 rounded-lg shadow-md border"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
              <p className="text-gray-700 text-center overflow-wrap">{testimonial.message}</p>
              <h3 className="text-center font-semibold mt-2">{testimonial.name}</h3>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 font-bold text-2xl bg-gray-800 text-white rounded-full shadow-md z-10"
        >
          {rightArrow}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
