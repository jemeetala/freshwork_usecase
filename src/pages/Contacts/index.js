import React from "react";

import { postFilterize } from "service/api";
import {
  Column,
  Row,
  Stack,
  Image,
  Text,
  Input,
  Button,
  CheckBox,
  List,
} from "components";

const ContactsPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

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

  return (
    <>
      <Column className="bg-bluegray_51 font-sourcesanspro mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="bg-bluegray_900 h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] lg:mb-[24px] xl:mb-[27px] mb-[31px] 3xl:mb-[37px] lg:pb-[382px] xl:pb-[437px] pb-[492px] 3xl:pb-[590px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
            <Stack className="">
              <Image
                src={"images/img_group92_2.svg"}
                className="absolute lg:h-[396px] xl:h-[452px] h-[508px] 2xl:h-[509px] 3xl:h-[610px] inset-x-[0] mx-[auto] object-contain top-[0] w-[51%]"
                alt="Group92"
              />
            </Stack>
          </aside>
          <Column className="items-center w-[93%]">
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
                    name="Import Contatct"
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
            <Row className="items-center justify-evenly w-[100%]">
              <Stack className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] w-[24%]">
                <Row className="absolute inset-[0] items-center justify-evenly w-[100%]">
                  <Image
                    src={"images/img_head_1.svg"}
                    className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] object-contain w-[20%]"
                    alt="Head"
                  />
                  <div className="w-[80%] input-wrap">
                    <Image
                      src={"images/img_vector_103.svg"}
                      className="absolute z-[1] left-[56.00px] lg:left-[43px] xl:left-[49px] 2xl:left-[56px] 3xl:left-[67px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <Button className="bg-gray_100 border border-gray_200 border-solid pb-[15.49px] xl:pl-[108px] pl-[122.01px] 2xl:pl-[122px] 3xl:pl-[146px] lg:pl-[94px] pt-[15.5px] lg:py-[12px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
                      {""}
                    </Button>
                  </div>
                </Row>
                <CheckBox
                  className="absolute font-semibold inset-y-[0] left-[7%] my-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[28%]"
                  inputClassName="2xl:h-[23px] 3xl:h-[27px] 3xl:w-[26px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[22px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[22px] xl:h-[20px] xl:w-[19px] mr-[5px]"
                  name="Group433"
                  label={`Name`}
                ></CheckBox>
              </Stack>
              <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[9%]">
                <Image
                  src={"images/img_infocircleout_2.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="infocircleOut"
                />
                <Text className="font-semibold xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[auto]">{`Score`}</Text>
                <Image
                  src={"images/img_sortoutline_1.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="sortOutline"
                />
              </Row>
              <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[14px] xl:pr-[17px] pr-[19.24px] 2xl:pr-[19px] 3xl:pr-[23px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[13%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[auto]">{`Open deals amou...`}</Text>
                <Image
                  src={"images/img_vector_104.svg"}
                  className="lg:h-[12px] xl:h-[14px] h-[15.01px] 2xl:h-[16px] 3xl:h-[19px] mb-[3.49px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] mt-[3.5px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[6%]"
                  alt="Vector"
                />
              </Row>
              <Row className="bg-gray_100 border border-gray_200 border-solid items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[11px] xl:pr-[12px] pr-[14.24px] 2xl:pr-[14px] 3xl:pr-[17px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[13%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[auto]">{`last contacted ti...`}</Text>
                <Image
                  src={"images/img_vector_105.svg"}
                  className="lg:h-[12px] xl:h-[14px] h-[15.01px] 2xl:h-[16px] 3xl:h-[19px] mb-[3.49px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] mt-[3.5px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[6%]"
                  alt="Vector"
                />
              </Row>
              <div className="w-[13%] input-wrap">
                <Image
                  src={"images/img_vector_106.svg"}
                  className="absolute z-[1] right-[59.23999px] lg:right-[46px] xl:right-[52px] 2xl:right-[59px] 3xl:right-[71px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Button className="bg-gray_100 border border-gray_200 border-solid font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[107px] xl:pr-[123px] pr-[138.49999px] 2xl:pr-[138px] 3xl:pr-[166px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[100%]">{`sales owner`}</Button>
              </div>
              <div className="w-[13%] input-wrap">
                <Image
                  src={"images/img_vector_107.svg"}
                  className="absolute z-[1] left-[66.00px] lg:left-[51px] xl:left-[58px] 2xl:left-[66px] 3xl:left-[79px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Button className="bg-gray_100 border border-gray_200 border-solid font-semibold pb-[19.49px] lg:pl-[110px] xl:pl-[126px] pl-[142.01px] 2xl:pl-[142px] 3xl:pl-[170px] pt-[19.5px] lg:py-[15px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[100%]">{`Emails`}</Button>
              </div>
              <div className="w-[10%] input-wrap">
                <Image
                  src={"images/img_vector_108.svg"}
                  className="absolute z-[1] left-[59.00px] lg:left-[45px] xl:left-[52px] 2xl:left-[59px] 3xl:left-[70px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Button className="bg-gray_100 border border-gray_200 border-solid font-semibold pb-[19.49px] xl:pl-[113px] pl-[128.01px] 2xl:pl-[128px] 3xl:pl-[153px] lg:pl-[99px] pt-[19.5px] lg:py-[15px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left uppercase w-[100%]">{`Work`}</Button>
              </div>
              <div className="bg-gray_100 border border-gray_200 border-solid lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] w-[4%]"></div>
            </Row>
            <List
              className="gap-[0] grid grid-cols-8 min-h-[auto] w-[100%]"
              orientation="horizontal"
            >
              {apiData?.contacts?.map((apiDataEle) => {
                return (
                  <Stack className="font-inter 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] w-[100%]">
                    <Stack className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] w-[33%]">
                      <Image
                        src={"images/img_row_18.svg"}
                        className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] object-contain w-[61%]"
                        alt="Row"
                      />
                      <CheckBox
                        className="absolute font-bold inset-y-[0] my-[auto] right-[0] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 text-left tracking-ls1 w-[79%]"
                        inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                        name="Group434"
                        label={`R`}
                      ></CheckBox>
                    </Stack>
                    <Row className="absolute bg-white_A700 border border-gray_200 border-solid font-sourcesanspro items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] right-[0] w-[80%]">
                      <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                      <Column className="lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[40%]">
                        <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">
                          {apiDataEle?.display_name}
                        </Text>
                        <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 text-left w-[auto]">{`Lead`}</Text>
                      </Column>
                    </Row>
                  </Stack>
                );
              })}
            </List>
            <Row className="items-center justify-evenly w-[100%]">
              <Stack className="font-inter 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] w-[24%]">
                <Stack className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] w-[33%]">
                  <Image
                    src={"images/img_row_20.svg"}
                    className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] object-contain w-[61%]"
                    alt="Row"
                  />
                  <CheckBox
                    className="absolute font-bold inset-y-[0] my-[auto] right-[0] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 text-left tracking-ls1 w-[79%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group435"
                    label={`R`}
                  ></CheckBox>
                </Stack>
                <Row className="absolute bg-white_A700 border border-gray_200 border-solid font-sourcesanspro items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[20px] xl:py-[23px] py-[26px] 3xl:py-[31px] right-[0] w-[80%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Rajavi Tala`}</Text>
                </Row>
              </Stack>
              <div className="bg-transparent border-0 w-[9%] input-wrap">
                <Image
                  src={"images/img_vector_110.svg"}
                  className="absolute z-[1] left-[39.00px] bg-transparent border-0 lg:left-[30px] xl:left-[34px] 2xl:left-[39px] 3xl:left-[46px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro pb-[46px] 3xl:pl-[108px] lg:pl-[70px] xl:pl-[80px] pl-[90.00px] 2xl:pl-[90px] pt-[45.9px] 2xl:pt-[45px] lg:py-[35px] xl:py-[40px] 3xl:py-[55px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[100%]"
                  name="20"
                  placeholder={`20`}
                ></Input>
              </div>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[13%]"
                name="$0"
                placeholder={`$0`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[13%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[13%]"
                name="Jemee Tala"
                placeholder={`Jemee Tala`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 text-left w-[13%]"
                name="abc@gmail.com"
                placeholder={`abc@gmail.com`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[10%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Image
                src={"images/img_row_21.svg"}
                className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] object-contain w-[4%]"
                alt="Row"
              />
            </Row>
            <Row className="items-center justify-evenly w-[100%]">
              <Stack className="font-inter 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] w-[24%]">
                <Stack className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] w-[33%]">
                  <Image
                    src={"images/img_row_22.svg"}
                    className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] object-contain w-[62%]"
                    alt="Row"
                  />
                  <CheckBox
                    className="absolute font-bold inset-y-[0] my-[auto] right-[0] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 text-left tracking-ls1 w-[78%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group436"
                    label={`J`}
                  ></CheckBox>
                </Stack>
                <Row className="absolute bg-white_A700 border border-gray_200 border-solid font-sourcesanspro items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[20px] xl:py-[23px] py-[26px] 3xl:py-[31px] right-[0] w-[80%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Jayesh Tala`}</Text>
                </Row>
              </Stack>
              <div className="bg-transparent border-0 w-[9%] input-wrap">
                <Image
                  src={"images/img_vector_111.svg"}
                  className="absolute z-[1] left-[37.00px] bg-transparent border-0 lg:left-[28px] xl:left-[32px] 2xl:left-[37px] 3xl:left-[44px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro pb-[47px] 3xl:pl-[103px] lg:pl-[66px] xl:pl-[76px] pl-[86.00px] 2xl:pl-[86px] pt-[46.9px] 2xl:pt-[46px] lg:py-[36px] xl:py-[41px] 3xl:py-[56px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[100%]"
                  name="21"
                  placeholder={`21`}
                ></Input>
              </div>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[13%]"
                name="$0"
                placeholder={`$0`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[13%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[13%]"
                name="Jemee Tala"
                placeholder={`Jemee Tala`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 text-left w-[13%]"
                name="abc@gmail.com"
                placeholder={`abc@gmail.com`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[10%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Image
                src={"images/img_row_23.svg"}
                className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] object-contain w-[4%]"
                alt="Row"
              />
            </Row>
            <Row className="items-center justify-evenly w-[100%]">
              <Image
                src={"images/img_row_24.svg"}
                className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] object-contain w-[5%]"
                alt="Row"
              />
              <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[33px] xl:pr-[38px] pr-[43px] 3xl:pr-[51px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[19%]">
                <Image
                  src={"images/img_ellipse10_2.png"}
                  className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] object-contain rounded-radius50 w-[auto]"
                  alt="Ellipse10"
                />
                <Column className="items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[58%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Jane Sampleton`}</Text>
                  <Text className="font-semibold xl:mt-[3px] lg:mt-[3px] mt-[4px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left w-[auto]">{`Sales Manager`}</Text>
                  <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 text-left w-[auto]">{`Widgetz.io`}</Text>
                </Column>
              </Row>
              <div className="bg-transparent border-0 w-[9%] input-wrap">
                <Image
                  src={"images/img_vector_112.svg"}
                  className="absolute z-[1] left-[30.00px] bg-transparent border-0 lg:left-[23px] xl:left-[26px] 2xl:left-[30px] 3xl:left-[36px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold pb-[47px] lg:pl-[56px] xl:pl-[64px] pl-[72.00px] 2xl:pl-[72px] 3xl:pl-[86px] pt-[46.9px] 2xl:pt-[46px] lg:py-[36px] xl:py-[41px] 3xl:py-[56px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[100%]"
                  name="0"
                  placeholder={`0`}
                ></Input>
              </div>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[13%]"
                name="$7000"
                placeholder={`$7000`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[13%]"
                name="13 days ago"
                placeholder={`13 days ago`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[13%]"
                name="Jemee Tala"
                placeholder={`Jemee Tala`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 text-left w-[13%]"
                name="abc@gmail.com"
                placeholder={`abc@gmail.com`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 text-left w-[10%]"
                name="1234567890"
                placeholder={`1234567890`}
              ></Input>
              <Image
                src={"images/img_row_25.svg"}
                className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] object-contain w-[4%]"
                alt="Row"
              />
            </Row>
            <Row className="items-center justify-evenly w-[100%]">
              <Stack className="font-inter 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] w-[24%]">
                <Stack className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] w-[33%]">
                  <Image
                    src={"images/img_row_26.svg"}
                    className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] object-contain w-[61%]"
                    alt="Row"
                  />
                  <CheckBox
                    className="absolute font-bold inset-y-[0] my-[auto] right-[0] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 text-left tracking-ls1 w-[79%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group437"
                    label={`R`}
                  ></CheckBox>
                </Stack>
                <Row className="absolute bg-white_A700 border border-gray_200 border-solid font-sourcesanspro items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] right-[0] w-[80%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Column className="lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[40%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Riya D`}</Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 text-left w-[auto]">{`Lead`}</Text>
                  </Column>
                </Row>
              </Stack>
              <div className="bg-transparent border-0 w-[9%] input-wrap">
                <Image
                  src={"images/img_vector_113.svg"}
                  className="absolute z-[1] left-[37.00px] bg-transparent border-0 lg:left-[28px] xl:left-[32px] 2xl:left-[37px] 3xl:left-[44px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro pb-[47px] 3xl:pl-[103px] lg:pl-[66px] xl:pl-[76px] pl-[86.00px] 2xl:pl-[86px] pt-[46.9px] 2xl:pt-[46px] lg:py-[36px] xl:py-[41px] 3xl:py-[56px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[100%]"
                  name="21"
                  placeholder={`21`}
                ></Input>
              </div>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[13%]"
                name="$0"
                placeholder={`$0`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[13%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[13%]"
                name="Jemee Tala"
                placeholder={`Jemee Tala`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 text-left w-[13%]"
                name="abc@gmail.com"
                placeholder={`abc@gmail.com`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[10%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Image
                src={"images/img_row_27.svg"}
                className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] object-contain w-[4%]"
                alt="Row"
              />
            </Row>
            <Row className="items-center justify-evenly w-[100%]">
              <Stack className="font-inter 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] w-[24%]">
                <Stack className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] w-[33%]">
                  <Image
                    src={"images/img_row_28.svg"}
                    className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] object-contain w-[61%]"
                    alt="Row"
                  />
                  <CheckBox
                    className="absolute font-bold inset-y-[0] my-[auto] right-[0] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 text-left tracking-ls1 w-[79%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group438"
                    label={`R`}
                  ></CheckBox>
                </Stack>
                <Row className="absolute bg-white_A700 border border-gray_200 border-solid font-sourcesanspro items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] right-[0] w-[80%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Column className="lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[40%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Riya D`}</Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 text-left w-[auto]">{`Lead`}</Text>
                  </Column>
                </Row>
              </Stack>
              <div className="bg-transparent border-0 w-[9%] input-wrap">
                <Image
                  src={"images/img_vector_114.svg"}
                  className="absolute z-[1] left-[37.00px] bg-transparent border-0 lg:left-[28px] xl:left-[32px] 2xl:left-[37px] 3xl:left-[44px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro pb-[47px] 3xl:pl-[103px] lg:pl-[66px] xl:pl-[76px] pl-[86.00px] 2xl:pl-[86px] pt-[46.9px] 2xl:pt-[46px] lg:py-[36px] xl:py-[41px] 3xl:py-[56px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[100%]"
                  name="22"
                  placeholder={`22`}
                ></Input>
              </div>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[13%]"
                name="$0"
                placeholder={`$0`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[13%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[13%]"
                name="Jemee Tala"
                placeholder={`Jemee Tala`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 text-left w-[13%]"
                name="abc@gmail.com"
                placeholder={`abc@gmail.com`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[10%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Image
                src={"images/img_row_29.svg"}
                className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] object-contain w-[4%]"
                alt="Row"
              />
            </Row>
            <Row className="items-center justify-evenly w-[100%]">
              <Stack className="font-inter 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] w-[24%]">
                <Stack className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] w-[33%]">
                  <Image
                    src={"images/img_row_30.svg"}
                    className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] object-contain w-[61%]"
                    alt="Row"
                  />
                  <CheckBox
                    className="absolute font-bold inset-y-[0] my-[auto] right-[0] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 text-left tracking-ls1 w-[79%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group439"
                    label={`R`}
                  ></CheckBox>
                </Stack>
                <Row className="absolute bg-white_A700 border border-gray_200 border-solid font-sourcesanspro items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] right-[0] w-[80%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Column className="lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[40%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Riya D`}</Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 text-left w-[auto]">{`Lead`}</Text>
                  </Column>
                </Row>
              </Stack>
              <div className="bg-transparent border-0 w-[9%] input-wrap">
                <Image
                  src={"images/img_vector_115.svg"}
                  className="absolute z-[1] left-[37.00px] bg-transparent border-0 lg:left-[28px] xl:left-[32px] 2xl:left-[37px] 3xl:left-[44px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro pb-[47px] 3xl:pl-[103px] lg:pl-[66px] xl:pl-[76px] pl-[86.00px] 2xl:pl-[86px] pt-[46.9px] 2xl:pt-[46px] lg:py-[36px] xl:py-[41px] 3xl:py-[56px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[100%]"
                  name="20"
                  placeholder={`20`}
                ></Input>
              </div>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[13%]"
                name="$0"
                placeholder={`$0`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[13%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[13%]"
                name="Jemee Tala"
                placeholder={`Jemee Tala`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 text-left w-[13%]"
                name="abc@gmail.com"
                placeholder={`abc@gmail.com`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[10%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Image
                src={"images/img_row_31.svg"}
                className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] object-contain w-[4%]"
                alt="Row"
              />
            </Row>
            <Row className="items-center justify-evenly w-[100%]">
              <Stack className="font-inter 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] w-[24%]">
                <Stack className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] w-[33%]">
                  <Image
                    src={"images/img_row_32.svg"}
                    className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] object-contain w-[61%]"
                    alt="Row"
                  />
                  <CheckBox
                    className="absolute font-bold inset-y-[0] my-[auto] right-[0] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 text-left tracking-ls1 w-[79%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group440"
                    label={`R`}
                  ></CheckBox>
                </Stack>
                <Row className="absolute bg-white_A700 border border-gray_200 border-solid font-sourcesanspro items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] right-[0] w-[80%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Column className="lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[40%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Riya D`}</Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 text-left w-[auto]">{`Lead`}</Text>
                  </Column>
                </Row>
              </Stack>
              <div className="bg-transparent border-0 w-[9%] input-wrap">
                <Image
                  src={"images/img_vector_116.svg"}
                  className="absolute z-[1] left-[37.00px] bg-transparent border-0 lg:left-[28px] xl:left-[32px] 2xl:left-[37px] 3xl:left-[44px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro pb-[47px] 3xl:pl-[103px] lg:pl-[66px] xl:pl-[76px] pl-[86.00px] 2xl:pl-[86px] pt-[46.9px] 2xl:pt-[46px] lg:py-[36px] xl:py-[41px] 3xl:py-[56px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[100%]"
                  name="18"
                  placeholder={`18`}
                ></Input>
              </div>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[13%]"
                name="$0"
                placeholder={`$0`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[13%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[13%]"
                name="Jemee Tala"
                placeholder={`Jemee Tala`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 text-left w-[13%]"
                name="abc@gmail.com"
                placeholder={`abc@gmail.com`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[10%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Image
                src={"images/img_row_33.svg"}
                className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] object-contain w-[4%]"
                alt="Row"
              />
            </Row>
            <Row className="items-center justify-evenly w-[100%]">
              <Stack className="font-inter 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] w-[24%]">
                <Stack className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] w-[33%]">
                  <Image
                    src={"images/img_row_34.svg"}
                    className="absolute 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] left-[0] object-contain w-[61%]"
                    alt="Row"
                  />
                  <CheckBox
                    className="absolute font-bold inset-y-[0] my-[auto] right-[0] lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 text-left tracking-ls1 w-[79%]"
                    inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] bg-white_A700 border-bluegray_300 border-bw083 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius25 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                    name="Group441"
                    label={`R`}
                  ></CheckBox>
                </Stack>
                <Row className="absolute bg-white_A700 border border-gray_200 border-solid font-sourcesanspro items-center justify-center xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] 3xl:pr-[109px] lg:pr-[71px] xl:pr-[81px] pr-[91.5px] 2xl:pr-[91px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] right-[0] w-[80%]">
                  <div className="bg-amber_100 lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] my-[1px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"></div>
                  <Column className="lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[40%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-left w-[auto]">{`Riya D`}</Text>
                    <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 text-left w-[auto]">{`Lead`}</Text>
                  </Column>
                </Row>
              </Stack>
              <div className="bg-transparent border-0 w-[9%] input-wrap">
                <Image
                  src={"images/img_vector_117.svg"}
                  className="absolute z-[1] left-[37.00px] bg-transparent border-0 lg:left-[28px] xl:left-[32px] 2xl:left-[37px] 3xl:left-[44px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro pb-[47px] 3xl:pl-[103px] lg:pl-[66px] xl:pl-[76px] pl-[86.00px] 2xl:pl-[86px] pt-[46.9px] 2xl:pt-[46px] lg:py-[36px] xl:py-[41px] 3xl:py-[56px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[100%]"
                  name="18"
                  placeholder={`18`}
                ></Input>
              </div>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-semibold font-sourcesanspro xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_901 text-bluegray_901 text-left w-[13%]"
                name="$0"
                placeholder={`$0`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[13%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[13%]"
                name="Jemee Tala"
                placeholder={`Jemee Tala`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-blue_800 text-blue_800 text-left w-[13%]"
                name="abc@gmail.com"
                placeholder={`abc@gmail.com`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[30px] xl:py-[34px] py-[39px] 3xl:py-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[10%]"
                name="Not Available"
                placeholder={`Not Available`}
              ></Input>
              <Image
                src={"images/img_row_35.svg"}
                className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] object-contain w-[4%]"
                alt="Row"
              />
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ContactsPage;
