import React, { useState } from "react";
import { Row } from "src/styles/GlobalStyle";
import useTheme from "@lib/hooks/useTheme";
import { Tag } from "@components/ui";
import { BORDER_TINE_WIDTH } from "src/constants";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      //   width: 250,
    },
  },
};

const heights = [
  "149cm 이하",
  "150 - 152cm",
  "153 - 155cm",
  "156 - 158cm",
  "159 - 161cm",
  "162 - 164cm",
  "165 - 167cm",
  "168 - 170cm",
  "171 - 173cm",
  "174 - 176cm",
  "177 - 179cm",
  "180 - 182cm",
  "183 - 185cm",
  "186 - 188cm",
  "189 - 191cm",
  "192cm 이상",
];

const weights = [
  "44kg 이하",
  "45 - 47kg",
  "48 - 50kg",
  "51 - 53kg",
  "54 - 56kg",
  "57 - 59kg",
  "60 - 62kg",
  "63 - 65kg",
  "66 - 68kg",
  "69 - 71kg",
  "72 - 74kg",
  "75 - 77kg",
  "78 - 80kg",
  "81 - 83kg",
  "84 - 86kg",
  "87 - 89kg",
  "93 - 95kg",
  "96 - 98kg",
  "99 - 101kg",
  "102 - 104kg",
  "105 - 107kg",
  "108 - 110kg",
  "111 - 113kg",
  "114 - 116kg",
  "117 - 119kg",
  "120 - 122kg",
  "123 - 125kg",
  "126 - 128kg",
  "129 - 131kg",
  "132 - 134kg",
  "135 - 137kg",
  "138 - 140kg",
  "141kg 이상",
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const SelectForm = ({
  valueGroup,
  value,
  changeHandler,
  label,
}: {
  valueGroup: Array<any>;
  value: Array<any>;
  changeHandler: any;
  label: string;
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={value}
        onChange={changeHandler}
        input={<OutlinedInput label={label} />}
        renderValue={selected => selected.join(", ")}
        MenuProps={MenuProps}
      >
        <MenuItem key="init" value="init">
          <ListItemText primary="필터 초기화" />
        </MenuItem>
        {valueGroup.map((data: any) => (
          <MenuItem key={data} value={data}>
            <Checkbox checked={value.indexOf(data) > -1} />
            <ListItemText primary={data} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

interface Props {
  viewMode: "MOBILE" | "DESKTOP";
}

const ReviewFilter: React.FC<Props> = ({ viewMode }) => {
  const theme = useTheme();

  const [tagSelect, setTagSelect] = useState(0);

  const tagFilters = ["맞춤순", "최근순", "평점순"];

  const [height, setHeight] = React.useState<string[]>([]);
  const [weight, setWeight] = React.useState<string[]>([]);
  const [size, setSize] = React.useState<string[]>([]);

  const handleChange = (
    event: SelectChangeEvent<typeof height | typeof weight | typeof size>,
    setValue: Function,
  ) => {
    const {
      target: { value },
    } = event;
    if (value.includes("init")) {
      setValue([]);
      return;
    }
    setValue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <div className="">
      <Row
        className="justify-between pb-3 mb-5"
        style={{
          borderBottomWidth: BORDER_TINE_WIDTH,
          borderColor: theme.gray_light,
        }}
      >
        {tagFilters.map((tag, index) => (
          <Tag
            key={index}
            context={tag}
            onClick={() => setTagSelect(index)}
            selected={index === tagSelect}
            className="flex-1 items-center justify-center"
          />
        ))}
      </Row>
      {tagSelect === 0 && (
        <div
          className="space-y-5 pb-5"
          style={{
            borderBottomWidth: BORDER_TINE_WIDTH,
            borderColor: theme.gray_light,
          }}
        >
          <SelectForm
            valueGroup={heights}
            changeHandler={(e: any) => handleChange(e, setHeight)}
            value={height}
            label="키"
          />
          <SelectForm
            valueGroup={weights}
            changeHandler={(e: any) => handleChange(e, setWeight)}
            value={weight}
            label="몸무게"
          />
          <SelectForm
            valueGroup={sizes}
            changeHandler={(e: any) => handleChange(e, setSize)}
            value={size}
            label="사이즈"
          />
        </div>
      )}
    </div>
  );
};

export default ReviewFilter;
