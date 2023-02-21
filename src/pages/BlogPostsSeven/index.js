import React from "react";

import { Text, Img, Line, Button } from "components";

const BlogPostsSevenPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[52px] items-center justify-start max-w-[1141px] mx-[auto] pt-[9px] w-[100%]">
          <div className="flex flex-col gap-[17px] items-center justify-start md:w-[100%] sm:w-[100%] w-[67%]">
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
          <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
            <div className="flex md:flex-1 sm:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-start pb-[16px] rounded-radius4 shadow-bs w-[100%]">
                <div className="md:h-[114px] sm:h-[114px] h-[134px] relative w-[100%]">
                  <Img
                    src="images/img_bitmap_236X360.png"
                    className="absolute h-[114px] inset-x-[0] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] top-[0] w-[100%]"
                    alt="Bitmap"
                  />
                  <Img
                    src="images/img_ovalcopy4_42X42.png"
                    className="absolute bottom-[0] h-[42px] left-[10%] rounded-radius50 w-[42px]"
                    alt="OvalCopyFour"
                  />
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[82%]">
                  <Text
                    className="font-bold leading-[27.00px] text-bluegray_900 text-left sm:w-[100%] w-[96%]"
                    as="h2"
                    variant="h2"
                  >
                    Netflix Break UX Design Principles
                  </Text>
                  <Text
                    className="font-light leading-[24.00px] text-bluegray_600 text-left w-[100%]"
                    as="h3"
                    variant="h3"
                  >
                    Lorem Ipsum is simply dummy text of the
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-start justify-start p-[24px] sm:px-[20px] rounded-radius4 shadow-bs w-[100%]">
                <Text
                  className="font-bold leading-[27.00px] text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                  as="h2"
                  variant="h2"
                >
                  UX Writing portfolio as a beginner
                </Text>
                <div className="flex flex-col gap-[12px] items-start justify-start mt-[13px] w-[100%]">
                  <Text
                    className="font-light text-bluegray_600 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Lorem Ipsum
                  </Text>
                  <Line className="bg-bluegray_100_4c h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-row items-end justify-between mt-[11px] rounded-radius13 w-[100%]">
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[66px] text-[12px] text-blue_A700 text-center uppercase w-[auto]"
                    shape="CircleBorder13"
                  >
                    UX / UI
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col gap-[16px] items-center justify-start pb-[16px] rounded-radius4 shadow-bs md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="md:h-[268px] sm:h-[268px] h-[289px] relative w-[100%]">
                <Img
                  src="images/img_bitmap.png"
                  className="absolute h-[268px] inset-x-[0] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] top-[0] w-[100%]"
                  alt="Bitmap One"
                />
                <Img
                  src="images/img_ovalcopy4.png"
                  className="absolute bottom-[0] h-[42px] left-[4%] rounded-radius50 w-[42px]"
                  alt="OvalCopyFour One"
                />
              </div>
              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                <Text
                  className="font-bold leading-[27.00px] text-bluegray_900 text-left"
                  as="h2"
                  variant="h2"
                >
                  How to create a UX Writing portfolio as a <br />
                  beginner
                </Text>
                <Text
                  className="font-light leading-[24.00px] mt-[8px] text-bluegray_600 text-left w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s.
                </Text>
                <Line className="bg-bluegray_100_4c h-[1px] mt-[16px] w-[100%]" />
                <div className="flex flex-row items-end justify-between mt-[16px] rounded-radius13 w-[100%]">
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                  <div className="flex flex-row gap-[12px] items-center justify-between rounded-radius13 w-[auto]">
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
            </div>
            <div className="flex md:flex-1 sm:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="bg-white_A700 flex flex-col items-start justify-start p-[24px] sm:px-[20px] rounded-radius4 shadow-bs w-[100%]">
                <Text
                  className="font-bold leading-[27.00px] text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                  as="h2"
                  variant="h2"
                >
                  UX Writing portfolio as a beginner
                </Text>
                <div className="flex flex-col gap-[12px] items-start justify-start mt-[13px] w-[100%]">
                  <Text
                    className="font-light text-bluegray_600 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Lorem Ipsum
                  </Text>
                  <Line className="bg-bluegray_100_4c h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-row items-end justify-between mt-[11px] rounded-radius13 w-[100%]">
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[66px] text-[12px] text-blue_A700 text-center uppercase w-[auto]"
                    shape="CircleBorder13"
                  >
                    UX / UI
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-start pb-[16px] rounded-radius4 shadow-bs w-[100%]">
                <div className="md:h-[114px] sm:h-[114px] h-[134px] relative w-[100%]">
                  <Img
                    src="images/img_bitmap_1.png"
                    className="absolute h-[114px] inset-x-[0] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] top-[0] w-[100%]"
                    alt="Bitmap Two"
                  />
                  <Img
                    src="images/img_ovalcopy4_48X48.png"
                    className="absolute bottom-[0] h-[42px] left-[10%] rounded-radius50 w-[42px]"
                    alt="OvalCopyFour Two"
                  />
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[82%]">
                  <Text
                    className="font-bold leading-[27.00px] text-bluegray_900 text-left sm:w-[100%] w-[96%]"
                    as="h2"
                    variant="h2"
                  >
                    Design Your Site Super-Fast
                  </Text>
                  <Text
                    className="font-light leading-[24.00px] text-bluegray_600 text-left w-[100%]"
                    as="h3"
                    variant="h3"
                  >
                    Lorem Ipsum is simply dummy text of the
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsSevenPage;
