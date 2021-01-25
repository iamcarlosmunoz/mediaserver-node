import React from "react";
import { ItemRanking, List } from "./styles";
import { IconStar } from "../common/SvgIcons";
import { theme } from "../../styles/index";

const InfoRanking = ({ ranking }) => {
  return (
    <List>
      <ItemRanking>{ranking}</ItemRanking>
      <IconStar active={ranking > 2} color={theme.colors.primary} />
      <IconStar active={ranking > 4} color={theme.colors.primary} />
      <IconStar active={ranking > 6} color={theme.colors.primary} />
      <IconStar active={ranking > 8} color={theme.colors.primary} />
      <IconStar active={ranking > 10} color={theme.colors.primary} />
    </List>
  );
};

export default InfoRanking;
