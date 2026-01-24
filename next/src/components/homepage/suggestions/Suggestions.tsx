'use client'
import BlueSuggestion from '@/assets/img/home/blue.png'
import BasicSuggestion from '@/assets/img/home/basic.png'
import Image from 'next/image'

function Card({
    image,
    title,
    period,
    price,
    oldPrice,
    featured = false,
}: {
    image: any
    title: string
    period: string
    price: string
    oldPrice?: string
    featured?: boolean
}) {
    return (<div className={`relative ${featured ? 'z-20 lg:-translate-y-8 scale-105' : 'z-10'
        }`}

    >
        <Image
            src={image}
            alt={title}
            width={featured ? 300 : 260}

        />      <div className={`absolute inset-0 flex flex-col items-center justify-between py-8 text-center pointer-events-auto ${featured ? "top-25" : ""}`}>
            <div>
                <h3 className={`text-3xl font-semibold ${featured ? 'text-white' : 'text-primary-second'}`}> {title}  </h3>


                <p className={`text-sm opacity-80 mt-1 ${featured ? 'text-white' : 'text-primary-second'}`}>{period}</p>
            </div>

            <div className='bottom'>
                {oldPrice && (
                    <p className="text-sm line-through opacity-60">{oldPrice}</p>
                )}
                <p className={`text-2xl font-bold ${featured ? '' : 'text-sky-500'}`}>
                    {price}
                </p>
                <p className="text-xs opacity-60 mt-1">Cancel anytime</p>
            </div>
        </div>

    </div >)
}


export default function Suggestions() {


    return (<>
        <div className="w-full relative py-20 flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center gap-6">

                <Card
                    image={BasicSuggestion}
                    title="Basic"
                    period="3 month"
                    price="$15.140"
                />

                <Card
                    image={BlueSuggestion}
                    title="Suggested"
                    period="6 month"
                    oldPrice="$24.990"
                    price="$22.990"
                    featured
                />

                <Card
                    image={BasicSuggestion}
                    title="Premium"
                    period="12 month"
                    price="$35.199"
                />

            </div>
        </div>
    </>

    )
}