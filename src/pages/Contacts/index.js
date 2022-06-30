import React from "react";

import { postFilterize } from "service/api";
import { Column, Row, Stack, Image, Text, Input, List } from "components";

const ContactsPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
    callApi1();
  }, []);
  const [apiData1, setapiData1] = React.useState();

  function callApi() {
    const req = {};
    postFilterize(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi1() {
    const req = {};
    postFilterize(req)
      .then((res) => {
        setapiData1(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Column className="bg-bluegray_51 font-sourcesanspro mx-[auto] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <aside className="bg-bluegray_900 h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
            <Stack className="">
              <Image
                src={"images/img_group92_2.svg"}
                className="absolute lg:h-[396px] xl:h-[452px] h-[508px] 2xl:h-[509px] 3xl:h-[610px] inset-x-[0] mx-[auto] object-contain top-[0] w-[51%]"
                alt="Group92"
              />
            </Stack>
          </aside>
          <Column className="items-center justify-start lg:mb-[583px] xl:mb-[667px] mb-[750.47px] 2xl:mb-[750px] 3xl:mb-[901px] w-[93%]">
            <header className="w-[100%]">
              <Row className="bg-white_A700 border border-indigo_50 border-solid items-center justify-between lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[44%]">
                  <Text className="absolute border border-bluegray_201 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] right-[0] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[76%]">{`Search by contact`}</Text>
                  <Row className="absolute border border-bluegray_201 border-solid items-center justify-start left-[0] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[24%]">
                    <Image
                      src={"images/img_usercircleout_3.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="usercircleOut"
                    />
                    <Text className="font-semibold mb-[1px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 text-left w-[auto]">{`Contacts`}</Text>
                    <Image
                      src={"images/img_angledownoutl_6.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="angledownOutl"
                    />
                  </Row>
                </Stack>
                <Row className="font-inter items-center justify-between lg:ml-[336px] xl:ml-[384px] ml-[432px] 3xl:ml-[518px] w-[22%]">
                  <Image
                    src={"images/img_group5_5.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Group5"
                  />
                  <Image
                    src={"images/img_group4_5.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Group4"
                  />
                  <Image
                    src={"images/img_group3_8.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Group3"
                  />
                  <Column className="bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]">
                    <Text className="cursor-pointer hover:font-bold font-bold mx-[auto] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 tracking-ls1 w-[auto]">{`1`}</Text>
                  </Column>
                  <Column className="bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] pb-[9px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                    <Text className="cursor-pointer hover:font-bold font-bold mx-[auto] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-amber_500 text-left hover:text-white_A700 tracking-ls1 w-[auto]">{`S`}</Text>
                  </Column>
                </Row>
              </Row>
            </header>
            <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-end lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] w-[100%]">
              <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Contacts`}</Text>
              <Row className="items-start justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] w-[19%]">
                <Image
                  src={"images/img_angleleftbou_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angleleftbOu"
                />
                <Text className="font-normal mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 text-left w-[auto]">{`My Contacts (10)`}</Text>
                <Text className="font-normal mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 text-left w-[auto]">{`Save view as`}</Text>
              </Row>
              <Row className="items-center justify-center lg:ml-[409px] xl:ml-[467px] ml-[526px] 3xl:ml-[631px] w-[33%]">
                <div className="bg-transparent border-0 w-[33%] input-wrap">
                  <Image
                    src={"images/img_vector_102.svg"}
                    className="absolute z-[1] right-[14.799927px] bg-transparent border-0 lg:right-[11px] xl:right-[13px] 2xl:right-[14px] 3xl:right-[17px] my-[auto] inset-y-[0]"
                    alt="Vector"
                  />
                  <Input
                    className="bg-bluegray_900 placeholder:bg-transparent border border-gray_200 border-solid font-normal not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:pr-[39px] xl:pr-[44px] pr-[50.39992700000005px] 2xl:pr-[50px] 3xl:pr-[60px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                    name="Group361"
                    placeholder={`Import Contatcts`}
                  ></Input>
                </div>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[35%]">
                  <Image
                    src={"images/img_webgridaltou_3.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="webgridaltOu"
                  />
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`Edit coumns`}</Text>
                  <Image
                    src={"images/img_angledownsoli_3.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="angledownSoli"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-evenly ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[27%]">
                  <Image
                    src={"images/img_filteroutline_3.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="filterOutline"
                  />
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`Filters`}</Text>
                  <Text className="bg-blue_800 font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[1px] lg:my-[1px] my-[2px] xl:pl-[3px] pl-[4px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] lg:px-[3px] py-[0] rounded-radius8 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[auto]">{`01`}</Text>
                </Row>
              </Row>
            </Row>
            <Row className="items-center justify-start xl:mt-[2px] lg:mt-[2px] mt-[3px] mx-[auto] w-[91%]">
              <Input
                className="bg-gray_100 placeholder:bg-transparent border border-gray_200 border-solid font-semibold pb-[15.92px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pt-[15.93px] lg:py-[12px] xl:py-[14px] 2xl:py-[15px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left uppercase w-[21%]"
                name="Group352"
                placeholder={`Name`}
              ></Input>
              <div className="bg-transparent border-0 w-[10%] input-wrap">
                <Image
                  src={"images/img_vector_103.svg"}
                  className="absolute z-[1] h-[16.67px] left-[13.67px] bg-transparent border-0 lg:h-[13px] lg:left-[10px] xl:h-[15px] xl:left-[12px] 2xl:h-[17px] 2xl:left-[13px] 3xl:h-[21px] 3xl:left-[16px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="bg-gray_100 placeholder:bg-transparent border border-gray_200 border-solid font-semibold lg:pl-[34px] xl:pl-[39px] pl-[44.01px] 2xl:pl-[44px] 3xl:pl-[52px] lg:py-[14px] xl:py-[16px] py-[18.59px] 2xl:py-[18px] 3xl:py-[22px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left uppercase w-[100%]"
                  name="Group362"
                  placeholder={`Score`}
                ></Input>
              </div>
              <Input
                className="bg-gray_100 placeholder:bg-transparent border border-gray_200 border-solid font-semibold pb-[15.92px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pt-[15.93px] lg:py-[12px] xl:py-[14px] 2xl:py-[15px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left uppercase w-[15%]"
                name="Group350"
                placeholder={`Open deals amou...`}
              ></Input>
              <Input
                className="bg-gray_100 placeholder:bg-transparent border border-gray_200 border-solid font-semibold pb-[15.92px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pt-[15.93px] lg:py-[12px] xl:py-[14px] 2xl:py-[15px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left uppercase w-[15%]"
                name="Group349"
                placeholder={`last contacted ti...`}
              ></Input>
              <Input
                className="bg-gray_100 placeholder:bg-transparent border border-gray_200 border-solid font-semibold pb-[15.92px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pt-[15.93px] lg:py-[12px] xl:py-[14px] 2xl:py-[15px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left uppercase w-[15%]"
                name="Group348"
                placeholder={`sales owner`}
              ></Input>
              <Input
                className="bg-gray_100 placeholder:bg-transparent border border-gray_200 border-solid font-semibold pb-[15.92px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pt-[15.93px] lg:py-[12px] xl:py-[14px] 2xl:py-[15px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left uppercase w-[15%]"
                name="Group347"
                placeholder={`Emails`}
              ></Input>
              <Input
                className="bg-gray_100 placeholder:bg-transparent border border-gray_200 border-solid font-semibold pb-[15.92px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pt-[15.93px] lg:py-[12px] xl:py-[14px] 2xl:py-[15px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left uppercase w-[11%]"
                name="Group346"
                placeholder={`Work`}
              ></Input>
            </Row>
            <List
              className="gap-[0] grid grid-cols-7 min-h-[auto] mx-[auto] w-[91%]"
              orientation="horizontal"
            >
              {apiData?.contacts?.map((apiDataEle) => {
                return (
                  <Row className="bg-white_A700 border border-gray_200 border-solid font-inter items-center justify-start xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[19px] xl:py-[22px] py-[24.84px] 2xl:py-[24px] 3xl:py-[29px] w-[100%]">
                    <Column className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] items-center my-[1px] pb-[9.8px] pl-[14.95px] 2xl:pl-[14px] 3xl:pl-[17px] pr-[15.05px] 2xl:pr-[15px] 3xl:pr-[18px] pt-[9.2px] lg:px-[11px] xl:px-[13px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]">
                      <Text className="font-bold mx-[auto] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 text-left tracking-ls1 w-[auto]">{`R`}</Text>
                    </Column>
                    <Column className="font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] my-[0] w-[40%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">
                        {apiData1?.contacts?.display_name}
                      </Text>
                      <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 text-left w-[auto]">
                        {apiDataEle?.display_name}
                      </Text>
                    </Column>
                  </Row>
                );
              })}
            </List>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ContactsPage;
