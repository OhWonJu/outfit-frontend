import { FC, memo, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import tw from "twin.macro";
import { Cross, Search } from "@components/icons";
import { useUI } from "@components/ui";

interface Props {
  show: boolean;
  className?: string;
  id?: string;
}

const Searchbar: FC<Props> = ({ show, className, id = "search" }) => {
  const router = useRouter();

  const { closeDropDown } = useUI();

  // useEffect(() => {
  //   router.prefetch("/search");
  // }, [router]);

  // const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   e.preventDefault()

  //   if (e.key === 'Enter') {
  //     const q = e.currentTarget.value

  //     router.push(
  //       {
  //         pathname: `/search`,
  //         query: q ? { q } : {},
  //       },
  //       undefined,
  //       { shallow: true }
  //     )
  //   }
  // }

  return (
    <Container $show={show}>
      <div className="__searchBar relative flex w-[80%] md:w-[55%] xmd:w-[50%] items-center">
        <label className="hidden" htmlFor={id}>
          Search
        </label>
        <Input
          id={id}
          type="text"
          placeholder="Search for products..."
          // defaultValue={router.query.q}
          // onKeyUp={handleKeyUp}
        />
        <div className="absolute inset-y-0 flex items-center py-1.5 px-3 right-0">
          <Search className="h-5 w-5" />
        </div>
      </div>
      <div className="absolute inset-y-0 flex items-center py-1.5 px-1.5 right-5">
        <button className="" onClick={() => closeDropDown()}>
          <Cross className="h-6 w-6" />
        </button>
      </div>
    </Container>
  );
};

export default memo(Searchbar);

const Container = styled.div<any>`
  ${props => (props.$show ? tw`flex` : tw`hidden`)};
  ${tw`absolute z-30 top-0 left-0 px-5 w-full h-full justify-center`};
  background-color: ${props => props.theme.background_color};
`;

const Input = styled.input<any>`
  ${props => tw`shadow-sm w-full pr-10 focus:ring-0 focus:outline-none`}
  border-color: ${props => props.theme.gray_light};
  border-width: 1.5px;
  :focus {
    border-color: ${props => props.theme.text_primary_color};
  }
`;
