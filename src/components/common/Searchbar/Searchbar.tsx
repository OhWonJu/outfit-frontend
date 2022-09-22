import { FC, memo, useEffect } from "react";
import { useRouter } from "next/router";

interface Props {
  className?: string;
  id?: string;
}

const Searchbar: FC<Props> = ({ className, id = "search" }) => {
  const router = useRouter();

  // useEffect(() => {
  //   router.prefetch('/search')
  // }, [router])

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

  return <div></div>;
};

export default memo(Searchbar);
