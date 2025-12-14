import {


    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import Wrapper from '@/components/global/wrapper/Wrapper';
import SidebarProfile from '@/components/profile/sidebar/SidebarProfile';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

interface PageProps {
    children: any,
    params: { id: string[] };
}
export default function ProfileLayout({ children, }: PageProps) {
    return (
        <>
            <Wrapper>
                <div className="flex flex-col-reverse md:flex-row ">
                    <div className='basis-full md:basis-1/3'>
                        <SidebarProfile />
                    </div>
                    <div className='basis-full md:basis-2/3'>
                        {children}
                    </div>
                </div>
            </Wrapper>
        </>
    )


}