import { SwitcherLang } from "@/components/global/switcherLang/switcherLang";
import Wrapper from "@/components/global/wrapper/Wrapper";
import { AbstractIntlMessages, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
    params: { locale }
}: {
    params: { locale: string };

}) {
    const messages: AbstractIntlMessages | string = await getMessages({ locale })
    const title = messages.Homepage.welcome;
    return { title }
}

export default function Faq() {
    const t = useTranslations("Homepage")

    return (<Wrapper>
        {t("welcome")}
        <SwitcherLang />
    </Wrapper>)
}