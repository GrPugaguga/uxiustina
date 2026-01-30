'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowButton } from '@/ui-kit';
import CarouselMenu from './CarouselMenu';

export default function ImageCarousel(props: {
    images: string[]
    height: number
    mobileHeight: number
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
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .carousel-container-${props.height} {
                        height: ${props.mobileHeight}px;
                    }
                    @media (min-width: 640px) {
                        .carousel-container-${props.height} {
                            height: ${props.height}px;
                        }
                    }
                `
            }} />
            <div className={`carousel-container-${props.height} w-full bg-grey-bg-primary border border-grey-stroke rounded-[20px] relative flex items-center justify-center p-5`}>
                {!isSingle && !isFirst && (
                    <div className="hidden sm:block absolute left-4 z-10">
                        <ArrowButton type="left" onClick={handlePrev} />
                    </div>
                )}

                <div className="relative flex items-center justify-center h-full w-[74.2%] max-w-230">
                    <Image
                        src={props.images[0]}
                        alt={`Image 1`}
                        fill
                        className="object-scale-down sm:hidden"
                    />
                    <Image
                        src={props.images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        fill
                        className="hidden sm:block object-scale-down"
                    />
                </div>

                {!isSingle && !isLast && (
                    <div className="hidden sm:block absolute right-4 z-10">
                        <ArrowButton type="right" onClick={handleNext} />
                    </div>
                )}

                {!isSingle && (
                    <div className="hidden sm:block absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
                        <CarouselMenu total={props.images.length} current={currentIndex} />
                    </div>
                )}
            </div>
        </>
    );
}
