import React, { FC, useEffect, useState, useCallback } from "react";
import { validate } from "email-validator";
import styled from "styled-components";
import tw from "twin.macro";
import useTheme from "@lib/hooks/useTheme";
import css from "styled-jsx/css";

type tabType = "MEMBER" | "NON-MEMBER";

interface TabState {
  _onClick: Function;
  tab: tabType;
  state: tabType;
  context: string;
}

const Tab: React.FC<TabState> = ({ _onClick, tab, state, context }) => {
  const selected: boolean = tab === state;

  return (
    <TabButton onClick={_onClick} $selected={selected}>
      <TabButtonContext $selected={selected}>{context}</TabButtonContext>
    </TabButton>
  );
};

const Sns: React.FC<{
  _onClick?: Function;
  bgColor?: string;
  txColor?: string;
  context: string;
}> = ({ _onClick = () => null, bgColor, txColor, context }) => {
  return (
    <SNSLogIn onClick={_onClick} $bgColor={bgColor}>
      <button className="font-medium text-base" style={{ color: txColor }}>
        {context}
      </button>
    </SNSLogIn>
  );
};

const LoginView: React.FC = () => {
  const theme = useTheme();

  const [tab, setTab] = useState<tabType>("MEMBER");

  const [remember, setRemember] = useState(false);

  return (
    <Container>
      {/* <div className="text-[#AFAFAF]" /> */}
      {/* <div className="hover:text-[#0F0F0F]" /> */}
      {/* <div className="modal-title-wrapper mt-3 mb-3">
        <span className="modal-title-text text-lg font-semibold font-sansSrif">
          LOG IN
        </span>
      </div> */}

      <div className="tab-wrapper flex flex-row justify-around w-full">
        <Tab
          _onClick={() => setTab("MEMBER")}
          tab="MEMBER"
          state={tab}
          context="Member"
        />
        <Tab
          _onClick={() => setTab("NON-MEMBER")}
          tab="NON-MEMBER"
          state={tab}
          context="Non-member order check"
        />
      </div>

      <div className="form-wrapper w-full my-5 sm:my-10">
        {tab === "MEMBER" ? (
          <>
            <form className="member-form flex flex-col mb-4 space-y-4">
              <div className="space-y-2">
                <label>Email</label>
                <Input id="email" placeholder="" required />
              </div>
              <div className="space-y-2">
                <label>Password</label>
                <Input id="password" placeholder="" type="password" required />
              </div>
              <SubmitButton type="button">
                <span className="font-semibold">Log In</span>
              </SubmitButton>
            </form>
            <div className="login-util-wrapper flex flex-row w-full">
              <div className="flex flex-1 items-center">
                <button
                  id="remember"
                  onClick={() => setRemember(prev => !prev)}
                  className={`w-4 h-4 rounded-full ${
                    remember ? "bg-black" : "bg-gray-200"
                  }  transition`}
                />
                <label className="ml-2 text-sm" htmlFor="remember">
                  Remember
                </label>
              </div>
              <div className={`flex flex-1 justify-end space-x-2`}>
                <AccountHelpButton>find id</AccountHelpButton>
                <span className="text-sm" style={{ color: theme.gray_primary }}>
                  |
                </span>
                <AccountHelpButton>find password</AccountHelpButton>
              </div>
            </div>
          </>
        ) : tab === "NON-MEMBER" ? (
          <>
            <form className="non-member-form flex flex-col space-y-4">
              <div className="space-y-2">
                <label>Order Code</label>
                <Input id="orderCode" placeholder="" required />
              </div>
              <SubmitButton type="button" className="group">
                <span className="font-semibold">Join</span>
              </SubmitButton>
            </form>
          </>
        ) : null}
      </div>

      {tab === "MEMBER" && (
        <div className="sns-sign-wrapper flex flex-col w-full space-y-4 relative">
          <div
            className="absolute top-5 w-full border-t-[1.5px]"
            style={{ borderColor: theme.gray_light }}
          />
          <div className="relative -top-[0.45rem] text-center">
            <span
              className="px-2 text-sm"
              style={{
                backgroundColor: theme.container_bg_color,
                color: theme.gray_primary,
              }}
            >
              easy log in with
            </span>
          </div>
          <Sns
            bgColor="#F1D100"
            txColor={theme.text_color_primary}
            context="KAKAO"
            _onClick={() =>
              window.open(
                "http://localhost:3000/",
                "SNS LogIn",
                "location=no,status=no,scrollbars=no,resizable=no,width=600, height=600",
              )
            }
          />
          <Sns bgColor="#3C538C" txColor="#FCFCFC" context="FACEBOOK" />
          <Sns
            // bgColor="#F2F2F2"
            txColor={theme.text_color_primary}
            context="GOOGLE"
          />
          <Sns
            // bgColor="#F2F2F2"
            txColor={theme.text_color_primary}
            context="APPLE"
          />
        </div>
      )}

      <div className="mt-5 sm:mt-10">
        <button style={{ color: theme.text_symbol_color }}>
          <span
            style={{ borderColor: theme.text_symbol_color }}
            className="text-xs font-semibold font-sansSrif border rounded-md px-1 py-1"
          >
            JOIN US!
          </span>
          <span className="ml-3 text-xs font-semibold font-sansSrif">
            FOR MORE BENEFIT
          </span>
        </button>
      </div>
    </Container>
  );
};

export default LoginView;

const Container = styled.div<any>`
  ${tw`flex flex-col items-center mt-5`}
`;

const TabButton = styled.button<any>`
  flex: 1;
  padding: 1rem 0.75rem 1rem 0.75rem;
  border-bottom-width: 2px;
  border-color: ${props =>
    props.$selected
      ? props.theme.text_color_primary
      : props.theme.gray_primary};
`;

const TabButtonContext = styled.span<any>`
  color: ${props =>
    props.$selected
      ? props.theme.text_color_primary
      : props.theme.gray_primary};

  ${tw`font-sansSrif text-base`};
`;

const Input = styled.input<any>`
  width: 100%;
  background-color: ${props => props.theme.gray_light};
  color: ${props => props.theme.text_color_primary};
  border-width: 1px;
  border-color: transparent;
  line-height: 1rem;
  &:focus {
    border-color: ${props => props.theme.black_primary};
  }
  ${tw`appearance-none px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-black focus:ring-1`}
`;

const SubmitButton = styled.button<any>`
  width: 100%;
  background-color: ${props => props.theme.gray_primary};
  color: ${props => props.theme.background_color};
  &:hover {
    background-color: ${props => props.theme.black_primary};
  }
  ${tw`px-4 py-4 rounded-md transition duration-100`}
`;

const AccountHelpButton = styled.button<any>`
  color: ${props => props.theme.gray_primary};
  &:hover {
    color: ${props => props.theme.$text_color_primary};
  }

  ${tw`text-sm`}
`;

const SNSLogIn = styled.div<any>`
  width: 100%;
  background-color: ${props => props.$bgColor};
  color: ${props => props.theme.$txColor};
  ${tw`px-4 py-3 rounded-md flex justify-center items-center shadow hover:shadow-inner transition-shadow`}
`;
