import React from "react";

import { Text, List, Img } from "components";

const BlogPostsSixPage = () => {
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
          <List
            className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-1 flex-col gap-[24px] items-center justify-start pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap.png"
                className="h-[258px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap"
              />
              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[90%]">
                <Text
                  className="font-bold leading-[27.00px] text-bluegray_900 text-left w-[100%]"
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
                  typesetting industry. Lorem Ipsum has been.
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[16px] rounded-radius24 w-[100%]">
                  <Img
                    src="images/img_ovalcopy4.png"
                    className="h-[48px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[48px]"
                    alt="OvalCopyFour"
                  />
                  <Text
                    className="font-light sm:ml-[0] ml-[7px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Jane Phillips
                  </Text>
                  <Text
                    className="font-light sm:ml-[0] ml-[141px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    15 March, 2022
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col gap-[24px] items-center justify-start pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_1.png"
                className="h-[258px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap One"
              />
              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[90%]">
                <Text
                  className="font-bold leading-[27.00px] text-bluegray_900 text-left w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How to Design Your Site to Make it Super-fast
                </Text>
                <Text
                  className="font-light leading-[24.00px] mt-[8px] text-bluegray_600 text-left w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[16px] rounded-radius24 w-[100%]">
                  <Img
                    src="images/img_ovalcopy4_48X48.png"
                    className="h-[48px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[48px]"
                    alt="OvalCopyFour One"
                  />
                  <Text
                    className="font-light sm:ml-[0] ml-[8px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Wade Warren
                  </Text>
                  <Text
                    className="font-light sm:ml-[0] ml-[131px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    15 March, 2022
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default BlogPostsSixPage;
