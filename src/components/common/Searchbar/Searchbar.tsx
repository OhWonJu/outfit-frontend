import { FC, memo, useEffect } from "react";
import { useRouter } from "next/router";
import { FieldErrors, useForm } from "react-hook-form";

import styled from "styled-components";
import tw from "twin.macro";
import { Cross, Search } from "@components/icons";
import { Input, useUI } from "@components/ui";
import { NAV_HEIGHT } from "src/constants";

interface SearchProps {
  keyword: string;
}

interface Props {
  className?: string;
  id?: string;
}

const Searchbar: FC<Props> = ({ className, id = "search" }) => {
  const router = useRouter();
  const { closeDropDown } = useUI();

  // React Form Hook //
  const { register, handleSubmit, watch, setValue, setFocus } =
    useForm<SearchProps>({
      mode: "onChange",
    });

  useEffect(() => {
    setTimeout(() => setFocus("keyword"), 1); // 뭔 그지같은 트릭이여..
  }, [setFocus]);

  const onSubmit = (data: SearchProps) => {
    console.log(data);
  };
  const onInvaild = (errors: FieldErrors) => {
    console.log(errors);
  };
  // --------------------------------------------- //

  const _clearHandler = () => {
    setValue("keyword", "");
    setFocus("keyword");
  };

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
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit, onInvaild)}
        className="__searchBar relative flex w-[80%] md:w-[55%] xmd:w-[50%] items-center"
      >
        <label className="hidden" htmlFor={id}>
          Search
        </label>
        <Input
          register={register("keyword", {
            required: "Keyword is required",
          })}
          id={id}
          type="text"
          className="px-10 shadow-none"
          style={{ backgroundColor: "transparent" }}
          placeholder="Search for products..."
          required={false}
        />
        {/* <Input
          {...register("keyword", {
            required: "Keyword is required",
          })}
          id={id}
          type="text"
          placeholder="Search for products..."
          // defaultValue={router.query.q}
          // onKeyUp={handleKeyUp}
        /> */}
        <div className="absolute inset-y-0 flex items-center py-1.5 px-3 left-0">
          <Search className="h-5 w-5" />
        </div>
        {watch("keyword") && (
          <div className="absolute inset-y-0 flex items-center right-2">
            <button
              className="bg-black bg-opacity-10 hover:bg-opacity-30 p-1 rounded-full"
              onClick={_clearHandler}
              type="button"
            >
              <Cross className="h-3 w-3" strokeWidth={2} />
            </button>
          </div>
        )}
      </form>
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
  ${tw`relative z-30 top-0 left-0 flex px-5 w-full justify-center`};
  height: ${NAV_HEIGHT}px;
  /* background-color: ${props => props.theme.background_color}; */
`;

// const Input = styled.input<any>`
//   ${tw`shadow-sm w-full px-10 focus:ring-0 focus:outline-none`}
//   border-color: ${props => props.theme.gray_light};
//   border-width: 1.5px;
//   :focus {
//     border-color: ${props => props.theme.text_primary_color};
//   }
// `;
