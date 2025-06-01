import classNames from "classnames";
import "./index.scss";

interface IProps {
  label: string;
  onClick?: () => void;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  styles?: string;
}

interface ITypography {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: string | any;
}

const variantsMapping: ITypography = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
};

export const Typography = ({ label, variant, styles, onClick }: IProps) => {
  const Component = variantsMapping[variant];

  return (
    <Component
      className={classNames({ [`${styles}`]: styles })}
      onClick={onClick}
    >
      {label}
    </Component>
  );
};
