import Wrapper from "@/components/global/wrapper/Wrapper";



interface PageProps {
    children: any,
    params: { id: string[] };
}
export default function MovieLayout({ children }: PageProps) {
    return (<>
        <Wrapper>
            {children}
        </Wrapper>
    </>)
}