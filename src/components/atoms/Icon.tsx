import loadable from "@loadable/component";
import { IconBaseProps } from "react-icons/lib";

interface typesPropsIcon {
  nameIcon: string;
  propsIcon?: IconBaseProps;
}

export function Icon({ nameIcon, propsIcon }: typesPropsIcon) {
  const lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLowerCase();
  const ElementIcon = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (el) => el[nameIcon],
  });

  return <ElementIcon {...propsIcon} />;
}
