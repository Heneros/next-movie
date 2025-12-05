'use client';

import MonthlyStatsChart from '@/components/profile/profileAnalytics/profileAnalytics';
import ProfileAnalytics from '@/components/profile/profileAnalytics/profileAnalytics';
import { useGetStatsByProfileMonthlyQuery } from '@/redux/analytics/analyticsApiSlice';
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

    if (profileLoading) return <div>Loading profile...</div>;
    if (profileError) return <div>Error loading profile</div>;

    const totalViews = monthlyStats.reduce((sum, item) => sum + item.count, 0);

    console.log(error)
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold mb-4">Profile Analytics</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Total Views</p>
                        <p className="text-2xl font-bold">{totalViews}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Unique Visitors</p>
                        {/* <p className="text-2xl font-bold">{profile?.uniqueVisitors || 0}</p> */}
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Last 30 Days</p>
                        <p className="text-2xl font-bold">
                            {monthlyStats.slice(0, 1)[0]?.count || 0}
                        </p>
                    </div>
                </div>

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


                        <MonthlyStatsChart data={monthlyStats} />
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