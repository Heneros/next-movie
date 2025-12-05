'use client';


import ProfileAnalytics from '@/components/profile/profileAnalytics/profileAnalytics';
import { useGetStatsByProfileMonthlyQuery, useGetTotalStatsQuery } from '@/redux/analytics/analyticsApiSlice';
import { useGetProfileQuery, } from '@/redux/users/usersApiSlice';
import { useParams } from 'next/navigation';

export default function ProfilePage() {
    const params = useParams();
    const userId = parseInt(params.id as string, 10);

    const {
        data: profile,
        isLoading: profileLoading,
        isError: profileError
    } = useGetProfileQuery(userId);

    const {
        data: monthlyStats = [],
        isLoading: statsLoading,
        isError: statsError,
        error

    } = useGetStatsByProfileMonthlyQuery({ userId })

    const {
        data: totalStat,
        isLoading: statsTotalLoading,
        isError: statsTotalError,
        error: erorStats

    } = useGetTotalStatsQuery({ userId })
    if (profileLoading) return <div>Loading profile...</div>;
    if (profileError) return <div>Error loading profile</div>;

    const totalViews = monthlyStats.reduce((sum, item) => sum + item.count, 0);

    // console.log(totalStat)
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold mb-4">Profile Analytics</h1>



                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Views Over Time</h2>
                    {statsLoading ? (
                        <div className="h-[400px] flex items-center justify-center">
                            <p>Loading chart data...</p>
                        </div>
                    ) : statsError ? (
                        <div className="h-[400px] flex items-center justify-center text-red-500">
                            <p>Error loading chart data</p>
                        </div>
                    ) : monthlyStats.length > 0 ? (

                        <>
                            <ProfileAnalytics userId={userId} monthsBack={12} />
                        </>
                    ) : (
                        <div className="h-[400px] flex items-center justify-center text-gray-500">
                            <p>No view data available yet</p>
                        </div>
                    )}
                </div>
            </div >
        </div >
    );
}