'use client'
import BlueSuggestion from '@/assets/img/home/blue.png'
import BasicSuggestion from '@/assets/img/home/basic.png'
import DarkBasicSuggestion from '@/assets/img/home/darkBasic.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store';
import { useTranslations } from 'next-intl'



function Card({
    image,
    title,
    period,
    price,
    oldPrice,
    btnText,
    cancelAny,
    featured = false,

}: {
    image: any
    title: string
    period: string
    price: string
    oldPrice?: string
    btnText?: string
    cancelAny?: string
    featured?: boolean

}) {


    return (<div className={`relative ${featured ? 'z-20 ' : 'z-10'
        }`}

    >
        <Image
            src={image}
            alt={title}
            //  width={featured ? 300 : 260}
            className="w-100 sm:w-full "

        />      <div className={`absolute inset-0 flex flex-col items-center justify-between py-8 text-center pointer-events-auto ${featured ? "top-1/5" : "lg:top-15 top-5"}`}>
            <div>
                <h3 className={`text-4xl font-lato tracking-wide ${featured ? 'text-white' : 'text-primary-second'}`}> {title}  </h3>

                <p className={`text-2xl opacity-80 lg:mt-5   ${featured ? 'text-white' : 'text-primary-second'}`}>{period}</p>
            </div>

            {/* Bottom */}
            <div className={`flex flex-col items-center w-full max-w-[90%] ${featured ? "gap-3  mb-45 md:mb-30 lg:mb-50" : "gap-5  mb-25 md:mb-5 lg:mb-25"}`}>

                {oldPrice && (
                    <p className={`text-2xl line-through opacity-60`}>{oldPrice}</p>
                )}
                <p className={` font-bold ${featured ? 'text-4xl' : 'text-sky-500 text-xl lg:text-4xl '}`}>
                    {price}
                </p>
                <p className={`text-sm opacity-60 mt-1 ${featured ? '' : ' text-[#fff]  dark:text-[#000]'}`}>{cancelAny} </p>


                <button className={`w-50 py-2 px-3 flex items-baseline justify-center gap-2  h-[35%] rounded-2xl ${featured ? "bg-light-main text-primary-second" : "bg-primary-second text-light-main "} `}>
                    <FontAwesomeIcon icon={faBagShopping} />

                    <span className={`font-lato text-base not-italic  cursor-pointer uppercase tracking-wide `}>{btnText}</span>
                </button>
            </div>

        </div>

    </div >)
}


export default function Suggestions() {
    const t = useTranslations("Prices");
    const theme = useAppSelector((s: RootState) => s.theme.mode);
    const imageBasic = theme === 'dark' ? BasicSuggestion : DarkBasicSuggestion;

    return (<>
        <div className="w-full relative py-20 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6">

                <Card
                    image={imageBasic}
                    title={`${t('basic')}`}
                    period={`3 ${t('month')}`}
                    price="$15.140"
                    btnText={`${t('continue')}`}
                    cancelAny={`${t('cancelAny')}`}
                />

                <Card
                    image={BlueSuggestion}
                    title={`${t('suggested')}`}
                    period={`6 ${t('month')}`}

                    oldPrice="$24.990"
                    price="$22.990"
                    featured
                    btnText={`${t('continue')}`}
                    cancelAny={`${t('cancelAny')}`}
                />

                <Card
                    image={imageBasic}
                    title={`${t('premium')}`}
                    period={`12 ${t('month')}`}
                    price="$35.199"
                    btnText={`${t('continue')}`}
                    cancelAny={`${t('cancelAny')}`}
                />

            </div>
        </div>
    </>

    )
}

