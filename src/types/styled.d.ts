// import original module declarations
import "styled-components";

export type Theme = Record<
  "background" | "text" | "text2" | "accent" | "accent2",
  CSSProperties["color"]
>;

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme
    extends Record<
      "background" | "text" | "text2" | "accent" | "accent2",
      CSSProperties["color"]
    > {}
}
