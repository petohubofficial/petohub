import "simplebar/dist/simplebar.min.css";
import { forwardRef, ForwardRefRenderFunction } from "react";
import type { MutableRefObject } from "react";
import SimpleBar from "simplebar-react";
import type { Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { SxProps } from "@mui/system";

interface ScrollbarProps extends SimpleBar.Props {
  ref: MutableRefObject<SimpleBar>;
  sx?: SxProps<Theme>;
}

const ScrollbarRoot = styled(SimpleBar)``;

const ScrollbarRender: ForwardRefRenderFunction<MutableRefObject<SimpleBar>, ScrollbarProps> = (
  props,
  ref
) => {
  return (
    // @ts-ignore
    <ScrollbarRoot ref={ref} {...props} />
  );
};

const Scrollbar = forwardRef<MutableRefObject<SimpleBar>, ScrollbarProps>(ScrollbarRender);

export default Scrollbar;
