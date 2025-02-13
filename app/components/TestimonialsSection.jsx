'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'David Lee',
    role: 'Senior Developer',
    image: '/testimonials/david.png',
    content: 'Suprema has streamlined our processes, significantly improving communication and project outcomes.'
  },
  {
    name: 'Rachel Adams',
    role: 'Marketing Director',
    image: '/testimonials/rachel.png',
    content: 'With Suprema, our team collaboration has never been smoother or more efficient.'
  },
  {
    name: 'Mark Johnson',
    role: 'Project Coordinator',
    image: '/testimonials/mark.png',
    content: 'This tool has revolutionized our workflow, making project tracking incredibly easy.'
  }
];

const TestimonialCard = ({ name, role, image, content }) => (
  <div className="px-4">
    <div className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 flex flex-col h-[280px]">
      <div className="flex-grow">
        <div className="mb-6">
          <span className="text-3xl text-zinc-600">"</span>
        </div>
        <p className="text-zinc-300 text-lg leading-relaxed">{content}</p>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <div className="relative w-12 h-12">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-zinc-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    customPaging: () => (
      <button className="w-2 h-2 rounded-full bg-zinc-600 hover:bg-white transition-colors duration-200" />
    ),
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 mb-6">
          <span className="w-2 h-2 rounded-full bg-pink-500"></span>
          <span className="text-zinc-300 text-sm">Testimonials</span>
        </div>
        <h2 className="text-4xl font-semibold mb-4">What Our Users Say</h2>
      </div>

      <div className="max-w-[400px] mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
