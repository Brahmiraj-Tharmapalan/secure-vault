"use client"

import { ImageCard, ImageCardProps } from "./ImageCard"


interface ImageGridProps {
    images: ImageCardProps[]
}

export function ImageGrid({ images }: ImageGridProps) {
    if (images.length === 0) {
        return (
            <div className="flex h-[400px] items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/5">
                <div className="text-center text-muted-foreground">
                    <p>No images found</p>
                    <p className="text-sm">Upload some photos to get started</p>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {images.map((image) => (
                <ImageCard key={image.id} {...image} />
            ))}
        </div>
    )
}
