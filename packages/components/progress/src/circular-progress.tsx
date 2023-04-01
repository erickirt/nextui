import {forwardRef} from "@nextui-org/system";

import {UseCircularProgressProps, useCircularProgress} from "./use-circular-progress";

export interface CircularProgressProps extends Omit<UseCircularProgressProps, "ref"> {}

const CircularProgress = forwardRef<CircularProgressProps, "div">((props, ref) => {
  const {
    Component,
    slots,
    styles,
    label,
    showValueLabel,
    getProgressBarProps,
    getLabelProps,
    getSvgProps,
    getCircleProps,
  } = useCircularProgress({ref, ...props});

  const progressBarProps = getProgressBarProps();

  return (
    <Component {...progressBarProps}>
      <div className={slots.svgWrapper({class: styles?.svgWrapper})}>
        <svg {...getSvgProps()}>
          <circle {...getCircleProps()} />
        </svg>
        {showValueLabel && (
          <span className={slots.value({class: styles?.value})}>
            {progressBarProps["aria-valuetext"]}
          </span>
        )}
      </div>
      {label && <span {...getLabelProps()}>{label}</span>}
    </Component>
  );
});

CircularProgress.displayName = "NextUI.CircularProgress";

export default CircularProgress;