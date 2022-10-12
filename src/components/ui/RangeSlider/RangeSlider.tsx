import React, {
  HTMLInputTypeAttribute,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Slider from "@mui/material/Slider";

import useTheme from "@lib/hooks/useTheme";
import styled from "styled-components";
import tw from "twin.macro";

function valuetext(value: number) {
  return `${value}원`;
}

interface RangeSliderProps {
  initMinValue?: number;
  initMaxValue?: number;
  min?: number;
  max?: number;
  step?: number;
  minDistance?: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  initMinValue = 0,
  initMaxValue = 100000,
  min = 0,
  max = 100000,
  step = 5000,
  minDistance = 5000,
}) => {
  const theme = useTheme();

  const [value, setValue] = useState<number[]>([initMinValue, initMaxValue]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.max(newValue[0], minDistance - 100);
        if (clamped >= max - minDistance) {
          setValue([clamped - minDistance, max]);
          return;
        }
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue as number[]);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center items-center my-6 space-x-3">
        <div className="relative rounded-md ">
          <Span className="top-[0.3rem] left-[0.6rem]">Min</Span>
          <Span
            className="top-[1.3rem] left-[0.6rem]"
            style={{ color: theme.text_primary_color }}
          >
            ￦
          </Span>
          <Input
            onChange={event =>
              setValue([parseInt(event.target.value), value[1]])
            }
            type="number"
            value={value[0]}
          />
        </div>
        <div className="font-semibold text-lg"> ~ </div>
        <div className="relative rounded-md">
          <Span className="top-[0.33rem] left-[0.6rem]">Max</Span>
          <Span
            className="top-[1.3rem] left-[0.6rem]"
            style={{ color: theme.text_primary_color }}
          >
            ￦
          </Span>
          {value[1] >= max && (
            <Span
              className="top-[1.33rem] right-[1.4rem]"
              style={{ color: theme.text_primary_color }}
            >
              +
            </Span>
          )}
          <Input
            onChange={event =>
              setValue([value[0], parseInt(event.target.value)])
            }
            type="number"
            value={value[1]}
          />
        </div>
      </div>

      <div className="mb-4 px-2">
        <Slider
          getAriaLabel={() => "Minimum distance shift"}
          value={value}
          defaultValue={[initMinValue, initMaxValue]}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={max}
          min={min}
          step={step}
          disableSwap
        />
      </div>
    </div>
  );
};

export default RangeSlider;

const Span = styled.span`
  color: ${props => props.theme.gray_primary};
  ${tw`absolute font-medium text-sm`};
`;

const Input = styled.input`
  border-color: ${props => props.theme.gray_light};
  color: ${props => props.theme.text_primary_color};
  padding: 20px 5px 5px 23px;
  ${tw`w-full rounded-md border text-sm font-medium`}
`;
