'use client'
import BlueSuggestion from '@/assets/img/home/blue.png'
import BasicSuggestion from '@/assets/img/home/basic.png'
import DarkBasicSuggestion from '@/assets/img/home/darkBasic.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store';



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


    return (<div className={`relative ${featured ? 'z-20 ' : 'z-10'
        }`}

    >
        <Image
            src={image}
            alt={title}
          //  width={featured ? 300 : 260}
        className="w-full md:w-auto"

        />      <div className={`absolute inset-0 flex flex-col items-center justify-between py-8 text-center pointer-events-auto ${featured ? "top-1/5" : "top-15"}`}>
            <div>
                <h3 className={`text-4xl font-lato tracking-wide ${featured ? 'text-white' : 'text-primary-second'}`}> {title}  </h3>

                <p className={`text-2xl opacity-80 mt-5 ${featured ? 'text-white' : 'text-primary-second'}`}>{period}</p>
            </div>

            <div className={`flex absolute items-center flex-col  ${featured ? "top-2/5 gap-3" : " gap-5 top-4/7"}`}>
                {oldPrice && (
                    <p className={`text-2xl line-through opacity-60`}>{oldPrice}</p>
                )}
                <p className={` font-bold ${featured ? 'text-3xl' : 'text-sky-500 text-4xl '}`}>
                    {price}
                </p>
                <p className={`text-sm opacity-60 mt-1 ${featured ? '' : ' text-[#fff]  dark:text-[#000]'}`}>Cancel anytime</p>
                <button className={`min-w-30 py-2 px-3 flex items-baseline justify-center gap-2  h-auto rounded-2xl ${featured ? "bg-light-main text-primary-second" : "bg-primary-second text-light-main "} `}>
                    <FontAwesomeIcon icon={faBagShopping} />

                    <span className={`font-lato text-base not-italic  cursor-pointer uppercase tracking-wide `}>Continue</span>
                </button>
            </div>

        </div>

    </div >)
}


export default function Suggestions() {
    const theme = useAppSelector((s: RootState) => s.theme.mode);
    const imageBasic = theme === 'dark' ? BasicSuggestion : DarkBasicSuggestion;

    return (<>
        <div className="w-full relative py-20 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6">

                <Card
                    image={imageBasic}
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
                    image={imageBasic}
                    title="Premium"
                    period="12 month"
                    price="$35.199"
                />

            </div>
        </div>
    </>

    )
}

