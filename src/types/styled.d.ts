// import original module declarations
import "styled-components";
import { css } from "styled-components";

type Theme = Record<
  "background" | "text" | "text2" | "accent" | "accent2",
  CSSProperties["color"]
> &
  Record<"titleFont" | "bodyFont", CSSProperties["font"]> & {
    defaultProps: ReturnType<typeof css>;
  };

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
