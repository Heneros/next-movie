import ProfileAnalytics from "@/components/profile/profileAnalytics/profileAnalytics";


interface Props {
    params: { id: string };
}

export default async function Analytics({ params }: Props) {
    const { id } = await params
    return <ProfileAnalytics userId={Number(id)} />;
}