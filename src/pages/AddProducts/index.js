import React from "react";

import {
  Column,
  Row,
  Image,
  Stack,
  Text,
  Input,
  Button,
  CheckBox,
} from "components";

const AddProductsPage = () => {
  return (
    <>
      <Column className="bg-gray_900_d8 font-sourcesanspro mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="items-center mb-[1px] lg:pb-[30px] xl:pb-[34px] pb-[39px] 3xl:pb-[46px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
            <Column className="">
              <Image
                src={"images/img_group_9.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group"
              />
              <Image
                src={"images/img_frame407_6.svg"}
                className="3xl:h-[1075px] lg:h-[697px] xl:h-[797px] h-[895px] 2xl:h-[896px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] object-contain w-[51%]"
                alt="Frame407"
              />
            </Column>
          </aside>
          <Stack className="h-[1025px] 2xl:h-[1026px] 3xl:h-[1231px] lg:h-[798px] xl:h-[912px] w-[93%]">
            <div className="absolute bg-white_A700 border border-indigo_50 border-solid lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-x-[0] top-[0] w-[100%]"></div>
            <header className="absolute top-[7%] w-[100%]">
              <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-end lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[5px] xl:py-[6px] py-[7.5px] 2xl:py-[7px] 3xl:py-[9px] w-[100%]">
                <Text className="font-normal 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Products`}</Text>
                <Image
                  src={"images/img_angleleftbou_6.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7.5px] 2xl:mb-[7px] 3xl:mb-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.5px] 2xl:mt-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angleleftbOu"
                />
                <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.5px] 2xl:my-[8px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 text-left w-[auto]">{`All Products (1)`}</Text>
                <Row className="items-center justify-center lg:ml-[265px] xl:ml-[303px] ml-[341px] 3xl:ml-[409px] w-[54%]">
                  <div className="bg-transparent border-0 w-[19%] input-wrap">
                    <Image
                      src={"images/img_vector_115.svg"}
                      className="absolute z-[1] right-[22.799988px] bg-transparent border-0 lg:right-[17px] xl:right-[20px] 2xl:right-[22px] 3xl:right-[27px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <Input
                      className="bg-bluegray_900 placeholder:bg-transparent border border-gray_200 border-solid font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[51px] xl:pr-[59px] pr-[66.39998800000004px] 2xl:pr-[66px] 3xl:pr-[79px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                      name="Group464"
                      placeholder={`Add product`}
                    ></Input>
                  </div>
                  <div className="3xl:ml-[12px] bg-transparent border-0 lg:ml-[7px] ml-[10px] w-[21%] xl:ml-[8px] input-wrap">
                    <Image
                      src={"images/img_vector_116.svg"}
                      className="absolute z-[1] right-[22.799988px] bg-transparent border-0 lg:right-[17px] xl:right-[20px] 2xl:right-[22px] 3xl:right-[27px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <Input
                      className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[51px] xl:pr-[59px] pr-[66.39998800000004px] 2xl:pr-[66px] 3xl:pr-[79px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                      name="Group465"
                      placeholder={`Add categories`}
                    ></Input>
                  </div>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[24%]">
                    <Image
                      src={"images/img_webgridaltou_5.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="webgridaltOu"
                    />
                    <Text className="hover:bg-blue_800 cursor-pointer hover:font-bold font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left hover:text-white_A700 w-[auto]">{`Edit coumns`}</Text>
                    <Image
                      src={"images/img_angledownsoli_9.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownSoli"
                    />
                  </Row>
                  <Image
                    src={"images/img_frame420_3.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain rounded-radius4 w-[12%]"
                    alt="Frame420"
                  />
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[19%]">
                    <Image
                      src={"images/img_filteroutline_5.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="filterOutline"
                    />
                    <Text className="hover:bg-blue_800 cursor-pointer hover:font-bold font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left hover:text-white_A700 w-[auto]">{`Filters`}</Text>
                    <Text className="bg-blue_800 cursor-pointer hover:font-bold font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[1px] lg:my-[1px] my-[2px] xl:pl-[3px] pl-[4px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] lg:px-[3px] py-[0] rounded-radius8 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[auto]">{`01`}</Text>
                  </Row>
                </Row>
              </Row>
            </header>
            <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-x-[0] mx-[auto] top-[2%] w-[98%]">
              <Row className="absolute items-center justify-between pr-[1px] right-[0] w-[89%]">
                <Text className="border border-bluegray_201 border-solid font-normal leading-[normal] not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[38%]">{`Search by contact`}</Text>
                <Row className="font-inter items-center justify-between lg:ml-[336px] xl:ml-[384px] ml-[432px] 3xl:ml-[518px] w-[25%]">
                  <Image
                    src={"images/img_group5_8.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Group5"
                  />
                  <Image
                    src={"images/img_group4_8.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Group4"
                  />
                  <Image
                    src={"images/img_group3_11.svg"}
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
                  src={"images/img_usercircleout_6.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="usercircleOut"
                />
                <Text className="font-semibold mb-[1px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 text-left w-[auto]">{`Contacts`}</Text>
                <Image
                  src={"images/img_angledownoutl_9.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angledownOutl"
                />
              </Row>
            </Stack>
            <Column className="absolute top-[12%] w-[100%]">
              <Column className="w-[100%]">
                <Row className="items-center justify-evenly w-[100%]">
                  <Stack className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] w-[25%]">
                    <Stack className="absolute font-sourcesanspro lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] inset-[0] w-[100%]">
                      <Row className="absolute inset-[0] items-center justify-evenly w-[100%]">
                        <Image
                          src={"images/img_column_6.svg"}
                          className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] object-contain w-[20%]"
                          alt="Column"
                        />
                        <Column className="w-[80%]">
                          <div className="w-[100%] input-wrap">
                            <Image
                              src={"images/img_vector_117.svg"}
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
                        name="Group474"
                        label={`Name`}
                      ></CheckBox>
                    </Stack>
                    <CheckBox
                      className="absolute bottom-[25%] font-bold font-inter left-[7%] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 text-left tracking-ls1 w-[28%]"
                      inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                      name="Group475"
                      label={`Je`}
                    ></CheckBox>
                  </Stack>
                  <Column className="w-[9%]">
                    <div className="w-[100%] input-wrap">
                      <Image
                        src={"images/img_vector_118.svg"}
                        className="absolute z-[1] right-[45.98999px] lg:right-[35px] xl:right-[40px] 2xl:right-[46px] 3xl:right-[55px] my-[auto] inset-y-[0]"
                        alt="Vector"
                      />
                      <Button className="bg-gray_100 border border-gray_200 border-solid font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[111.99999px] 2xl:pr-[112px] 3xl:pr-[134px] lg:pr-[87px] xl:pr-[99px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[100%]">{`Active`}</Button>
                    </div>
                    <Input
                      className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[100%]"
                      name="Group445"
                      placeholder={`Yes`}
                    ></Input>
                  </Column>
                  <Column className="w-[20%]">
                    <div className="w-[100%] input-wrap">
                      <Image
                        src={"images/img_vector_119.svg"}
                        className="absolute z-[1] right-[87.98999px] lg:right-[68px] xl:right-[78px] 2xl:right-[88px] 3xl:right-[105px] my-[auto] inset-y-[0]"
                        alt="Vector"
                      />
                      <Button className="bg-gray_100 border border-gray_200 border-solid font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[152px] xl:pr-[174px] pr-[195.99999000000003px] 2xl:pr-[196px] 3xl:pr-[235px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[100%]">{`Base currency amount`}</Button>
                    </div>
                    <Input
                      className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                      name="Group447"
                      placeholder={`--`}
                    ></Input>
                  </Column>
                  <Column className="w-[11%]">
                    <Input
                      className="bg-gray_100 placeholder:bg-transparent border border-gray_200 border-solid font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left uppercase w-[100%]"
                      name="Group450"
                      placeholder={`category`}
                    ></Input>
                    <Input
                      className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                      name="Group449"
                      placeholder={`Hardware`}
                    ></Input>
                  </Column>
                  <Column className="w-[14%]">
                    <div className="w-[100%] input-wrap">
                      <Image
                        src={"images/img_vector_120.svg"}
                        className="absolute z-[1] left-[94.00px] lg:left-[73px] xl:left-[83px] 2xl:left-[94px] 3xl:left-[112px] my-[auto] inset-y-[0]"
                        alt="Vector"
                      />
                      <Button className="bg-gray_100 border border-gray_200 border-solid font-semibold pb-[19.49px] lg:pl-[154px] xl:pl-[176px] pl-[198.01px] 2xl:pl-[198px] 3xl:pl-[237px] pt-[19.5px] lg:py-[15px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[100%]">{`created at`}</Button>
                    </div>
                    <Input
                      className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                      name="Group451"
                      placeholder={`A few seconds ago`}
                    ></Input>
                  </Column>
                  <Column className="w-[16%]">
                    <div className="w-[100%] input-wrap">
                      <Image
                        src={"images/img_vector_121.svg"}
                        className="absolute z-[1] left-[94.00px] lg:left-[73px] xl:left-[83px] 2xl:left-[94px] 3xl:left-[112px] my-[auto] inset-y-[0]"
                        alt="Vector"
                      />
                      <Button className="bg-gray_100 border border-gray_200 border-solid font-semibold pb-[19.49px] lg:pl-[154px] xl:pl-[176px] pl-[198.01px] 2xl:pl-[198px] 3xl:pl-[237px] pt-[19.5px] lg:py-[15px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[100%]">{`created by`}</Button>
                    </div>
                    <Input
                      className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                      name="Group453"
                      placeholder={`Jemee Tala`}
                    ></Input>
                  </Column>
                  <Image
                    src={"images/img_column_7.svg"}
                    className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] object-contain w-[4%]"
                    alt="Column"
                  />
                </Row>
              </Column>
              <Text className="bg-white_A700 border border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[20px] leading-[23.00px] 2xl:leading-[23px] 3xl:leading-[27px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_700 text-left w-[100%]">{`Showing 1-3 of 3`}</Text>
            </Column>
            <Column className="absolute bg-white_A700 h-[max-content] inset-y-[0] items-start justify-start my-[auto] lg:pb-[410px] xl:pb-[469px] pb-[528px] 3xl:pb-[633px] right-[0] w-[38%]">
              <Column className="items-start w-[100%]">
                <div className="bg-transparent border-0 w-[100%] input-wrap">
                  <Image
                    src={"images/img_vector_122.svg"}
                    className="absolute z-[1] h-[16.01px] right-[20px] bg-transparent border-0 lg:h-[13px] lg:right-[15px] xl:h-[15px] xl:right-[17px] 2xl:h-[17px] 3xl:h-[20px] 3xl:right-[24px] my-[auto] inset-y-[0]"
                    alt="Vector"
                  />
                  <Input
                    className="bg-gray_100 placeholder:bg-transparent border border-indigo_50 border-solid font-normal not-italic lg:pb-[15px] xl:pb-[17px] pb-[19.5px] 2xl:pb-[19px] 3xl:pb-[23px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[56px] xl:pr-[64px] pr-[72.02px] 2xl:pr-[72px] 3xl:pr-[86px] lg:pt-[14px] xl:pt-[16px] pt-[18.5px] 2xl:pt-[18px] 3xl:pt-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[100%]"
                    name="Group463"
                    placeholder={`Add Product`}
                  ></Input>
                </div>
                <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">
                  <span className="text-black_900 font-sourcesanspro">
                    <>{`Name `}</>
                  </span>
                  <span className="text-red_700 font-sourcesanspro">
                    <>{`*`}</>
                  </span>
                </Text>
              </Column>
              <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-between lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[3px] lg:mt-[3px] mt-[4px] xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[9px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 w-[94%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 text-left w-[auto]">{`Enter title of task`}</Text>
                <Image
                  src={"images/img_multiplysolid_1.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[264px] xl:ml-[302px] ml-[340px] 3xl:ml-[408px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="multiplySolid"
                />
              </Row>
              <Column className="items-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] w-[100%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">{`Category`}</Text>
                <div className="bg-transparent border-0 lg:mt-[3px] mt-[4px] w-[94%] xl:mt-[3px] input-wrap">
                  <Image
                    src={"images/img_vector_123.svg"}
                    className="absolute z-[1] right-[21.659912px] bg-transparent border-0 lg:right-[16px] xl:right-[19px] 2xl:right-[21px] 3xl:right-[26px] my-[auto] inset-y-[0]"
                    alt="Vector"
                  />
                  <Input
                    className="placeholder:bg-transparent bg-transparent border border-gray_200 border-solid font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[47px] xl:pr-[53px] pr-[60.65991199999993px] 2xl:pr-[60px] 3xl:pr-[72px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                    name="Group471"
                    placeholder={`Choose value`}
                  ></Input>
                </div>
                <Row className="items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[22%]">
                  <Image
                    src={"images/img_checkbox_3.svg"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Checkbox"
                  />
                  <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_700 text-left w-[auto]">{`Add outcome`}</Text>
                </Row>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">{`SKU Number`}</Text>
                <Input
                  className="placeholder:bg-transparent bg-transparent border border-gray_200 border-solid font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[94%]"
                  name="Group457"
                  placeholder={`Enter value`}
                ></Input>
              </Column>
              <Column className="items-start justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[94%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">{`Owner`}</Text>
                <Column className="xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]">
                  <Row className="border border-gray_200 border-solid items-center justify-between lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[100%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`Jemee Tala`}</Text>
                    <Image
                      src={"images/img_frame466_1.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[262px] xl:ml-[299px] ml-[337px] 3xl:ml-[404px] my-[1px] object-contain w-[10%]"
                      alt="Frame466"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="items-start justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[94%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">{`Valid till`}</Text>
                <div className="lg:mt-[3px] mt-[4px] w-[100%] xl:mt-[3px] input-wrap">
                  <Image
                    src={"images/img_vector_124.svg"}
                    className="absolute z-[1] h-[16.67px] right-[17.659912px] lg:h-[13px] lg:right-[13px] xl:h-[15px] xl:right-[15px] 2xl:h-[17px] 2xl:right-[17px] 3xl:h-[21px] 3xl:right-[21px] my-[auto] inset-y-[0]"
                    alt="Vector"
                  />
                  <Button className="border border-gray_200 border-solid font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[53px] xl:pr-[61px] pr-[68.65991199999993px] 2xl:pr-[68px] 3xl:pr-[82px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 text-left w-[100%]">{`Choose date`}</Button>
                </div>
              </Column>
            </Column>
            <Row className="absolute bg-gray_100 border border-indigo_50 border-solid bottom-[0] items-center justify-start lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] right-[0] w-[38%]">
              <div className="bg-transparent border-0 w-[31%] input-wrap">
                <Image
                  src={"images/img_vector_125.svg"}
                  className="absolute z-[1] h-[20px] left-[18.00px] bg-transparent border-0 lg:h-[16px] lg:left-[14px] xl:h-[18px] xl:left-[16px] 2xl:h-[21px] 2xl:left-[18px] 3xl:h-[25px] 3xl:left-[21px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic lg:pl-[43px] xl:pl-[49px] pl-[56.00px] 2xl:pl-[56px] 3xl:pl-[67px] lg:py-[11px] xl:py-[12px] py-[14.5px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                  name="Group473"
                  placeholder={`Customize fields`}
                ></Input>
              </div>
              <Button className="bg-white_A700 border border-gray_200 border-solid font-normal lg:ml-[140px] xl:ml-[160px] ml-[180px] 3xl:ml-[216px] my-[1px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-center w-[14%]">{`Cancel`}</Button>
              <Button className="bg-bluegray_900 border border-gray_200 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[12%]">{`Save`}</Button>
            </Row>
          </Stack>
        </Row>
      </Column>
    </>
  );
};

export default AddProductsPage;
