
export function buildHref(
    template: string,
    params: Record<string, string | number | undefined>,
) {
    if (!template) return '';


    return template.replace(/:([A-Za-z0-9_]+)/g, (_match, key) => {
        const v = params[key];
 
        return v !== undefined && v !== null
            ? encodeURIComponent(String(v))
            : '';
    });
}
