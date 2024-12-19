import React, { useState } from "react";
import Header from "../../components/header";
import Image from "next/image";
import Head from "next/head";
import Footer from "../../components/footer";
import WorkLayout from "../../components/workLayout";
import { sanityClient } from "../../config/sanityClient";
import { Categories } from "../../data_files/portfolioData";

export default function Portfolio({ portfolio }) {
  const allWorks = Categories.flatMap((category) =>
    category.works.map((work) => ({
      ...work,
      categoryId: category.id,
      category: category.category,
    }))
  );
  const [overView, setOverView] = useState(false);
  const [id, setId] = useState();

  const handleOverview = (id) => {
    setOverView(true);
    setId(id);
  };

  return (
    <div className="relative">
      <Head>
        <title>Portfolio | SoftGens </title>
        <meta name="description" content="Portfolio" />
      </Head>

      <Header
        title="Portfolio"
        content="We are a one-stop shop for businesses big and small. From building, to designing, to analyzing and improving, we are always ready to make your company website smarter."
        lottifyURL="https://assets3.lottiefiles.com/packages/lf20_eeuhulsy.json"
        lottifyWidth="1000px"
        lottifyheight="500px"
        button={true}
      />

      <section className="py-24 mt-20 px-5 container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {allWorks.map((item, idx) => {
            return <WorkLayout item={item} key={idx} />;
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const portfolio = await sanityClient.fetch(`*[_type == "portfolio"]{
    title,
    shortinfo,
    link,
    slug,
    services[],
    featureimage{
      asset->{
        url
      }
    },
    gallery[]{
      asset->{
        url
      }
    }
  }`);

  return {
    props: {
      portfolio,
    },
  };
}
