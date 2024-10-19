'use client'

import { imagesAdvantage } from "../../const/const"

interface Props { }

export function GallerySection({ }: Props) {
    return <section className="py-[64px] lg:py-[94px] pb-0  bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    imagesAdvantage.map((image, idx) => (
                        <div key={idx}>
                            <img className="h-auto max-w-full rounded-lg" src={image} alt={image} />
                        </div>
                    ))
                }
            </div>
        </div>
    </section >
}
