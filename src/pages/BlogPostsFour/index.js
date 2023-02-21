import React from "react";

import { Text, Img, List, Line, Button } from "components";

const BlogPostsFourPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-montserrat items-center justify-center mx-[auto] p-[130px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[70px] items-center justify-start max-w-[1140px] mb-[36px] mt-[40px] mx-[auto] w-[100%]">
          <div className="flex md:flex-1 sm:flex-1 flex-col gap-[32px] items-start justify-start md:w-[100%] sm:w-[100%] w-[29%]">
            <div className="flex flex-col items-start justify-start pt-[4px] md:w-[100%] sm:w-[100%] w-[93%]">
              <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] md:w-[100%] sm:w-[100%] w-[40%]">
                <Text
                  className="font-normal not-italic text-bluegray_600 text-left uppercase w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Blog posts
                </Text>
                <Img
                  src="images/img_line_bluegray_600.svg"
                  className="h-[1px] md:ml-[0] sm:ml-[0] ml-[2px] mt-[4px] w-[28%]"
                  alt="Line"
                />
              </div>
              <Text
                className="leading-[50.00px] mt-[8px] text-bluegray_900 text-left w-[100%]"
                as="h1"
                variant="h1"
              >
                Read Our Latest Posts
              </Text>
              <Text
                className="font-normal leading-[27.00px] md:ml-[0] sm:ml-[0] ml-[2px] mt-[16px] not-italic text-bluegray_600 text-left w-[100%]"
                as="h2"
                variant="h2"
              >
                Adwords Keyword research for beginners when you embark on your
                first PPC journey.
              </Text>
            </div>
            <List
              className="flex-col gap-[16px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[12px] items-center justify-start w-[100%]">
                <div className="flex flex-row items-start justify-evenly w-[100%]">
                  <Text
                    className="sm:flex-1 font-bold leading-[27.00px] text-bluegray_900 text-left sm:w-[100%] w-[92%]"
                    as="h3"
                    variant="h3"
                  >
                    Writing A Good Headline For Your Advertisement
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[24px] mt-[2px] w-[24px]"
                    alt="arrowright"
                  />
                </div>
                <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                <div className="flex flex-row items-start justify-evenly w-[100%]">
                  <Text
                    className="sm:flex-1 font-bold leading-[27.00px] text-bluegray_900 text-left sm:w-[100%] w-[92%]"
                    as="h3"
                    variant="h3"
                  >
                    Where To Look For Cheap Printing Services
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[24px] mt-[2px] w-[24px]"
                    alt="arrowright One"
                  />
                </div>
                <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                <div className="flex flex-row items-start justify-evenly w-[100%]">
                  <Text
                    className="sm:flex-1 font-bold leading-[27.00px] text-bluegray_900 text-left sm:w-[100%] w-[92%]"
                    as="h3"
                    variant="h3"
                  >
                    Using Banner Stands To Increase Trade Show Traffic
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[24px] mt-[2px] w-[24px]"
                    alt="arrowright Two"
                  />
                </div>
                <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
              </div>
            </List>
          </div>
          <List
            className="md:flex-1 sm:flex-1 sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 md:w-[100%] sm:w-[100%] w-[66%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-col gap-[19px] items-center justify-start pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_312X360.png"
                className="h-[312px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
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
                    alt="Eleven"
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
                <Text
                  className="font-light leading-[24.00px] mt-[8px] text-bluegray_600 text-left w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s.
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[101px] mt-[16px] text-[12px] text-blue_A700 text-center uppercase w-[auto]"
                  shape="CircleBorder13"
                >
                  UX WRITING
                </Button>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[19px] items-center justify-start pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_236X360.png"
                className="h-[312px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
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
                    alt="Twelve"
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
                  typesetting industry. Lorem Ipsum has been the industry&#39;s.
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
          </List>
        </div>
      </div>
    </>
  );
};

export default BlogPostsFourPage;
