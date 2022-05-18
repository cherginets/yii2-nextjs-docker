import MuiLink, {LinkBaseProps as MuiLinkProps} from "@mui/material/Link";
import NextLink, {LinkProps} from "next/link";

export {NextLink, MuiLink};

export default function Link({
                                 children,
                                 href,
                                 as,
                                 replace,
                                 scroll,
                                 shallow,
                                 passHref,
                                 prefetch,
                                 locale,
                                 ...muiProps
                             }: LinkProps & MuiLinkProps) {

    return <NextLink
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref
        prefetch={prefetch}
        locale={locale}
    >
        <MuiLink {...muiProps} style={{cursor: 'pointer'}}>
            {children}
        </MuiLink>
    </NextLink>
}
