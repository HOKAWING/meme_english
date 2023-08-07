import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Carousel from "../components/Carousel";
import { Gallery, GalleryCard } from "../components/Gallery";
import { useMemo } from "react";
import Link from "next/link";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["chillkidsclub", "common"])),
    },
  };
}

export default function ChillKidsClubPage() {
  const galleryImages = useMemo(
    () =>
      Array(18)
        .fill()
        .map(
          (_, idx) =>
            `chill-kids-club-image-${(idx + 1).toString().padStart(2, "0")}`
        ),
    []
  );
  const { t } = useTranslation(["chillkidsclub", "common"]);

  const faq = [
    {
      question: "訂購門票後會有什麼證明文件嗎？",
      answer: "於完成付款後會收到確認電子郵件。",
    },
    {
      question: "如訂購門票後收不到確認電郵？",
      answer:
        "可以登入網站，按右上角「重發確認電郵」，然後輸入購票的電話號碼，系統會重發最近一次訂單的電郵。",
    },
    {
      question: "進入會場時需要什麼證明文件？",
      answer: "於進場時只需提供登記電話號碼，經職員核實後方可進場。",
    },
    {
      question: "可以用大陸版微信支付(WeChat PAY) 訂購門票嗎？",
      answer:
        "我們只接受香港版微信支付用作網上交易。\n除了微信支付外，我們亦接受VISA、MASTERCARD、美國運通、銀聯等支付方式。",
    },
    {
      question: "訂購門票後可以改期或退款嗎？",
      answer:
        "所有門票於完成付款後，不論什麼原因，均不設改期或退款。\n（假若活動當日因天氣影響，如八號風球／黑色暴雨警告信號等等，會於官方網站公佈）",
    },
    {
      question: "可以現場即時購票嗎？",
      answer:
        "為讓我們能有效作人流控制，建議預先在網上訂票。如臨場訂購或補購門票，需視乎當時入場人數而定，開場後一小時內在網頁上訂購，收到確認電郵訊息便可進場。",
    },
    {
      question: "場地內／附近有沒有食肆？",
      answer:
        "基於安全及衛生問題，我們在場內沒有餐廳，但設有小賣部提供飲料以作購買。\n\n步行5-10分鐘到亞洲國際博覽館內亦設有多間食肆、咖啡店及便利店提供餐飲服務，旁邊亦有兩間酒店。\n**可到亞洲國際博覽館網站查詢各店舖的營運時間**",
    },
    {
      question: "交通方法",
      answer: [
        <span key="transport-0" className="underline font-bold">
          機場快綫／港鐵
        </span>,
        "\n乘搭機場快綫／港鐵至博覽館站，B 出口出站後，沿行 人天橋步行約 5 分鐘。\n\n",
        <span key="transport-1" className="underline font-bold">
          巴士
        </span>,
        "\n乘搭 S1, E32, E36P, E41, A32P, E11, E11A, E21, E22, E22A, E22X, E22P, A26, A26P 到達機場博覽館站，沿行人天橋 步行約 5 分鐘。\n\n",
        <span key="transport-2" className="underline font-bold">
          自駕或的士
        </span>,
        "\n至香港國際機場航天城東路 6 號 從新界西出發，經屯門-赤鱲角連接路，約 15-30 分鐘。",
      ],
    },
    {
      question: "11 SKIES泊車優惠",
      answer: [
        "K11 ATELIER 11 SKIES 停車場入口：",
        <Image
          key="parking-entrance"
          src="/images/k11-parking-entrance.jpg"
          alt="K11 Parking Entrance"
          width={300}
          height={200}
        />,
        "入場人士於禮賓部出示即日 Chill Kids Club 入場憑證，並 於 11 SKIES 泊車滿 2 小時，可享其後 1 小時免費泊車優惠。",
      ],
    },
    {
      question: "入場時有什麼注意事項嗎？",
      answer:
        "1. 請提早20分鐘到場進行登記手續，及早享受Chill Kids Club的玩樂設施。\n2. 請穿著或自備襪子進場。",
    },
    {
      question: "可以於同一時段多次進出場地嗎？",
      answer: "入場時會獲派手帶，於指定時段內可多次進出場地。",
    },
    {
      question: "如有興趣包場或舉行派對 ， 可怎樣做？",
      answer: [
        "我們歡迎學校及私人團體包場舉辦專屬活動，更設有派對場地供畢業聚會、生日派對、公司或私人聚會。此外，集體訂票更有團體折扣。查詢及訂購熱線：",
        <a
          key="group-booking-tel"
          href="tel:+85265788417"
          className="underline text-indigo-500"
        >
          65788417
        </a>,
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 my-2">
        {t("Chill Kids Club", { ns: "common" })}
      </h1>
      <Carousel interval={10000}>
        <Image
          src="/images/Banner1.jpg"
          alt="Carousel Slide"
          fill={true}
          className="inline-block w-full aspect-auto object-contain object-center"
        />
        <Image
          src="/images/Banner2.jpg"
          alt="Carousel Slide"
          fill={true}
          className="inline-block w-full aspect-auto object-contain object-center"
        />
        <Image
          src="/images/Banner3.jpg"
          alt="Carousel Slide"
          fill={true}
          className="inline-block w-full aspect-auto object-contain object-center"
        />
      </Carousel>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 my-2">
        {t("18 Themed Game Facilities")}
      </h1>
      <Gallery>
        {galleryImages.map((imgName, idx) => (
          <GalleryCard
            key={`gallery-card-${idx}`}
            legend={t(
              `activities.${(idx + 1).toString().padStart(2, "0")}.legend`
            )}
            title={t(
              `activities.${(idx + 1).toString().padStart(2, "0")}.title`
            )}
            description={t(
              `activities.${(idx + 1).toString().padStart(2, "0")}.description`
            )}
          >
            <Image
              src={`/images/${imgName}.jpg`}
              alt="Activity"
              fill={true}
              className="w-full h-full object-contain object-center"
            />
          </GalleryCard>
        ))}
      </Gallery>
      <div className="flex flex-row flex-nowrap w-full max-w-[736px] h-36 mt-4 mx-auto">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 self-center">
          {t("Title Sponsor")}
        </h2>
        <Link
          className="block relative flex-1"
          href="https://www.ftlife.com.hk/tc/"
          target="_new"
        >
          <Image
            src="/images/ftlife_long.png"
            alt="Sponsor"
            fill={true}
            className="w-full h-full object-contain object-center"
          />
        </Link>
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 my-2">
        {t("FAQ")}
      </h1>
      <div className="flex flex-col w-full h-fit text-gray-900 font-bold text-base mb-4 bg-indigo-100">
        {faq.map(({ question, answer }, idx) => (
          <div
            key={`faq-${idx}`}
            className="border-t last:border-b border-indigo-300"
          >
            <p
              onClick={(e) => {
                let p =
                  e.target.nodeName.toLowerCase() !== "p"
                    ? e.target.nodeName.toLowerCase() === "path"
                      ? e.target.parentElement.parentElement
                      : e.target.parentElement
                    : e.target;
                p.nextElementSibling.classList.toggle("hidden");
                p.querySelector("svg").classList.toggle("rotate-180");
              }}
              className="flex flex-row gap-2 cursor-pointer"
            >
              <span className="w-8">{idx + 1}.</span>
              <span className="flex-1">{question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-6 aspect-square text-indigo-600"
                fill="currentColor"
                stroke="none"
              >
                <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
              </svg>
            </p>
            <p className="hidden whitespace-pre-wrap pl-10 bg-white font-normal transition-all">
              {answer}
            </p>
          </div>
        ))}
      </div>
      <div className="my-2 w-full h-fit flex flex-col gap-1 items-center text-center">
        <p>
          {t("Address", { ns: "common" })}：{t("ckcAddress")}
        </p>
        <p>
          {t("Phone Number", { ns: "common" })}：
          <a href="tel:+85265788417" className="underline text-indigo-500">
            65788417
          </a>{" "}
          {t("WhatsApp")}
        </p>
        <p>
          {t("Email", { ns: "common" })}：
          <a
            href="mailto:chillkids@dpedu.com.hk"
            className="underline text-indigo-500"
          >
            chillkids@dpedu.com.hk
          </a>
        </p>
        <p>{t("ServiceTime", { ns: "common" })}：{t("ckcServiceTime")}</p>
      </div>
      <div className="sticky flex flex-row justify-between items-center z-50 bottom-8 w-full lg:w-4/5 h-fit mx-auto py-2 px-4 bg-gray-100 shadow-lg rounded-full border border-gray-300">
        <h4 className="w-fit h-fit text-lg font-bold">
          {t("Click here to check opening dates and reserve")}
        </h4>
        <Link
          href="/tickets"
          className="text-base rounded-full w-fit h-fit bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 flex flex-row gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 48 48"
            fill="currentColor"
            stroke="none"
          >
            <path d="M29.85 37q-2.05 0-3.45-1.4-1.4-1.4-1.4-3.45 0-2.05 1.4-3.45 1.4-1.4 3.45-1.4 2.05 0 3.45 1.4 1.4 1.4 1.4 3.45 0 2.05-1.4 3.45-1.4 1.4-3.45 1.4ZM9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V5.6q0-.7.45-1.15.45-.45 1.15-.45t1.175.45q.475.45.475 1.15V7h17V5.6q0-.7.45-1.15Q33.4 4 34.1 4t1.175.45q.475.45.475 1.15V7H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Zm0-24.5h30V10H9Zm0 0V10v6.5Z" />
          </svg>
          <span>{t("Reserve")}</span>
        </Link>
      </div>
    </div>
  );
}
