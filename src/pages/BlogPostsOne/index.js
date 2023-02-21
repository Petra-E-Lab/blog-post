import React from "react";

import { Text, List, Img, Button } from "components";

const BlogPostsOnePage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-center justify-end max-w-[1140px] mx-[auto] py-[2px] w-[100%]">
          <div className="flex flex-col gap-[17px] items-center justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[67%]">
            <Text
              className="text-colors text-left w-[auto]"
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
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[55px] w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-1 flex-col gap-[19px] items-center justify-start pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap.png"
                className="h-[236px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap"
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
                    alt="One"
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
                  How to create a UX Writing portfolio as a beginner
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[101px] mt-[16px] text-[12px] text-blue_A700 text-center uppercase w-[auto]"
                  shape="CircleBorder13"
                >
                  UX WRITING
                </Button>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col gap-[19px] items-center justify-start pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_236X360.png"
                className="h-[236px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap One"
              />
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[87%]">
                <div className="flex flex-row items-start justify-start md:w-[100%] sm:w-[100%] w-[66%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="h-[4px] ml-[2px] mt-[4px] w-[4px]"
                    alt="Two"
                  />
                  <Text
                    className="font-normal ml-[8px] not-italic text-bluegray_600 text-left w-[auto]"
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
            <div className="bg-white_A700 flex flex-1 flex-col gap-[19px] items-center justify-start pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_1.png"
                className="h-[236px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap Two"
              />
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[87%]">
                <div className="flex flex-row items-start justify-start md:w-[100%] sm:w-[100%] w-[66%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="h-[4px] ml-[2px] mt-[4px] w-[4px]"
                    alt="Three"
                  />
                  <Text
                    className="font-normal ml-[8px] not-italic text-bluegray_600 text-left w-[auto]"
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
                  How to Design Your Site to Make it Super-fast
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[111px] mt-[16px] text-[12px] text-blue_A700 text-center uppercase w-[auto]"
                  shape="CircleBorder13"
                >
                  WEB DESIGN
                </Button>
              </div>
            </div>
          </List>
          <div className="flex flex-row items-center justify-center mt-[52px] md:w-[100%] sm:w-[100%] w-[13%]">
            <Text
              className="font-semibold text-blue_A700 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              READ MORE
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="h-[24px] ml-[4px] w-[24px]"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsOnePage;
