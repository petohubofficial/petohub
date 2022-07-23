import type { Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { SxProps } from "@mui/system";
import type { MutableRefObject } from "react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

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
