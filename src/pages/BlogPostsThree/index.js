import React from "react";

import { Img, Text, List, Button } from "components";

const BlogPostsThreePage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[95px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="md:h-[1450px] sm:h-[2190px] h-[710px] max-w-[1140px] mx-[auto] relative w-[100%]">
          <div className="flex flex-row gap-[14px] h-[100%] items-center justify-center ml-[auto] mr-[98px] mt-[11px] w-[23%]">
            <Img
              src="images/img_line.svg"
              className="h-[1px] w-[11%]"
              alt="Line"
            />
            <Text
              className="font-bold text-bluegray_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Read our latest blog posts
            </Text>
          </div>
          <List
            className="absolute sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-[0] justify-center m-[auto] w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start mb-[223px] sm:ml-[0] rounded-radius4 shadow-bs w-[100%]">
              <div className="flex flex-col gap-[16px] items-end justify-start w-[100%]">
                <Img
                  src="images/img_bitmap.png"
                  className="h-[315px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                  alt="Bitmap"
                />
                <div className="flex flex-row gap-[18px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[94%]">
                  <div className="flex flex-col items-start justify-start mb-[20px] w-[78%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[101px] text-[12px] text-blue_A700 text-center uppercase w-[auto]"
                      shape="CircleBorder13"
                    >
                      UX WRITING
                    </Button>
                    <Text
                      className="font-bold leading-[27.00px] mt-[16px] text-bluegray_900 text-left w-[100%]"
                      as="h2"
                      variant="h2"
                    >
                      How to create a UX Writing portfolio as a beginner
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-start mt-[23px] md:w-[100%] sm:w-[100%] w-[80%]">
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
                        alt="Eight"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        15 March, 2022
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex h-[56px] items-center justify-center mt-[100px] w-[56px]"
                    size="smIcn"
                    variant="icbFillBlueA700"
                  >
                    <Img
                      src="images/img_arrowright_white_A700.svg"
                      className="h-[32px]"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] sm:mt-[0] my-[111px] rounded-radius4 shadow-bs w-[100%]">
              <div className="flex flex-col gap-[16px] items-end justify-start w-[100%]">
                <Img
                  src="images/img_bitmap_236X360.png"
                  className="h-[315px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                  alt="Bitmap One"
                />
                <div className="flex flex-row gap-[16px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[94%]">
                  <div className="flex flex-col items-start justify-start mb-[20px] w-[79%]">
                    <div className="flex flex-row gap-[12px] items-center justify-start rounded-radius13 md:w-[100%] sm:w-[100%] w-[75%]">
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
                    <Text
                      className="font-bold leading-[27.00px] mt-[16px] text-bluegray_900 text-left w-[100%]"
                      as="h2"
                      variant="h2"
                    >
                      How Snapchat and Netflix Break UX Design Principles
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-start mt-[23px] md:w-[100%] sm:w-[100%] w-[80%]">
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
                        alt="Nine"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        15 March, 2022
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex h-[56px] items-center justify-center mt-[100px] w-[56px]"
                    size="smIcn"
                    variant="icbFillBlueA700"
                  >
                    <Img
                      src="images/img_arrowright_white_A700.svg"
                      className="h-[32px]"
                      alt="arrowright One"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] sm:mt-[0] mt-[223px] rounded-radius4 shadow-bs w-[100%]">
              <div className="flex flex-col gap-[16px] items-end justify-start w-[100%]">
                <Img
                  src="images/img_bitmap_1.png"
                  className="h-[315px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                  alt="Bitmap Two"
                />
                <div className="flex flex-row gap-[18px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[94%]">
                  <div className="flex flex-col items-start justify-start mb-[20px] w-[78%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[111px] text-[12px] text-blue_A700 text-center uppercase w-[auto]"
                      shape="CircleBorder13"
                    >
                      WEB DESIGN
                    </Button>
                    <Text
                      className="font-bold leading-[27.00px] mt-[16px] text-bluegray_900 text-left w-[100%]"
                      as="h2"
                      variant="h2"
                    >
                      How to Design Your Site to Make it Super-fast
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-start mt-[23px] md:w-[100%] sm:w-[100%] w-[80%]">
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
                        alt="Ten"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        15 March, 2022
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex h-[56px] items-center justify-center mt-[100px] w-[56px]"
                    size="smIcn"
                    variant="icbFillBlueA700"
                  >
                    <Img
                      src="images/img_arrowright_white_A700.svg"
                      className="h-[32px]"
                      alt="arrowright Two"
                    />
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

export default BlogPostsThreePage;
