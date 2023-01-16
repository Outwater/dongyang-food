import Head from "next/head";
import { useContext } from "react";
import { getStrapiURL } from "@/api/utils/request";
import { GlobalContext } from "@/pages/_app";
import { StrapiSeo } from "@/types";

interface Props {
  seo: StrapiSeo;
}

const Seo = ({ seo }: Props) => {
  const { defaultSeo, SiteName } = useContext(GlobalContext);
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  };
  const fullSeo = {
    ...seoWithDefaults,
    metaTitle: `${seoWithDefaults.metaTitle} | ${SiteName}`,
    shareImage: getStrapiURL(seoWithDefaults.shareImage.data.attributes.url),
  };

  const { metaTitle, metaDescription, shareImage } = fullSeo;

  return (
    <Head>
      {metaTitle && (
        <>
          <title>{metaTitle}</title>
          <meta property="og:title" content={metaTitle} />
        </>
      )}
      {metaDescription && (
        <>
          <meta name="description" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
        </>
      )}
      {shareImage && (
        <>
          <meta name="image" content={shareImage} />
          <meta property="og:image" content={shareImage} />
        </>
      )}
    </Head>
  );
};

export default Seo;
