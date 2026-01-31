import Image from "next/image";

export default function StackedCard({
    title,
    image,
    image2,
    image3
}: {
    title: string;
    image2: string;
    image3: string;
    image: string;
}) {
    return (
        <div className='relative h-full  cursor-pointer'>
            <div className='absolute inset-0 translate-x-8 translate-y-9  scale-[0.96]  z-0    '>
                <div className='w-full h-full rounded-2xl overflow-hidden'>
                    <Image src={image3} width={150} height={150} alt="" className="w-full h-full object-cover opacity-35" />
                </div>
            </div>

            <div className='absolute inset-0 translate-y-6 translate-x-4 scale-[0.96]   z-10   '>
                <div className='w-full h-full rounded-2xl overflow-hidden'>
                    <Image src={image2} width={150} height={150} alt="" className="w-full h-full object-cover opacity-65" />
                </div>
            </div>
            <div className="relative z-20 h-full overflow-hidden translate-y-0 rounded-3xl hover:translate-x-10   hover:translate-y-10  duration-500 hover:z-50 ">
                <div className='w-full h-full rounded-2xl '>
                    <Image src={image} width={150} height={150} alt="" className="w-full h-full object-cover opacity-100" />
                    <div className='absolute bottom-0  m-auto  inset-x-0 w-25 h-45 z-36'>
                        <h2 className='text-4xl font-extrabold text-white'>
                            {title}
                        </h2>

                    </div>

                </div>
            </div>

        </div>
    );
}