'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowButton } from '@/ui-kit';
import CarouselMenu from './CarouselMenu';

export default function ImageCarousel(props: {
    images: string[]
    height: number
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(props.images.length - 1, prev + 1));
    };

    const isFirst = currentIndex === 0;
    const isLast = currentIndex === props.images.length - 1;
    const isSingle = props.images.length === 1;

    return (
        <div
            className="w-full bg-grey-bg-primary border border-grey-stroke rounded-[20px] relative flex items-center justify-center p-5"
            style={{ height: `${props.height}px` }}
        >
            {!isSingle && !isFirst && (
                <div className="absolute left-4 z-10">
                    <ArrowButton type="left" onClick={handlePrev} />
                </div>
            )}

            <div className="relative flex items-center justify-center h-full w-full">
                <Image
                    src={props.images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    fill
                    className="object-scale-down"
                />
            </div>

            {!isSingle && !isLast && (
                <div className="absolute right-4 z-10">
                    <ArrowButton type="right" onClick={handleNext} />
                </div>
            )}

            {!isSingle && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
                    <CarouselMenu total={props.images.length} current={currentIndex} />
                </div>
            )}
        </div>
    );
}
