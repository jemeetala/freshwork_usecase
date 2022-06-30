import React from "react";

import {
  Row,
  Column,
  Image,
  Stack,
  Text,
  Input,
  Button,
  CheckBox,
} from "components";

const ProductsPage = () => {
  return (
    <>
      <Row className="bg-bluegray_51 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <aside className="items-center lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
          <Column className="">
            <Image
              src={"images/img_group_1.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="Group"
            />
            <Image
              src={"images/img_frame407_1.svg"}
              className="3xl:h-[1075px] lg:h-[697px] xl:h-[797px] h-[895px] 2xl:h-[896px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] object-contain w-[51%]"
              alt="Frame407"
            />
          </Column>
        </aside>
        <Column className="lg:pb-[539px] xl:pb-[617px] pb-[694px] 3xl:pb-[833px] w-[93%]">
          <Column className="items-center w-[100%]">
            <Stack className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] w-[100%]">
              <div className="absolute bg-white_A700 border border-indigo_50 border-solid lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] w-[100%]"></div>
              <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-[0] justify-center m-[auto] w-[98%]">
                <Row className="absolute items-center justify-between pr-[1px] right-[0] w-[89%]">
                  <Text className="border border-bluegray_201 border-solid font-normal leading-[normal] not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[38%]">{`Search by contact`}</Text>
                  <Row className="font-inter items-center justify-between lg:ml-[336px] xl:ml-[384px] ml-[432px] 3xl:ml-[518px] w-[25%]">
                    <Image
                      src={"images/img_group5_1.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group5"
                    />
                    <Image
                      src={"images/img_group4_1.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group4"
                    />
                    <Image
                      src={"images/img_group3_1.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group3"
                    />
                    <Column className="bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]">
                      <Text className="font-bold mx-[auto] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 tracking-ls1 w-[auto]">{`1`}</Text>
                    </Column>
                    <Column className="bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] pb-[9px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                      <Text className="font-bold mx-[auto] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-amber_500 text-left tracking-ls1 w-[auto]">{`S`}</Text>
                    </Column>
                  </Row>
                </Row>
                <Row className="absolute border border-bluegray_201 border-solid items-center justify-start left-[0] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%]">
                  <Image
                    src={"images/img_usercircleout_1.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="usercircleOut"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 text-left w-[auto]">{`Contacts`}</Text>
                  <Image
                    src={"images/img_angledownoutl_1.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="angledownOutl"
                  />
                </Row>
              </Stack>
            </Stack>
            <header className="w-[100%]">
              <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-end lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[5px] xl:py-[6px] py-[7.5px] 2xl:py-[7px] 3xl:py-[9px] w-[100%]">
                <Text className="font-normal 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Products`}</Text>
                <Image
                  src={"images/img_angleleftbou_1.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7.5px] 2xl:mb-[7px] 3xl:mb-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.5px] 2xl:mt-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angleleftbOu"
                />
                <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 text-left w-[auto]">{`All Products (1)`}</Text>
                <Row className="items-center justify-center lg:ml-[327px] xl:ml-[374px] ml-[421px] 3xl:ml-[505px] w-[48%]">
                  <div className="bg-transparent border-0 w-[19%] input-wrap">
                    <Image
                      src={"images/img_vector_13.svg"}
                      className="absolute z-[1] right-[14.799988px] bg-transparent border-0 lg:right-[11px] xl:right-[13px] 2xl:right-[14px] 3xl:right-[17px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <Input
                      className="bg-bluegray_900 placeholder:bg-transparent border border-gray_200 border-solid font-normal not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:pr-[39px] xl:pr-[44px] pr-[50.39998800000004px] 2xl:pr-[50px] 3xl:pr-[60px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                      name="Group92"
                      placeholder={`Add product`}
                    ></Input>
                  </div>
                  <div className="3xl:ml-[12px] bg-transparent border-0 lg:ml-[7px] ml-[10px] w-[21%] xl:ml-[8px] input-wrap">
                    <Image
                      src={"images/img_vector_14.svg"}
                      className="absolute z-[1] right-[14.800049px] bg-transparent border-0 lg:right-[11px] xl:right-[13px] 2xl:right-[14px] 3xl:right-[17px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <Input
                      className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:pr-[39px] xl:pr-[44px] pr-[50.400049000000045px] 2xl:pr-[50px] 3xl:pr-[60px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                      name="Group93"
                      placeholder={`Add categories`}
                    ></Input>
                  </div>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[24%]">
                    <Image
                      src={"images/img_webgridaltou_1.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="webgridaltOu"
                    />
                    <Text className="hover:bg-blue_800 cursor-pointer hover:font-bold font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left hover:text-white_A700 w-[auto]">{`Edit coumns`}</Text>
                    <Image
                      src={"images/img_angledownsoli_1.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownSoli"
                    />
                  </Row>
                  <Image
                    src={"images/img_frame420.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain rounded-radius4 w-[11%]"
                    alt="Frame420"
                  />
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[18%]">
                    <Image
                      src={"images/img_filteroutline_1.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="filterOutline"
                    />
                    <Text className="hover:bg-blue_800 cursor-pointer hover:font-bold font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left hover:text-white_A700 w-[auto]">{`Filters`}</Text>
                    <Text className="bg-blue_800 cursor-pointer hover:font-bold font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[1px] lg:my-[1px] my-[2px] xl:pl-[3px] pl-[4px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] lg:px-[3px] py-[0] rounded-radius8 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[auto]">{`01`}</Text>
                  </Row>
                </Row>
              </Row>
            </header>
            <Row className="items-center justify-evenly w-[100%]">
              <Stack className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] w-[25%]">
                <Stack className="absolute font-sourcesanspro lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] inset-[0] w-[100%]">
                  <Row className="absolute inset-[0] items-center justify-evenly w-[100%]">
                    <Image
                      src={"images/img_column_2.svg"}
                      className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] object-contain w-[20%]"
                      alt="Column"
                    />
                    <Column className="w-[80%]">
                      <div className="w-[100%] input-wrap">
                        <Image
                          src={"images/img_vector_15.svg"}
                          className="absolute z-[1] left-[56.00px] lg:left-[43px] xl:left-[49px] 2xl:left-[56px] 3xl:left-[67px] my-[auto] inset-y-[0]"
                          alt="Vector"
                        />
                        <Button className="bg-gray_100 border border-gray_200 border-solid pb-[15.49px] xl:pl-[108px] pl-[122.01px] 2xl:pl-[122px] 3xl:pl-[146px] lg:pl-[94px] pt-[15.5px] lg:py-[12px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
                          {""}
                        </Button>
                      </div>
                      <Column className="w-[100%]">
                        <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-start xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[117px] lg:pr-[75px] xl:pr-[86px] pr-[97.5px] 2xl:pr-[97px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]">
                          <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                          <Column className="lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[39%]">
                            <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Jemee`}</Text>
                            <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 text-left w-[auto]">{`Jemee Tala`}</Text>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <CheckBox
                    className="absolute font-semibold left-[7%] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left top-[8%] uppercase w-[27%]"
                    inputClassName="2xl:h-[23px] 3xl:h-[27px] 3xl:w-[26px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[22px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[22px] xl:h-[20px] xl:w-[19px] mr-[5px]"
                    name="Group99"
                    label={`Name`}
                  ></CheckBox>
                </Stack>
                <CheckBox
                  className="absolute bottom-[25%] font-bold font-inter left-[7%] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 text-left tracking-ls1 w-[28%]"
                  inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                  name="Group100"
                  label={`Je`}
                ></CheckBox>
              </Stack>
              <Column className="w-[9%]">
                <div className="w-[100%] input-wrap">
                  <Image
                    src={"images/img_vector_16.svg"}
                    className="absolute z-[1] right-[45.98999px] lg:right-[35px] xl:right-[40px] 2xl:right-[46px] 3xl:right-[55px] my-[auto] inset-y-[0]"
                    alt="Vector"
                  />
                  <Button className="bg-gray_100 border border-gray_200 border-solid font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[111.99999px] 2xl:pr-[112px] 3xl:pr-[134px] lg:pr-[87px] xl:pr-[99px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[100%]">{`Active`}</Button>
                </div>
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[100%]"
                  name="Group81"
                  placeholder={`Yes`}
                ></Input>
              </Column>
              <Column className="w-[20%]">
                <div className="w-[100%] input-wrap">
                  <Image
                    src={"images/img_vector_17.svg"}
                    className="absolute z-[1] right-[87.98999px] lg:right-[68px] xl:right-[78px] 2xl:right-[88px] 3xl:right-[105px] my-[auto] inset-y-[0]"
                    alt="Vector"
                  />
                  <Button className="bg-gray_100 border border-gray_200 border-solid font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[152px] xl:pr-[174px] pr-[195.99999000000003px] 2xl:pr-[196px] 3xl:pr-[235px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[100%]">{`Base currency amount`}</Button>
                </div>
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                  name="Group83"
                  placeholder={`--`}
                ></Input>
              </Column>
              <Column className="w-[11%]">
                <Input
                  className="bg-gray_100 placeholder:bg-transparent border border-gray_200 border-solid font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left uppercase w-[100%]"
                  name="Group86"
                  placeholder={`category`}
                ></Input>
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                  name="Group85"
                  placeholder={`Hardware`}
                ></Input>
              </Column>
              <Column className="w-[14%]">
                <div className="w-[100%] input-wrap">
                  <Image
                    src={"images/img_vector_18.svg"}
                    className="absolute z-[1] left-[94.00px] lg:left-[73px] xl:left-[83px] 2xl:left-[94px] 3xl:left-[112px] my-[auto] inset-y-[0]"
                    alt="Vector"
                  />
                  <Button className="bg-gray_100 border border-gray_200 border-solid font-semibold pb-[19.49px] lg:pl-[154px] xl:pl-[176px] pl-[198.01px] 2xl:pl-[198px] 3xl:pl-[237px] pt-[19.5px] lg:py-[15px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[100%]">{`created at`}</Button>
                </div>
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                  name="Group87"
                  placeholder={`A few seconds ago`}
                ></Input>
              </Column>
              <Column className="w-[16%]">
                <div className="w-[100%] input-wrap">
                  <Image
                    src={"images/img_vector_19.svg"}
                    className="absolute z-[1] left-[94.00px] lg:left-[73px] xl:left-[83px] 2xl:left-[94px] 3xl:left-[112px] my-[auto] inset-y-[0]"
                    alt="Vector"
                  />
                  <Button className="bg-gray_100 border border-gray_200 border-solid font-semibold pb-[19.49px] lg:pl-[154px] xl:pl-[176px] pl-[198.01px] 2xl:pl-[198px] 3xl:pl-[237px] pt-[19.5px] lg:py-[15px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[100%]">{`created by`}</Button>
                </div>
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                  name="Group89"
                  placeholder={`Jemee Tala`}
                ></Input>
              </Column>
              <Image
                src={"images/img_column_3.svg"}
                className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] object-contain w-[4%]"
                alt="Column"
              />
            </Row>
          </Column>
          <Input
            className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[16px] xl:py-[19px] py-[21.5px] 2xl:py-[21px] 3xl:py-[25px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
            name="Group78"
            placeholder={`Showing 1-3 of 3`}
          ></Input>
        </Column>
      </Row>
    </>
  );
};

export default ProductsPage;
