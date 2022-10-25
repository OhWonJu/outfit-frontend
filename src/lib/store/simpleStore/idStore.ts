import create from "zustand";

// 일부 data를  request 할 때 필요한 ID state 관리
interface IdStoreProps {
  productId: string;
  setProductId: (id: string) => void;
}

const IdStore = create<IdStoreProps>(set => ({
  // STATE
  productId: "",

  //  ACTION
  setProductId: (id: any) => {
    set(state => ({ productId: id }));
  },
}));

export default IdStore;
