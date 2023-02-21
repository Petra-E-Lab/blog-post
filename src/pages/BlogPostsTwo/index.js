import React from "react";

import { Img, Text } from "components";

const BlogPostsTwoPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-[auto] p-[95px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[951px] mb-[34px] mx-[auto] w-[100%]">
          <Img
            src="images/img_line3.svg"
            className="h-[1px] w-[6%]"
            alt="LineThree"
          />
          <Text
            className="mt-[24px] text-bluegray_900 text-left w-[auto]"
            as="h1"
            variant="h1"
          >
            Our Latest Posts
          </Text>
          <div className="flex flex-col font-montserrat items-center justify-start mt-[32px] w-[100%]">
            <div className="md:gap-[20px] sm:gap-[20px] gap-[31px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
              <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                <Img
                  src="images/img_bitmap_160X460.png"
                  className="h-[160px] sm:h-[auto] object-cover w-[100%]"
                  alt="Bitmap"
                />
                <div className="flex flex-row items-start justify-between mt-[24px] w-[100%]">
                  <div className="flex flex-row gap-[8px] items-start justify-between mt-[3px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      src="images/img_.svg"
                      className="h-[4px] mt-[4px] w-[4px]"
                      alt="Four"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="font-normal mt-[3px] not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] mt-[12px] text-bluegray_900 text-left w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                <Img
                  src="images/img_bitmap_2.png"
                  className="h-[160px] sm:h-[auto] object-cover w-[100%]"
                  alt="Bitmap One"
                />
                <div className="flex flex-row items-start justify-between mt-[24px] w-[100%]">
                  <div className="flex flex-row gap-[8px] items-start justify-between mt-[3px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      src="images/img_.svg"
                      className="h-[4px] mt-[4px] w-[4px]"
                      alt="Five"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="font-normal mt-[3px] not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] mt-[12px] text-bluegray_900 text-left w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How Snapchat and Netflix Break UX Design Principles
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                <Img
                  src="images/img_bitmap_3.png"
                  className="h-[160px] sm:h-[auto] object-cover w-[100%]"
                  alt="Bitmap Two"
                />
                <div className="flex flex-row items-start justify-between mt-[24px] pt-[3px] w-[100%]">
                  <div className="flex flex-row gap-[8px] items-start justify-between w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      src="images/img_.svg"
                      className="h-[4px] mt-[4px] w-[4px]"
                      alt="Six"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] mt-[12px] text-bluegray_900 text-left w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  Designing Content for Readability, Legibility and Clarity.
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                <Img
                  src="images/img_bitmap_4.png"
                  className="h-[160px] sm:h-[auto] object-cover w-[100%]"
                  alt="Bitmap Three"
                />
                <div className="flex flex-row items-start justify-between mt-[24px] pt-[3px] w-[100%]">
                  <div className="flex flex-row gap-[8px] items-start justify-between w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      src="images/img_.svg"
                      className="h-[4px] mt-[4px] w-[4px]"
                      alt="Seven"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] mt-[12px] text-bluegray_900 text-left w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  Survey: UX, Interactive Designer or Full-Stack Developer - Who
                  are you?
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsTwoPage;
