import React from "react";

import { Text, Img, Button } from "components";

const BlogPostsFivePage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[52px] items-center justify-start max-w-[946px] mb-[10px] mx-[auto] pt-[9px] w-[100%]">
          <div className="flex flex-col gap-[17px] items-center justify-start md:w-[100%] sm:w-[100%] w-[81%]">
            <Text
              className="text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Our Latest Posts
            </Text>
            <Text
              className="font-light leading-[26.00px] text-bluegray_600 text-center w-[100%]"
              as="h2"
              variant="h2"
            >
              Adwords Keyword research for beginners when you embark on your
              first PPC journey, you need to keep a small number of keywords at
              first.
            </Text>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-end justify-between w-[100%]">
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col gap-[27px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[154px] pb-[24px] rounded-radius4 shadow-bs md:w-[100%] sm:w-[100%] w-[auto]">
              <Img
                src="images/img_bitmap.png"
                className="h-[174px] md:h-[auto] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap"
              />
              <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[82%]">
                <div className="flex flex-row gap-[8px] items-start justify-between md:w-[100%] sm:w-[100%] w-[98%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="h-[4px] mt-[4px] w-[4px]"
                    alt="Thirteen"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[24.00px] text-bluegray_900 text-left w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col gap-[27px] items-center justify-start pb-[24px] rounded-radius4 shadow-bs md:w-[100%] sm:w-[100%] w-[auto]">
              <Img
                src="images/img_bitmap_236X360.png"
                className="h-[244px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap One"
              />
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[87%]">
                <div className="flex flex-row gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[67%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="h-[4px] mt-[4px] w-[4px]"
                    alt="Fourteen"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] mt-[16px] text-bluegray_900 text-left w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How Snapchat and Netflix Break UX Design Principles
                </Text>
                <Text
                  className="font-light leading-[24.00px] mt-[8px] text-bluegray_600 text-left w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </Text>
                <div className="flex flex-row gap-[12px] items-center justify-start mt-[16px] rounded-radius13 md:w-[100%] sm:w-[100%] w-[64%]">
                  <Button
                    className="cursor-pointer font-medium min-w-[93px] text-[12px] text-blue_A700 text-center uppercase w-[auto]"
                    shape="CircleBorder13"
                  >
                    UX DESIGN
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[93px] text-[12px] text-center text-red_700 uppercase w-[auto]"
                    shape="CircleBorder13"
                  >
                    UI DESIGN
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col gap-[27px] items-center justify-start mb-[154px] pb-[24px] rounded-radius4 shadow-bs md:w-[100%] sm:w-[100%] w-[auto]">
              <Img
                src="images/img_bitmap_1.png"
                className="h-[174px] md:h-[auto] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap Two"
              />
              <div className="flex flex-col gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[80%]">
                <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="h-[4px] mt-[4px] w-[4px]"
                    alt="Fifteen"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[96%]"
                  as="h3"
                  variant="h3"
                >
                  How to Design Your Site to Make it Super-fast
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsFivePage;
