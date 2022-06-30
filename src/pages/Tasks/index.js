import React from "react";

import {
  Row,
  Stack,
  Image,
  Column,
  Text,
  Button,
  Line,
  List,
  CheckBox,
  Input,
} from "components";

const TasksPage = () => {
  return (
    <>
      <Row className="bg-bluegray_51 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <aside className="bg-bluegray_900 h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] lg:pb-[382px] xl:pb-[437px] pb-[492px] 3xl:pb-[590px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
          <Stack className="">
            <Image
              src={"images/img_group92_3.svg"}
              className="absolute lg:h-[396px] xl:h-[452px] h-[508px] 2xl:h-[509px] 3xl:h-[610px] inset-x-[0] mx-[auto] object-contain top-[0] w-[51%]"
              alt="Group92"
            />
          </Stack>
        </aside>
        <Column className="items-center lg:pb-[45px] xl:pb-[52px] pb-[59px] 3xl:pb-[70px] w-[93%]">
          <Row className="bg-white_A700 border border-indigo_50 border-solid items-center justify-between lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[40%]">
              <Row className="absolute border border-bluegray_201 border-solid items-center justify-start left-[0] lg:pl-[5px] xl:pl-[6px] pl-[7px] 3xl:pl-[8px] lg:pr-[4px] xl:pr-[5px] pr-[6px] 3xl:pr-[7px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[17%]">
                <Image
                  src={"images/img_searchoutline_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="searchOutline"
                />
                <Text className="font-semibold mb-[1px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 text-left w-[auto]">{`All`}</Text>
                <Image
                  src={"images/img_angledownoutl_10.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="angledownOutl"
                />
              </Row>
              <Text className="absolute border border-bluegray_201 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] right-[0] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[84%]">{`Search your CRM...`}</Text>
            </Stack>
            <Image
              src={"images/img_frame410_1.svg"}
              className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[376px] xl:ml-[430px] ml-[484px] 3xl:ml-[581px] object-contain w-[22%]"
              alt="Frame410"
            />
          </Row>
          <header className="w-[100%]">
            <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-start lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] w-[100%]">
              <Text className="font-semibold lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_700 text-left w-[auto]">{`My meetings and Tasks`}</Text>
              <Button className="bg-white_A700 border border-gray_200 border-solid font-normal 3xl:ml-[1129px] lg:ml-[731px] xl:ml-[837px] ml-[941px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-center w-[7%]">{`Add meeting`}</Button>
              <Button className="bg-bluegray_900 border border-gray_200 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[5%]">{`Add Task`}</Button>
            </Row>
          </header>
          <Row className="items-start justify-evenly w-[100%]">
            <Column className="bg-white_A700 border border-bluegray_101 border-solid w-[66%]">
              <Column className="items-center w-[100%]">
                <Row className="border border-gray_200 border-solid items-center justify-start lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] lg:pr-[536px] xl:pr-[613px] pr-[690px] 3xl:pr-[828px] 3xl:pt-[10px] lg:pt-[7px] xl:pt-[8px] pt-[9px] w-[100%]">
                  <Text className="font-normal lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 text-left w-[auto]">{`MEETINGS`}</Text>
                  <Column className="lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] w-[7%]">
                    <Column className="items-start px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[100%]">
                      <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-left w-[auto]">{`TASKS`}</Text>
                    </Column>
                    <Line className="bg-blue_800 h-[2px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[100%]" />
                  </Column>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Stack className="border border-gray_200 border-solid xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[489px] xl:pr-[559px] pr-[629px] 3xl:pr-[755px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                    <CheckBox
                      className="absolute font-normal inset-y-[0] left-[0] my-[auto] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[22%]"
                      inputClassName="2xl:h-[27px] 3xl:h-[32px] 3xl:w-[31px] bg-white_A700 border-bluegray_50 border-bw083 border-solid h-[26px] lg:h-[21px] lg:w-[20px] rounded-radius25 w-[26px] xl:h-[24px] xl:w-[23px] mr-[5px]"
                      name="Group488"
                      label={`This is just a sample task`}
                    ></CheckBox>
                    <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[6%] my-[auto] w-[21%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-red_700 w-[auto]">{`Sample Task`}</Text>
                      <Text className="font-normal lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">
                        <span className="text-bluegray_600 font-sourcesanspro">
                          <>{`Due date: `}</>
                        </span>
                        <span className="text-red_700 font-sourcesanspro">
                          <>{`20 days ago (overdue)`}</>
                        </span>
                      </Text>
                    </Column>
                  </Stack>
                  <Stack className="border border-gray_200 border-solid xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[521px] xl:pr-[596px] pr-[671px] 3xl:pr-[805px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                    <CheckBox
                      className="absolute font-normal inset-y-[0] left-[0] my-[auto] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[22%]"
                      inputClassName="2xl:h-[27px] 3xl:h-[32px] 3xl:w-[31px] bg-white_A700 border-bluegray_50 border-bw083 border-solid h-[26px] lg:h-[21px] lg:w-[20px] rounded-radius25 w-[26px] xl:h-[24px] xl:w-[23px] mr-[5px]"
                      name="Group489"
                      label={`This is just a sample task`}
                    ></CheckBox>
                    <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[6%] my-[auto] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] w-[16%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-left w-[auto]">{`Sample Task`}</Text>
                      <Text className="font-normal lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`Due date: in 2 months`}</Text>
                    </Column>
                  </Stack>
                  <Stack className="border border-gray_200 border-solid xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[521px] xl:pr-[596px] pr-[671px] 3xl:pr-[805px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                    <CheckBox
                      className="absolute font-normal inset-y-[0] left-[0] my-[auto] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[22%]"
                      inputClassName="2xl:h-[27px] 3xl:h-[32px] 3xl:w-[31px] bg-white_A700 border-bluegray_50 border-bw083 border-solid h-[26px] lg:h-[21px] lg:w-[20px] rounded-radius25 w-[26px] xl:h-[24px] xl:w-[23px] mr-[5px]"
                      name="Group490"
                      label={`This is just a sample task`}
                    ></CheckBox>
                    <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[6%] my-[auto] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] w-[16%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-left w-[auto]">{`Sample Task`}</Text>
                      <Text className="font-normal lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`Due date: in 2 months`}</Text>
                    </Column>
                  </Stack>
                  <Stack className="border border-gray_200 border-solid xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[521px] xl:pr-[596px] pr-[671px] 3xl:pr-[805px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                    <CheckBox
                      className="absolute font-normal inset-y-[0] left-[0] my-[auto] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[22%]"
                      inputClassName="2xl:h-[27px] 3xl:h-[32px] 3xl:w-[31px] bg-white_A700 border-bluegray_50 border-bw083 border-solid h-[26px] lg:h-[21px] lg:w-[20px] rounded-radius25 w-[26px] xl:h-[24px] xl:w-[23px] mr-[5px]"
                      name="Group491"
                      label={`This is just a sample task`}
                    ></CheckBox>
                    <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[6%] my-[auto] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] w-[16%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-left w-[auto]">{`Sample Task`}</Text>
                      <Text className="font-normal lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`Due date: in 2 months`}</Text>
                    </Column>
                  </Stack>
                </List>
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="bg-gray_101 border border-gray_200 border-solid items-center justify-between my-[0] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                    <Stack className="3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] w-[22%]">
                      <CheckBox
                        className="absolute font-normal inset-x-[0] inset-y-[35%] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[100%]"
                        inputClassName="2xl:h-[27px] 3xl:h-[32px] 3xl:w-[31px] bg-white_A700 border-bluegray_50 border-bw083 border-solid h-[26px] lg:h-[21px] lg:w-[20px] rounded-radius25 w-[26px] xl:h-[24px] xl:w-[23px] mr-[5px]"
                        name="Group492"
                        label={`This is just a sample task`}
                      ></CheckBox>
                      <Column className="absolute items-start justify-start lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] right-[0] w-[73%]">
                        <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-left w-[auto]">{`Sample Task`}</Text>
                        <Text className="font-normal lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`Due date: in 2 months`}</Text>
                      </Column>
                    </Stack>
                    <Image
                      src={"images/img_frame448.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[453px] xl:ml-[518px] ml-[583px] 3xl:ml-[700px] lg:my-[24px] xl:my-[28px] my-[32px] 3xl:my-[38px] object-contain w-[8%]"
                      alt="Frame448"
                    />
                  </Row>
                  <Stack className="border border-gray_200 border-solid xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[521px] xl:pr-[596px] pr-[671px] 3xl:pr-[805px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                    <CheckBox
                      className="absolute font-normal inset-y-[0] left-[0] my-[auto] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[22%]"
                      inputClassName="2xl:h-[27px] 3xl:h-[32px] 3xl:w-[31px] bg-white_A700 border-bluegray_50 border-bw083 border-solid h-[26px] lg:h-[21px] lg:w-[20px] rounded-radius25 w-[26px] xl:h-[24px] xl:w-[23px] mr-[5px]"
                      name="Group493"
                      label={`This is just a sample task`}
                    ></CheckBox>
                    <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[6%] my-[auto] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] w-[16%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 text-left w-[auto]">{`Sample Task`}</Text>
                      <Text className="font-normal lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`Due date: in 2 months`}</Text>
                    </Column>
                  </Stack>
                </List>
              </Column>
              <Input
                className="placeholder:bg-transparent bg-transparent border border-gray_200 border-solid font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[16px] xl:py-[19px] py-[21.5px] 2xl:py-[21px] 3xl:py-[25px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                name="Group479"
                placeholder={`Showing task due from 18 may 2022 - 22 May 2023`}
              ></Input>
            </Column>
            <Column className="bg-white_A700 border border-gray_200 border-solid items-start justify-center lg:mb-[458px] xl:mb-[523px] mb-[589px] 3xl:mb-[707px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[273px] xl:pr-[313px] pr-[352px] 3xl:pr-[422px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[34%]">
              <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[auto]">{`OPEN TASKS`}</Text>
              <Row className="items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[16%]">
                <Image
                  src={"images/img_radiobutton.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="RadioButton"
                />
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[auto]">{`Overdue`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[13%]">
                <Image
                  src={"images/img_radiobutton_1.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="RadioButton"
                />
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[auto]">{`Today`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[19%]">
                <Image
                  src={"images/img_radiobutton_2.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="RadioButton"
                />
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[auto]">{`Tomorrow`}</Text>
              </Row>
              <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[auto]">{`ALL TASKS`}</Text>
              <Row className="items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[12%]">
                <Image
                  src={"images/img_radiobutton_3.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="RadioButton"
                />
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[auto]">{`Open`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[20%]">
                <Image
                  src={"images/img_radiobutton_4.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="RadioButton"
                />
                <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[auto]">{`Completed`}</Text>
              </Row>
            </Column>
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default TasksPage;
