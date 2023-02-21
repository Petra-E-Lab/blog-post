import React from "react";

import { Text, Button, Img, List } from "components";

const BlogPostsEightPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex font-montserrat h-[900px] justify-end mx-[auto] p-[120px] sm:px-[20px] md:px-[40px] relative w-[100%]">
        <div className="bg-white_A700 h-[480px] mb-[12px] ml-[107px] mt-[auto] md:px-[20px] sm:px-[20px] rounded-radius2 shadow-bs w-[33%]"></div>
        <div className="absolute flex flex-col gap-[52px] h-[max-content] inset-[0] items-center justify-center m-[auto] max-w-[948px] pt-[9px] w-[100%]">
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
          <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 sm:flex-1 flex-col items-center justify-end pt-[400px] md:w-[100%] sm:w-[100%] w-[auto]"
              style={{
                backgroundImage: "url('images/img_bitmap_312X360.png')",
              }}
            >
              <div className="bg-bluegray_900_99 flex sm:flex-col flex-row gap-[39px] items-center justify-between p-[16px] w-[100%]">
                <Text
                  className="font-bold leading-[24.00px] sm:ml-[0] ml-[8px] text-left text-white_A700 tracking-ls02857142984867096 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
                <Button
                  className="flex h-[42px] items-center justify-center mr-[8px] sm:mt-[0] my-[3px] rounded-radius50 w-[42px]"
                  size="smIcn"
                  variant="icbOutlineBlack9000c"
                >
                  <Img
                    src="images/img_playsolid.svg"
                    className="h-[16px]"
                    alt="playSolid"
                  />
                </Button>
              </div>
            </div>
            <List
              className="flex-col gap-[30px] grid w-[auto]"
              orientation="vertical"
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start my-[0] pt-[145px] w-[100%]"
                style={{ backgroundImage: "url('images/img_bitmap_1.png')" }}
              >
                <div className="bg-bluegray_900_99 flex sm:flex-col flex-row gap-[39px] items-center justify-between p-[16px] w-[100%]">
                  <Text
                    className="font-bold leading-[24.00px] sm:ml-[0] ml-[8px] text-left text-white_A700 tracking-ls02857142984867096 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    How to Design Your Site to Make it Super-fast
                  </Text>
                  <Button
                    className="flex h-[42px] items-center justify-center mr-[8px] sm:mt-[0] my-[3px] rounded-radius50 w-[42px]"
                    size="smIcn"
                    variant="icbOutlineBlack9000c"
                  >
                    <Img
                      src="images/img_playsolid.svg"
                      className="h-[16px]"
                      alt="playSolid One"
                    />
                  </Button>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-end my-[0] pt-[145px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_bitmap_236X360.png')",
                }}
              >
                <div className="bg-bluegray_900_99 flex sm:flex-col flex-row gap-[39px] items-center justify-between p-[16px] w-[100%]">
                  <Text
                    className="font-bold leading-[24.00px] sm:ml-[0] ml-[8px] text-left text-white_A700 tracking-ls02857142984867096 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    How Snapchat and Netflix Break UX Design Principles
                  </Text>
                  <Button
                    className="flex h-[42px] items-center justify-center mr-[8px] sm:mt-[0] my-[3px] rounded-radius50 w-[42px]"
                    size="smIcn"
                    variant="icbOutlineBlack9000c"
                  >
                    <Img
                      src="images/img_playsolid.svg"
                      className="h-[16px]"
                      alt="playSolid Two"
                    />
                  </Button>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsEightPage;
