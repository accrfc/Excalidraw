//
// All icons are imported from https://fontawesome.com/icons?d=gallery
// Icons are under the license https://fontawesome.com/license
//

// Note: when adding new icons, review https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/RTL_Guidelines
// to determine whether or not the icons should be mirrored in right-to-left languages.

import React from "react";

import oc from "open-color";
import clsx from "clsx";
import { Theme } from "../element/types";
import { THEME } from "../constants";

const activeElementColor = (theme: Theme) =>
  theme === THEME.LIGHT ? oc.orange[4] : oc.orange[9];

const iconFillColor = (theme: Theme) => "var(--icon-fill-color)";

const handlerColor = (theme: Theme) =>
  theme === THEME.LIGHT ? oc.white : "#1e1e1e";

type Opts = {
  width?: number;
  height?: number;
  mirror?: true;
} & React.SVGProps<SVGSVGElement>;

export const createIcon = (
  d: string | React.ReactNode,
  opts: number | Opts = 512,
) => {
  const {
    width = 512,
    height = width,
    mirror,
    style,
    ...rest
  } = typeof opts === "number" ? ({ width: opts } as Opts) : opts;
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox={`0 0 ${width} ${height}`}
      className={clsx({ "rtl-mirror": mirror })}
      style={style}
      {...rest}
    >
      {typeof d === "string" ? <path fill="currentColor" d={d} /> : d}
    </svg>
  );
};

const newIconProps: Opts = {
  width: 16,
  height: 16,
  fill: "none",
};

export const WelcomeScreenMenuArrow = createIcon(
  <>
    <path
      d="M38.5 83.5c-14-2-17.833-10.473-21-22.5C14.333 48.984 12 22 12 12.5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12.005 10.478 7.905 14.423L6 25.75l6.005-15.273Z"
      fill="currentColor"
    />
    <path
      d="M12.005 10.478c1.92 3.495 3.838 7 7.905 14.423m-7.905-14.423c3.11 5.683 6.23 11.368 7.905 14.423m0 0c-3.68.226-7.35.455-13.91.85m13.91-.85c-5.279.33-10.566.647-13.91.85m0 0c1.936-4.931 3.882-9.86 6.005-15.273M6 25.75c2.069-5.257 4.135-10.505 6.005-15.272"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </>,
  { width: 41, height: 94, fill: "none" },
);

export const WelcomeScreenHelpArrow = createIcon(
  <>
    <g clipPath="url(#a)">
      <path
        d="M29.026 7.232c-5.268 13.125-5.548 33.555 3.285 42.311 8.823 8.75 33.31 12.304 42.422 13.523"
        stroke="#B8B8B8"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m83.181 65.247-13.058-10-2.948 13.62 16.006-3.62Z"
        fill="#B8B8B8"
      />
      <path
        d="M83.181 65.247c-3.163-2.429-6.337-4.856-13.058-10m13.058 10c-5.145-3.936-10.292-7.882-13.058-10m0 0c-.78 3.603-1.563 7.196-2.948 13.62m2.948-13.62c-1.126 5.168-2.24 10.346-2.948 13.62m0 0c5.168-1.166 10.334-2.343 16.006-3.62m-16.006 3.62c5.51-1.248 11.01-2.495 16.006-3.62"
        stroke="#B8B8B8"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="scale(1 -1) rotate(60 112.157 29.246)"
          d="M0 0h41v94H0z"
        />
      </clipPath>
    </defs>
  </>,
  { width: 102, height: 83, fill: "none" },
);

export const ExcalLogo = createIcon(
  <>
    <g clipPath="url(#a)" fill="currentColor">
      <path d="M24.296 12.214c0 .112-.134.224-.291.224-.135 0-.516.629-.808 1.392-.897 2.335-9.867 20.096-9.89 19.534 0-.292-.134-.494-.359-.494-.313 0-.358.18-.224 1.055.135 1.01.045 1.236-3.14 7.432-1.793 3.525-3.722 7.208-4.282 8.196-.584 1.032-1.032 2.155-1.077 2.626-.067.809.022.92 1.973 2.605 1.122.988 2.557 2.223 3.185 2.784 2.826 2.582 4.149 3.615 4.508 3.547.538-.09 8.858-8.823 8.88-9.317 0-.225-.403-3.638-.897-7.59-.852-6.735-1.66-14.616-1.57-15.38.068-.47-.269-2.85-.516-3.884-.201-.808-.112-1.145 1.503-4.827.942-2.178 2.176-4.85 2.714-5.928.515-1.077.964-2.02.964-2.088 0-.067-.157-.112-.336-.112-.18 0-.337.09-.337.225Zm-5.158 16.772c.247 1.572.74 5.344 1.099 8.375.695 5.568 1.503 11.742 1.727 13.314.135.786.045.943-1.413 2.56-2.534 2.851-5.225 5.658-6.145 6.376l-.852.674-4.373-4.086c-4.037-3.728-4.373-4.11-4.127-4.558a5154.2 5154.2 0 0 1 2.535-4.626 727.864 727.864 0 0 0 3.678-6.78c.784-1.46 1.502-2.717 1.637-2.785.156-.09.201 2.178.156 7.006-.09 7.207-.067 7.23.651 7.072.09 0 .157-3.637.157-8.06V35.43l2.355-4.715c1.3-2.605 2.377-4.693 2.422-4.67.045.022.27 1.347.493 2.94ZM9.562 1.818C7.903 3.143 5.346 5.388 3.328 7.32L1.735 8.823l.292 1.976c.157 1.078.449 3.188.628 4.67.202 1.482.404 2.874.47 3.077.09.269 0 .404-.246.404-.426 0-.449-.113.718 3.592.286.952.577 1.903.875 2.851.044.158.224.225.425.158.202-.09.314-.27.247-.427-.067-.18.045-.36.224-.427.247-.09.225-.269-.157-.92-.605-1.01-2.152-9.633-2.242-12.416-.067-1.976-.067-1.999.762-3.121.808-1.1 2.67-2.762 5.54-4.873.807-.605 1.614-1.28 1.839-1.504.336-.404.493-.292 3.319 2.717 1.637 1.729 3.453 3.502 4.037 3.952l1.076.808-.83 1.75c-.448.944-2.265 4.581-4.059 8.04-3.745 7.274-2.983 6.578-7.333 6.645l-2.826.023-.942 1.077c-.987 1.146-1.121 1.572-.65 2.29.18.248.313.652.313.898 0 .405.157.472 1.055.517.56.023 1.076.09 1.144.157.067.068.156 1.46.224 3.098l.09 2.965-1.503 3.232C1.735 45.422.749 47.891.749 48.7c0 .427.09.786.18.786.224 0 .224-.022 9.35-19.085a4398.495 4398.495 0 0 1 8.927-18.546c.672-1.369 1.278-2.626 1.323-2.806.045-.202-1.503-1.751-3.97-3.93-2.22-1.975-4.171-3.772-4.35-3.974-.516-.628-1.279-.426-2.647.674ZM8.441 31.231c-.18.472-.65 1.46-1.031 2.2-.629 1.258-.696 1.303-.853.786-.09-.314-.157-1.235-.18-2.066-.022-1.639-.067-1.616 1.817-1.728L8.8 30.4l-.358.831Zm1.884-3.592c-1.032 1.998-1.077 2.02-3.903 2.155-2.489.135-2.533.112-2.533-.36 0-.269-.09-.628-.203-.808-.134-.202-.044-.56.27-1.055l.493-.763H6.69c1.234-.023 2.647-.113 3.14-.202.494-.09.92-.135.965-.113.045.023-.18.54-.471 1.146Zm-.09-20.477c-.404.292-.516.584-.516 1.325 0 .875.067 1.01.673 1.257.605.247.763.224 1.458-.247.92-.629.941-.786.269-1.796-.583-.876-1.166-1.033-1.884-.54Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.703 11.793c.166-.291.501-.514.93-.514.38 0 .698.161.82.283.161.162.225.35.225.54a.822.822 0 0 1-.056.289c-.08.218-.5 1.106-.983 2.116-.535 1.071-1.76 3.727-2.699 5.895-.79 1.802-1.209 2.784-1.404 3.416-.142.461-.132.665-.058.961.264 1.103.6 3.647.53 4.132-.088.756.727 8.547 1.57 15.21.5 3.997.903 7.45.903 7.676l-.001.033c-.004.087-.041.288-.211.54-.24.354-.914 1.143-1.8 2.119-2.004 2.21-5.107 5.423-6.463 6.653-.322.292-.566.485-.696.56a.884.884 0 0 1-.289.111c-.194.037-.579-.007-1.11-.349-.707-.453-1.981-1.522-4-3.366-.627-.561-2.061-1.794-3.176-2.776-.81-.699-1.308-1.138-1.612-1.466-.32-.343-.47-.61-.549-.87-.078-.257-.085-.515-.055-.874.05-.52.521-1.769 1.166-2.91.559-.985 2.48-4.654 4.269-8.17 1.579-3.071 2.392-4.663 2.792-5.612.32-.759.329-1 .277-1.387-.085-.553-.092-.891-.052-1.092a.942.942 0 0 1 .274-.52c.164-.157.384-.261.704-.261.094 0 .184.011.27.033 1.924-3.44 8.554-16.632 9.316-18.616.276-.724.64-1.336.848-1.556a.965.965 0 0 1 .32-.228Zm-5.399 16.402c-.49.942-.971 1.888-1.446 2.837l-2.28 4.565v7.871c0 4.023-.06 7.404-.136 8.04-.067.552-.474.691-.654.722l.075-.008c-.317.07-.574.063-.778-.023-.234-.098-.5-.297-.63-.857-.156-.681-.158-2.462-.103-6.893.019-2.022.022-3.592.008-4.725-.156.276-.315.562-.467.843a737.624 737.624 0 0 1-3.682 6.79 3618.972 3618.972 0 0 0-2.462 4.493c.062.088.169.231.289.364.55.61 1.631 1.623 3.624 3.462l3.931 3.674.377-.298c.907-.709 3.554-3.479 6.055-6.293.425-.47.73-.814.946-1.084.175-.22.28-.36.319-.501.031-.117.002-.227-.024-.379l-.004-.02c-.224-1.572-1.032-7.753-1.728-13.33-.358-3.022-.85-6.782-1.096-8.349l-.002-.01c-.042-.301-.087-.603-.132-.891ZM9.118 1.264C9.91.628 10.537.27 11.028.144c.727-.186 1.27.003 1.713.53.186.209 2.107 1.972 4.287 3.912 2.02 1.783 3.434 3.16 3.897 3.743.326.41.322.756.296.873a1.046 1.046 0 0 1-.005.018c-.047.188-.669 1.512-1.374 2.947a4348.55 4348.55 0 0 0-8.923 18.54c-7.335 15.32-8.808 18.396-9.217 19.015-.235.355-.419.404-.525.437a.815.815 0 0 1-.249.036.745.745 0 0 1-.647-.363C.176 49.67.04 49.222.04 48.7c0-.286.09-.754.316-1.434.452-1.356 1.466-3.722 3.225-7.53l1.432-3.083-.084-2.787a72.902 72.902 0 0 0-.156-2.53 7.307 7.307 0 0 0-.539-.046c-.463-.024-.764-.062-.96-.124-.304-.096-.48-.252-.598-.438-.105-.165-.17-.374-.17-.663 0-.134-.081-.348-.178-.481l-.019-.028c-.293-.448-.406-.831-.373-1.234.04-.484.34-1.052 1.08-1.91l.759-.869c-.103-.325-.471-1.513-.854-2.787-.737-2.339-1.004-3.238-1.018-3.578-.016-.393.134-.59.27-.715a.721.721 0 0 1 .192-.125 89.87 89.87 0 0 1-.414-2.782 231.651 231.651 0 0 0-.625-4.652l-.292-1.976a.71.71 0 0 1 .215-.62l1.589-1.501C4.87 4.86 7.446 2.599 9.118 1.264Zm-1.833 33.75a.819.819 0 0 1-.406.208.73.73 0 0 1-.491-.063l.048 1.618v.009l.849-1.773Zm5.874.697c-.035.087-.07.175-.107.261a20.92 20.92 0 0 1-.36.798.688.688 0 0 1 .457.007l.01.004v-1.07Zm.72-1.892-.015.018a.745.745 0 0 1-.407.236c.02.195.027.378 0 .592l.422-.846ZM7.7 31.175c-.268.027-.489.055-.6.07-.006.056-.013.13-.016.194-.005.19 0 .42.004.694.003.111.006.225.011.338.232-.471.459-.956.6-1.296Zm2.12-1.456a2.04 2.04 0 0 1-.415.31c.064.104.099.222.104.341l.132-.277.18-.374Zm-.14-2.374c-.654.079-1.882.153-2.974.173h-1.87l-.281.435c-.09.141-.17.331-.203.414.102.21.189.508.226.788h.007c.364.006.928-.023 1.805-.07 1.243-.06 1.88-.052 2.315-.291.154-.086.266-.215.387-.393.176-.261.354-.605.587-1.056Zm2.136-1.784c-.157.16-.331.3-.52.422a.631.631 0 0 1 .182.281l.337-.703Zm7.205-1.478c-.222.442-.445.883-.667 1.32a.787.787 0 0 1 .61.007c.036.018.145.07.243.2-.032-.165-.067-.33-.105-.493-.088-.351-.137-.633-.08-1.034h-.001ZM11.415 2.546c-.358.319-1.039.879-1.725 1.394C6.903 5.989 5.087 7.59 4.301 8.662c-.28.38-.458.605-.556.852-.15.38-.103.798-.068 1.824.063 1.923.833 6.669 1.493 9.686.262 1.199.483 2.11.654 2.394.25.426.364.71.398.894a.923.923 0 0 1-.184.764l1.27-.01c.863-.014 1.523.003 2.056-.019.424-.017.75-.052 1.034-.187.336-.159.596-.458.921-.955.62-.948 1.373-2.515 2.705-5.103 1.789-3.448 3.6-7.076 4.047-8.015l.582-1.227-.62-.466c-.595-.458-2.45-2.263-4.12-4.027a59.654 59.654 0 0 0-2.498-2.52ZM5.81 24.876v-.001l-.013-.03.013.031Zm-.71-.835.027-.011a.55.55 0 0 0-.028.011Zm19.904-11.777v.01-.01Zm.002-.016v-.034.034ZM9.82 6.587c-.587.424-.81.823-.81 1.9 0 .787.12 1.157.344 1.42.158.186.388.339.77.494.352.144.603.207.838.209.347.002.688-.12 1.285-.525.707-.483.98-.864 1.036-1.238.052-.352-.09-.812-.574-1.54-.412-.619-.853-.95-1.29-1.072-.489-.139-1.016-.05-1.586.342l-.013.01Zm2.015 2.028a6.288 6.288 0 0 0-.306-.52c-.19-.284-.326-.488-.531-.5-.113-.007-.224.058-.352.146-.218.159-.218.34-.218.745 0 .198.02.419.028.504.047.025.133.068.204.097.133.054.222.102.312.103.04 0 .071-.027.12-.054a4.29 4.29 0 0 0 .358-.225c.147-.1.299-.223.385-.296ZM9.12 1.263l-.002.002.002-.002Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h26v62H0z" />
      </clipPath>
    </defs>
  </>,

  { width: 26, height: 62, fill: "none" },
);

export const InviteToCollabIcon = createIcon(
  <>
    <path
      d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 7.333h4m-2-2v4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const ImportSceneIcon = createIcon(
  <>
    <path
      d="M2.667 11.177v1.411c0 .375.14.734.39.998.25.265.59.414.943.414h8c.354 0 .693-.149.943-.414.25-.264.39-.623.39-.998v-1.411M4.667 5.53 8 2l3.333 3.53M8 2v8.47"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const SelectionIcon = createIcon(
  <>
    <path
      d="M2 8h2M8 2v2M5.2 5.2 3.733 3.733M10.8 5.2l1.467-1.467M5.2 10.8l-1.467 1.467M8 8l6 2-2.667 1.333L10 14 8 8Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const RectangleIcon = createIcon(
  <>
    <path
      d="M12 2.667H4c-.736 0-1.333.597-1.333 1.333v8c0 .736.597 1.333 1.333 1.333h8c.736 0 1.333-.597 1.333-1.333V4c0-.736-.597-1.333-1.333-1.333Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const DiamondIcon = createIcon(
  <>
    <path
      d="M7 13.6 2.4 9c-.52-.52-.52-1.48 0-2L7 2.4c.52-.52 1.48-.52 2 0L13.6 7c.52.52.52 1.48 0 2L9 13.6c-.52.52-1.48.52-2 0v0Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const EllipseIcon = createIcon(
  <>
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>,
  newIconProps,
);

export const ArrowIcon = createIcon(
  <>
    <path
      d="M3.333 8h9.334M10 10.667 12.667 8M10 5.333 12.667 8"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const LineIcon = createIcon(
  <>
    <path
      d="M3.333 8h9.334"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const FreedrawIcon = createIcon(
  <>
    <path
      d="M2.667 13.333h2.666l7-7a1.886 1.886 0 0 0-2.666-2.666l-7 7v2.666ZM9 4.333 11.667 7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const TextIcon = createIcon(
  <>
    <path
      d="M2.667 13.333h2M9.333 13.333H14M4.6 10h4.6M6.8 4.2l3.867 9.133M3.333 13.333l4-10.666h1.334l4.666 10.666"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const ImageIcon = createIcon(
  <>
    <path
      d="M10 5.333h.007M11.333 2.667H4.667a2 2 0 0 0-2 2v6.666a2 2 0 0 0 2 2h6.666a2 2 0 0 0 2-2V4.667a2 2 0 0 0-2-2Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m2.667 10 2.666-2.667c.304-.292.65-.446 1-.446.351 0 .696.154 1 .446l3.334 3.334"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.333 9.333 10 8.667c.304-.293.649-.447 1-.447s.696.154 1 .447L13.333 10"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const EraserIcon = createIcon(
  <>
    <path
      d="M12.667 12.667H5.333L2.667 10a.667.667 0 0 1 0-.94l6.666-6.667a.667.667 0 0 1 .94 0l3.334 3.334a.667.667 0 0 1 0 .94l-6 6M12 8.2 7.8 4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const ZoomInIcon = createIcon(
  <>
    <path
      d="M8 3.333v9.334M3.333 8h9.334"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const ZoomOutIcon = createIcon(
  <>
    <path
      d="M3.333 8h9.334"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const TrashIcon = createIcon(
  <>
    <path
      d="M2.667 4.667h10.666M6.667 7.333v4M9.333 7.333v4M3.333 4.667l.667 8A1.333 1.333 0 0 0 5.333 14h5.334A1.333 1.333 0 0 0 12 12.667l.667-8M6 4.667v-2A.667.667 0 0 1 6.667 2h2.666a.667.667 0 0 1 .667.667v2"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const DuplicateIcon = createIcon(
  <>
    <path
      d="M12 5.333H6.667c-.737 0-1.334.597-1.334 1.334V12c0 .736.597 1.333 1.334 1.333H12c.736 0 1.333-.597 1.333-1.333V6.667c0-.737-.597-1.334-1.333-1.334Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.667 5.333V4a1.333 1.333 0 0 0-1.334-1.333H4A1.333 1.333 0 0 0 2.667 4v5.333A1.333 1.333 0 0 0 4 10.667h1.333"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const MoonIcon = createIcon(
  <path
    d="M8 2h.262a5 5 0 0 0 5.28 8.297A5.999 5.999 0 1 1 8 1.995V2Z"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  newIconProps,
);

export const SunIcon = createIcon(
  <path
    d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 3.333V2M11.333 4.667l.934-.934M12.667 8H14M11.333 11.333l.934.934M8 12.667V14M4.667 11.333l-.934.934M4 8H2.667M4.667 4.667l-.934-.934"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  newIconProps,
);

export const HamburgerMenuIcon = createIcon(
  <path
    d="M2.667 4h10.666M2.667 8h10.666M2.667 12h10.666"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  newIconProps,
);

export const ExportIcon = createIcon(
  <>
    <path
      d="M9.333 5.333V4A1.333 1.333 0 0 0 8 2.667H3.333A1.333 1.333 0 0 0 2 4v8a1.333 1.333 0 0 0 1.333 1.333H8A1.333 1.333 0 0 0 9.333 12v-1.333"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.667 8H14l-2-2m0 4 2-2"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const HelpIcon = createIcon(
  <>
    <path
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12ZM8 11.333v.009"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 9a1 1 0 0 1 .667-1 1.733 1.733 0 1 0-2-2.667"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  newIconProps,
);

export const LinkIcon = createIcon(
  <path
    d="M7.334 4.667H4A1.333 1.333 0 0 0 2.667 6v6A1.333 1.333 0 0 0 4 13.333h6A1.333 1.333 0 0 0 11.334 12V8.667M6.667 9.333l6.667-6.666M10 2.667h3.333V6"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  newIconProps,
);

export const CloseIcon222 = createIcon(
  <path
    d="m12 4-8 8M4 4l8 8"
    stroke="#3D3D3D"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  newIconProps,
);

export const checkIcon = createIcon(
  <polyline fill="none" stroke="currentColor" points="20 6 9 17 4 12" />,
  {
    width: 24,
    height: 24,
  },
);

export const link = createIcon(
  "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z",
  { mirror: true },
);

export const save = createIcon(
  "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z",
  { width: 448, height: 512 },
);

export const saveAs = createIcon(
  "M252 54L203 8a28 27 0 00-20-8H28C12 0 0 12 0 27v195c0 15 12 26 28 26h204c15 0 28-11 28-26V73a28 27 0 00-8-19zM130 213c-21 0-37-16-37-36 0-19 16-35 37-35 20 0 37 16 37 35 0 20-17 36-37 36zm56-169v56c0 4-4 6-7 6H44c-4 0-7-2-7-6V42c0-4 3-7 7-7h133l4 2 3 2a7 7 0 012 5z M296 201l87 95-188 205-78 9c-10 1-19-8-18-20l9-84zm141-14l-41-44a31 31 0 00-46 0l-38 41 87 95 38-42c13-14 13-36 0-50z",
  { width: 448, height: 512 },
);

export const load = createIcon(
  <path
    d="M3.333 2.667H6l2 2h4.667A1.333 1.333 0 0 1 14 6v5.333a1.334 1.334 0 0 1-1.333 1.334H3.333A1.334 1.334 0 0 1 2 11.333V4a1.333 1.333 0 0 1 1.333-1.333"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  newIconProps,
);

export const clipboard = createIcon(
  "M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z",
  { width: 384, height: 512 },
);

export const trash = createIcon(
  "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",

  { width: 448, height: 512 },
);

export const palette = createIcon(
  "M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",
);

export const exportFile = createIcon(
  "M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z",
  { width: 576, height: 512, mirror: true },
);

export const exportImage = createIcon(
  <>
    <path d="M571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-187 44v-64 64z" />
    <path d="M384 121.941V128H256V0h6.059c6.362 0 12.471 2.53 16.97 7.029l97.941 97.941a24.01 24.01 0 017.03 16.971zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zm-135.455 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.491-48 48-48zm208 240h-256l.485-48.485L104.545 328c4.686-4.686 11.799-4.201 16.485.485L160.545 368 264.06 264.485c4.686-4.686 12.284-4.686 16.971 0L320.545 304v112z" />
  </>,
  { width: 576, height: 512, mirror: true },
);

export const exportToFileIcon = createIcon(
  "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",
  { width: 512, height: 512 },
);

export const zoomIn = createIcon(
  "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
  { width: 448, height: 512 },
);

export const zoomOut = createIcon(
  "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
  { width: 448, height: 512 },
);

export const done = createIcon(
  "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",
);

export const menu = createIcon(
  "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
);

export const undo = createIcon(
  "M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z",
  { mirror: true },
);

export const redo = createIcon(
  "M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z",
  { mirror: true },
);

export const questionCircle = createIcon(
  "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z",
  { mirror: true },
);

export const share = createIcon(
  <path
    d="M5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM15 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM15 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7.25 8.917l5.5-2.834M7.25 11.083l5.5 2.834"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  { width: 20, height: 20, fill: "none" },
);

export const shareIOS = createIcon(
  "M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z",
  { width: 24, height: 24 },
);

export const shareWindows = createIcon(
  <>
    <path
      stroke="currentColor"
      fill="currentColor"
      d="M40 5.6v6.1l-4.1.7c-8.9 1.4-16.5 6.9-20.6 15C13 32 10.9 43 12.4 43c.4 0 2.4-1.3 4.4-3 5-3.9 12.1-7 18.2-7.7l5-.6v12.8l11.2-11.3L62.5 22 51.2 10.8 40-.5v6.1zm10.2 22.6L44 34.5v-6.8l-6.9.6c-3.9.3-9.8 1.7-13.2 3.1-3.5 1.4-6.5 2.4-6.7 2.2-.9-1 3-7.5 6.4-10.8C28 18.6 34.4 16 40.1 16c3.7 0 3.9-.1 3.9-3.2V9.5l6.2 6.3 6.3 6.2-6.3 6.2z"
    />
    <path
      stroke="currentColor"
      fill="currentColor"
      d="M0 36v20h48v-6.2c0-6 0-6.1-2-4.3-1.1 1-2 2.9-2 4.2V52H4V34c0-17.3-.1-18-2-18s-2 .7-2 20z"
    />
  </>,
  { width: 64, height: 64 },
);

// Icon imported form Storybook
// Storybook is licensed under MIT https://github.com/storybookjs/storybook/blob/next/LICENSE
export const resetZoom = createIcon(
  <path
    stroke="currentColor"
    strokeWidth="40"
    fill="currentColor"
    d="M148 560a318 318 0 0 0 522 110 316 316 0 0 0 0-450 316 316 0 0 0-450 0c-11 11-21 22-30 34v4h47c25 0 46 21 46 46s-21 45-46 45H90c-13 0-25-6-33-14-9-9-14-20-14-33V156c0-25 20-45 45-45s45 20 45 45v32l1 1a401 401 0 0 1 623 509l212 212a42 42 0 0 1-59 59L698 757A401 401 0 0 1 65 570a42 42 0 0 1 83-10z"
  />,
  { width: 1024 },
);

export const BringForwardIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path
        d="M22 9.556C22 8.696 21.303 8 20.444 8H16v8H8v4.444C8 21.304 8.697 22 9.556 22h10.888c.86 0 1.556-.697 1.556-1.556V9.556z"
        fill={iconFillColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="2"
      />
      <path
        d="M16 3.556C16 2.696 15.303 2 14.444 2H3.556C2.696 2 2 2.697 2 3.556v10.888C2 15.304 2.697 16 3.556 16h10.888c.86 0 1.556-.697 1.556-1.556V3.556z"
        fill={activeElementColor(theme)}
        stroke={activeElementColor(theme)}
        strokeWidth="2"
      />
    </>,
    { width: 24, mirror: true },
  ),
);

export const SendBackwardIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path
        d="M16 3.556C16 2.696 15.303 2 14.444 2H3.556C2.696 2 2 2.697 2 3.556v10.888C2 15.304 2.697 16 3.556 16h10.888c.86 0 1.556-.697 1.556-1.556V3.556z"
        fill={activeElementColor(theme)}
        stroke={activeElementColor(theme)}
        strokeWidth="2"
      />
      <path
        d="M22 9.556C22 8.696 21.303 8 20.444 8H9.556C8.696 8 8 8.697 8 9.556v10.888C8 21.304 8.697 22 9.556 22h10.888c.86 0 1.556-.697 1.556-1.556V9.556z"
        fill={iconFillColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="2"
      />
    </>,
    { width: 24, mirror: true },
  ),
);

export const BringToFrontIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path
        d="M13 21a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1h-3v5h-5v3zM11 3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h3V6h5V3z"
        fill={iconFillColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="2"
      />
      <path
        d="M18 7.333C18 6.597 17.403 6 16.667 6H7.333C6.597 6 6 6.597 6 7.333v9.334C6 17.403 6.597 18 7.333 18h9.334c.736 0 1.333-.597 1.333-1.333V7.333z"
        fill={activeElementColor(theme)}
        stroke={activeElementColor(theme)}
        strokeWidth="2"
      />
    </>,
    { width: 24, mirror: true },
  ),
);

export const SendToBackIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path
        d="M18 7.333C18 6.597 17.403 6 16.667 6H7.333C6.597 6 6 6.597 6 7.333v9.334C6 17.403 6.597 18 7.333 18h9.334c.736 0 1.333-.597 1.333-1.333V7.333z"
        fill={activeElementColor(theme)}
        stroke={activeElementColor(theme)}
        strokeWidth="2"
      />
      <path
        d="M11 3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h8V3zM22 14a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1h8v-8z"
        fill={iconFillColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="2"
      />
    </>,
    { width: 24, mirror: true },
  ),
);

//
// Align action icons created from scratch to match those of z-index actions
// Note: vertical align icons are flipped so the larger item is always the
// first one the user sees. Horizontal align icons should not be flipped since
// that would make them lie about their function.
//
export const AlignTopIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path
        d="M 2,5 H 22"
        fill={iconFillColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 6,7 C 5.446,7 5,7.446 5,8 v 9.999992 c 0,0.554 0.446,1 1,1 h 3.0000001 c 0.554,0 0.9999999,-0.446 0.9999999,-1 V 8 C 10,7.446 9.5540001,7 9.0000001,7 Z m 9,0 c -0.554,0 -1,0.446 -1,1 v 5.999992 c 0,0.554 0.446,1 1,1 h 3 c 0.554,0 1,-0.446 1,-1 V 8 C 19,7.446 18.554,7 18,7 Z"
        fill={activeElementColor(theme)}
        stroke={activeElementColor(theme)}
        strokeWidth="2"
      />
    </>,
    { width: 24, mirror: true },
  ),
);

export const AlignBottomIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path
        d="M 2,19 H 22"
        fill={iconFillColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m 6,16.999992 c -0.554,0 -1,-0.446 -1,-1 V 6 C 5,5.446 5.446,5 6,5 H 9.0000001 C 9.5540001,5 10,5.446 10,6 v 9.999992 c 0,0.554 -0.4459999,1 -0.9999999,1 z m 9,0 c -0.554,0 -1,-0.446 -1,-1 V 10 c 0,-0.554 0.446,-1 1,-1 h 3 c 0.554,0 1,0.446 1,1 v 5.999992 c 0,0.554 -0.446,1 -1,1 z"
        fill={activeElementColor(theme)}
        stroke={activeElementColor(theme)}
        strokeWidth="2"
      />
    </>,
    { width: 24, mirror: true },
  ),
);

export const AlignLeftIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path
        d="M 5,2 V 22"
        fill={iconFillColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m 7.000004,5.999996 c 0,-0.554 0.446,-1 1,-1 h 9.999992 c 0.554,0 1,0.446 1,1 v 3.0000001 c 0,0.554 -0.446,0.9999999 -1,0.9999999 H 8.000004 c -0.554,0 -1,-0.4459999 -1,-0.9999999 z m 0,9 c 0,-0.554 0.446,-1 1,-1 h 5.999992 c 0.554,0 1,0.446 1,1 v 3 c 0,0.554 -0.446,1 -1,1 H 8.000004 c -0.554,0 -1,-0.446 -1,-1 z"
        fill={activeElementColor(theme)}
        stroke={activeElementColor(theme)}
        strokeWidth="2"
      />
    </>,
    { width: 24 },
  ),
);

export const AlignRightIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path
        d="M 19,2 V 22"
        fill={iconFillColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m 16.999996,5.999996 c 0,-0.554 -0.446,-1 -1,-1 H 6.000004 c -0.554,0 -1,0.446 -1,1 v 3.0000001 c 0,0.554 0.446,0.9999999 1,0.9999999 h 9.999992 c 0.554,0 1,-0.4459999 1,-0.9999999 z m 0,9 c 0,-0.554 -0.446,-1 -1,-1 h -5.999992 c -0.554,0 -1,0.446 -1,1 v 3 c 0,0.554 0.446,1 1,1 h 5.999992 c 0.554,0 1,-0.446 1,-1 z"
        fill={activeElementColor(theme)}
        stroke={activeElementColor(theme)}
        strokeWidth="2"
      />
    </>,
    { width: 24 },
  ),
);

export const DistributeHorizontallyIcon = React.memo(
  ({ theme }: { theme: Theme }) =>
    createIcon(
      <>
        <path
          d="M19 5V19M5 5V19"
          stroke={iconFillColor(theme)}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 9C15.554 9 16 9.446 16 10V14C16 14.554 15.554 15 15 15H9C8.446 15 8 14.554 8 14V10C8 9.446 8.446 9 9 9H15Z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24 },
    ),
);

export const DistributeVerticallyIcon = React.memo(
  ({ theme }: { theme: Theme }) =>
    createIcon(
      <>
        <path
          d="M5 5L19 5M5 19H19"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 9C15.554 9 16 9.446 16 10V14C16 14.554 15.554 15 15 15H9C8.446 15 8 14.554 8 14V10C8 9.446 8.446 9 9 9H15Z"
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
      </>,
      { width: 24 },
    ),
);

export const CenterVerticallyIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path
        d="m 5.000004,16.999996 c 0,0.554 0.446,1 1,1 h 3 c 0.554,0 1,-0.446 1,-1 v -10 c 0,-0.554 -0.446,-1 -1,-1 h -3 c -0.554,0 -1,0.446 -1,1 z m 9,-2 c 0,0.554 0.446,1 1,1 h 3 c 0.554,0 1,-0.446 1,-1 v -6 c 0,-0.554 -0.446,-1 -1,-1 h -3 c -0.554,0 -1,0.446 -1,1 z"
        fill={activeElementColor(theme)}
        stroke={activeElementColor(theme)}
        strokeWidth="2"
      />
      <path
        d="M 2,12 H 22"
        fill={iconFillColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="2"
        strokeDasharray="1, 2.8"
        strokeLinecap="round"
      />
    </>,
    { width: 24, mirror: true },
  ),
);

export const CenterHorizontallyIcon = React.memo(
  ({ theme }: { theme: Theme }) =>
    createIcon(
      <>
        <path
          d="M 7 5 C 6.446 5 6 5.446 6 6 L 6 9 C 6 9.554 6.446 10 7 10 L 17 10 C 17.554 10 18 9.554 18 9 L 18 6 C 18 5.446 17.554 5 17 5 L 7 5 z M 9 14 C 8.446 14 8 14.446 8 15 L 8 18 C 8 18.554 8.446 19 9 19 L 15 19 C 15.554 19 16 18.554 16 18 L 16 15 C 16 14.446 15.554 14 15 14 L 9 14 z "
          fill={activeElementColor(theme)}
          stroke={activeElementColor(theme)}
          strokeWidth="2"
        />
        <path
          d="M 12,2 V 22"
          fill={iconFillColor(theme)}
          stroke={iconFillColor(theme)}
          strokeWidth="2"
          strokeDasharray="1, 2.8"
          strokeLinecap="round"
        />
      </>,
      { width: 24 },
    ),
);

// export const users = createIcon(
//   "M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z",
//   { width: 640, height: 512, mirror: true },
// );

export const users = createIcon(
  <path
    d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.087a2.666 2.666 0 0 1 0 5.166M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  { width: 16, height: 16, mirror: true, fill: "none" },
);

// not mirrored because it's inspired by a playback control, which is always RTL
export const start = createIcon(
  "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z",
);

export const stop = createIcon(
  "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm96 328c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v160z",
);

export const CloseIcon = createIcon(
  <path
    d="m12 4-8 8M4 4l8 8"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  newIconProps,
);

export const back = createIcon(
  "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
  { width: 320, height: 512, style: { marginLeft: "-0.2rem" }, mirror: true },
);

export const clone = createIcon(
  "M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z",
  { mirror: true },
);

// modified https://feathericons.com/?query=shield
export const shield = createIcon(
  "M11.553 22.894a.998.998 0 00.894 0s3.037-1.516 5.465-4.097C19.616 16.987 21 14.663 21 12V5a1 1 0 00-.649-.936l-8-3a.998.998 0 00-.702 0l-8 3A1 1 0 003 5v7c0 2.663 1.384 4.987 3.088 6.797 2.428 2.581 5.465 4.097 5.465 4.097zm-1.303-8.481l6.644-6.644a.856.856 0 111.212 1.212l-7.25 7.25a.856.856 0 01-1.212 0l-3.75-3.75a.856.856 0 111.212-1.212l3.144 3.144z",
  { width: 24 },
);

export const file = createIcon(
  "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z",
  { width: 384, height: 512 },
);

export const GroupIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path d="M25 26H111V111H25" fill={iconFillColor(theme)} />
      <path
        d="M25 111C25 80.2068 25 49.4135 25 26M25 26C48.6174 26 72.2348 26 111 26H25ZM25 26C53.3671 26 81.7343 26 111 26H25ZM111 26C111 52.303 111 78.606 111 111V26ZM111 26C111 51.2947 111 76.5893 111 111V26ZM111 111C87.0792 111 63.1585 111 25 111H111ZM111 111C87.4646 111 63.9293 111 25 111H111ZM25 111C25 81.1514 25 51.3028 25 26V111Z"
        stroke={iconFillColor(theme)}
        strokeWidth="2"
      />
      <path d="M100 100H160V160H100" fill={iconFillColor(theme)} />
      <path
        d="M100 160C100 144.106 100 128.211 100 100M100 100C117.706 100 135.412 100 160 100H100ZM100 100C114.214 100 128.428 100 160 100H100ZM160 100C160 120.184 160 140.369 160 160V100ZM160 100C160 113.219 160 126.437 160 160V100ZM160 160C145.534 160 131.068 160 100 160H160ZM160 160C143.467 160 126.934 160 100 160H160ZM100 160C100 143.661 100 127.321 100 100V160Z"
        stroke={iconFillColor(theme)}
        strokeWidth="2"
      />
      <g
        fill={handlerColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="6"
      >
        <rect x="2.5" y="2.5" width="30" height="30" />
        <rect x="2.5" y="149.5" width="30" height="30" />
        <rect x="147.5" y="149.5" width="30" height="30" />
        <rect x="147.5" y="2.5" width="30" height="30" />
      </g>
    </>,
    { width: 182, height: 182, mirror: true },
  ),
);

export const UngroupIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path d="M25 26H111V111H25" fill={iconFillColor(theme)} />
      <path
        d="M25 111C25 80.2068 25 49.4135 25 26M25 26C48.6174 26 72.2348 26 111 26H25ZM25 26C53.3671 26 81.7343 26 111 26H25ZM111 26C111 52.303 111 78.606 111 111V26ZM111 26C111 51.2947 111 76.5893 111 111V26ZM111 111C87.0792 111 63.1585 111 25 111H111ZM111 111C87.4646 111 63.9293 111 25 111H111ZM25 111C25 81.1514 25 51.3028 25 26V111Z"
        stroke={iconFillColor(theme)}
        strokeWidth="2"
      />
      <path d="M100 100H160V160H100" fill={iconFillColor(theme)} />
      <path
        d="M100 160C100 144.106 100 128.211 100 100M100 100C117.706 100 135.412 100 160 100H100ZM100 100C114.214 100 128.428 100 160 100H100ZM160 100C160 120.184 160 140.369 160 160V100ZM160 100C160 113.219 160 126.437 160 160V100ZM160 160C145.534 160 131.068 160 100 160H160ZM160 160C143.467 160 126.934 160 100 160H160ZM100 160C100 143.661 100 127.321 100 100V160Z"
        stroke={iconFillColor(theme)}
        strokeWidth="2"
      />
      <g
        fill={handlerColor(theme)}
        stroke={iconFillColor(theme)}
        strokeWidth="6"
      >
        <rect x="2.5" y="2.5" width="30" height="30" />
        <rect x="78.5" y="149.5" width="30" height="30" />
        <rect x="147.5" y="149.5" width="30" height="30" />
        <rect x="147.5" y="78.5" width="30" height="30" />
        <rect x="105.5" y="2.5" width="30" height="30" />
        <rect x="2.5" y="102.5" width="30" height="30" />
      </g>
    </>,
    { width: 182, height: 182, mirror: true },
  ),
);

export const FillHachureIcon = createIcon(
  <>
    <g
      clipPath="url(#a)"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M-.977 13.73 13.73-.977M4.8 19.508 19.508 4.8M-3.806 10.902 10.902-3.806M1.6 17.108 16.308 2.4" />
    </g>
    <rect x=".5" y=".5" width={15} height={15} rx="2.5" stroke="currentColor" />
    <defs>
      <clipPath id="a">
        <rect width={16} height={16} rx={3} fill="#fff" />
      </clipPath>
    </defs>
  </>,
  newIconProps,
);

export const FillCrossHatchIcon = createIcon(
  <>
    <g
      clipPath="url(#a)"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M-.977 13.73 13.73-.977M4.8 19.508 19.508 4.8M-3.806 10.902 10.902-3.806M1.6 17.108 16.308 2.4M13.73 16.68-.977 1.971M19.508 10.902 4.8-3.806M10.902 19.508-3.806 4.8M17.108 14.102 2.4-.606" />
    </g>
    <rect x=".5" y=".5" width={15} height={15} rx="2.5" stroke="currentColor" />
    <defs>
      <clipPath id="a">
        <rect width={16} height={16} rx={3} fill="#fff" />
      </clipPath>
    </defs>
  </>,
  newIconProps,
);

export const FillSolidIcon = createIcon(
  <>
    <rect x=".5" y=".5" width={15} height={15} rx="2.5" fill="currentColor" />
    <rect x=".5" y=".5" width={15} height={15} rx="2.5" stroke="currentColor" />
  </>,
  newIconProps,
);

export const StrokeWidthIcon = ({
  strokeWidth,
  width,
  height,
}: {
  strokeWidth: number;
  width: number;
  height: number;
}) =>
  createIcon(
    <path
      d="M2 8h14"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    { width, height },
  );

export const StrokeStyleSolidIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      d="M6 10H34"
      stroke={iconFillColor(theme)}
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
    />,
    {
      width: 40,
      height: 20,
    },
  ),
);

export const StrokeStyleDashedIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      d="M6 10H34"
      stroke={iconFillColor(theme)}
      strokeWidth={2.5}
      strokeDasharray={"10, 8"}
      fill="none"
      strokeLinecap="round"
    />,
    { width: 40, height: 20 },
  ),
);

export const StrokeStyleDottedIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      d="M6 10H36"
      stroke={iconFillColor(theme)}
      strokeWidth={2.5}
      strokeDasharray={"2, 4.5"}
      fill="none"
      strokeLinecap="round"
    />,
    { width: 40, height: 20 },
  ),
);

export const SloppinessArchitectIcon = createIcon(
  <path
    d="M1 10.723C2.986 9.66 8.081 6.772 11.282 5.497c3.2-1.274.121 3.386 1.583 3.726C14.327 9.563 19 7.046 19 7.046"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
  />,
  { width: 20, height: 16, mirror: true, fill: "none" },
);

export const SloppinessArtistIcon = createIcon(
  <path
    d="M1 11.426c1.986-1.062 7.081-3.95 10.282-5.225 3.2-1.275.121 3.386 1.583 3.725C14.327 10.266 19 7.75 19 7.75M2.837 10.426C6.393 8.522 10.194 3.681 11.8 4.43c1.605.747-1.384 4.93-.16 6.714C12.866 12.926 19 9.426 19 9.426"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
  />,
  { width: 20, height: 16, mirror: true, fill: "none" },
);

export const SloppinessCartoonistIcon = createIcon(
  <path
    d="M1 10.823C3.084 9.77 11.352 4.408 13.505 4.501c2.153.094-.503 6.166.413 6.884.916.718 4.235-2.147 5.082-2.576M1.514 8.246C2.912 7.623 8.08 4.309 9.9 4.509c1.822.198 1.2 4.592 2.545 4.93 1.345.338 4.606-2.419 5.526-2.903"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
  />,
  { width: 20, height: 16, mirror: true, fill: "none" },
);

export const EdgeSharpIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      d="M10 17L10 5L35 5"
      stroke={iconFillColor(theme)}
      strokeWidth={2}
      strokeLinecap="round"
      fill="none"
    />,
    { width: 40, height: 20, mirror: true },
  ),
);

export const EdgeRoundIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      d="M10 17V15C10 8 13 5 21 5L33.5 5"
      stroke={iconFillColor(theme)}
      strokeWidth={2}
      strokeLinecap="round"
      fill="none"
    />,
    { width: 40, height: 20, mirror: true },
  ),
);

export const ArrowheadNoneIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      d="M6 10H34"
      stroke={iconFillColor(theme)}
      strokeWidth={2}
      fill="none"
    />,
    {
      width: 40,
      height: 20,
    },
  ),
);

export const ArrowheadArrowIcon = React.memo(
  ({ theme, flip = false }: { theme: Theme; flip?: boolean }) =>
    createIcon(
      <g
        transform={flip ? "translate(40, 0) scale(-1, 1)" : ""}
        stroke={iconFillColor(theme)}
        strokeWidth={2}
        fill="none"
      >
        <path d="M34 10H6M34 10L27 5M34 10L27 15" />
        <path d="M27.5 5L34.5 10L27.5 15" />
      </g>,
      { width: 40, height: 20 },
    ),
);

export const ArrowheadDotIcon = React.memo(
  ({ theme, flip = false }: { theme: Theme; flip?: boolean }) =>
    createIcon(
      <g
        stroke={iconFillColor(theme)}
        fill={iconFillColor(theme)}
        transform={flip ? "translate(40, 0) scale(-1, 1)" : ""}
      >
        <path d="M32 10L6 10" strokeWidth={2} />
        <circle r="4" transform="matrix(-1 0 0 1 30 10)" />
      </g>,
      { width: 40, height: 20 },
    ),
);

export const ArrowheadBarIcon = React.memo(
  ({ theme, flip = false }: { theme: Theme; flip?: boolean }) =>
    createIcon(
      <g transform={flip ? "translate(40, 0) scale(-1, 1)" : ""}>
        <path
          d="M34 10H5.99996M34 10L34 5M34 10L34 15"
          stroke={iconFillColor(theme)}
          strokeWidth={2}
          fill="none"
        />
      </g>,
      { width: 40, height: 20 },
    ),
);

export const ArrowheadTriangleIcon = React.memo(
  ({ theme, flip = false }: { theme: Theme; flip?: boolean }) =>
    createIcon(
      <g
        stroke={iconFillColor(theme)}
        fill={iconFillColor(theme)}
        transform={flip ? "translate(40, 0) scale(-1, 1)" : ""}
      >
        <path d="M32 10L6 10" strokeWidth={2} />
        <path d="M27.5 5.5L34.5 10L27.5 14.5L27.5 5.5" />
      </g>,
      { width: 40, height: 20 },
    ),
);

export const FontSizeSmallIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      fill={iconFillColor(theme)}
      d="M 0 69.092 L 0 55.03 A 124.24 124.24 0 0 0 4.706 57.02 Q 6.826 57.863 8.708 58.5 A 53.466 53.466 0 0 0 12.231 59.571 Q 17.236 60.889 21.387 60.889 A 20.909 20.909 0 0 0 24.265 60.704 Q 25.719 60.502 26.903 60.077 A 8.649 8.649 0 0 0 29.028 58.985 Q 31.689 57.08 31.689 53.321 Q 31.689 51.221 30.518 49.585 A 10.126 10.126 0 0 0 29.282 48.177 Q 28.352 47.287 27.075 46.436 A 23.719 23.719 0 0 0 25.752 45.627 Q 23.774 44.492 20.176 42.735 A 254.44 254.44 0 0 0 17.822 41.602 Q 11.503 38.631 8.236 35.888 A 19.742 19.742 0 0 1 8.008 35.694 A 22.18 22.18 0 0 1 2.783 29.102 Q 0.83 25.342 0.83 20.313 A 22.471 22.471 0 0 1 1.733 13.778 A 17.283 17.283 0 0 1 7.251 5.42 A 21.486 21.486 0 0 1 15.177 1.272 Q 18.361 0.338 22.166 0.09 A 43.573 43.573 0 0 1 25 0 A 42.399 42.399 0 0 1 34.349 1.01 A 39.075 39.075 0 0 1 35.62 1.319 A 67.407 67.407 0 0 1 42.108 3.382 A 83.357 83.357 0 0 1 46.191 5.03 L 41.309 16.797 Q 35.596 14.453 31.86 13.526 A 30.762 30.762 0 0 0 25.417 12.612 A 28.337 28.337 0 0 0 24.512 12.598 A 14.846 14.846 0 0 0 22.022 12.793 Q 19.498 13.224 17.92 14.6 Q 15.625 16.602 15.625 19.824 Q 15.625 21.826 16.553 23.316 Q 17.48 24.805 19.507 26.197 A 18.343 18.343 0 0 0 20.659 26.912 Q 22.596 28.035 26.516 29.953 A 299.99 299.99 0 0 0 29.102 31.201 Q 37.91 35.412 41.841 39.642 A 16.553 16.553 0 0 1 42.822 40.796 A 17.675 17.675 0 0 1 46.301 49.233 A 23.517 23.517 0 0 1 46.533 52.588 A 21.581 21.581 0 0 1 45.471 59.515 A 17.733 17.733 0 0 1 39.575 67.823 Q 33.745 72.486 24.094 73.243 A 49.683 49.683 0 0 1 20.215 73.389 A 51.712 51.712 0 0 1 9.448 72.315 A 40.672 40.672 0 0 1 0 69.092 Z"
    />,
    { width: 47, height: 77 },
  ),
);

export const FontSizeMediumIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      fill={iconFillColor(theme)}
      d="M 44.092 71.387 L 30.225 71.387 L 13.037 15.381 L 12.598 15.381 A 1505.093 1505.093 0 0 1 12.959 22.313 Q 13.426 31.715 13.508 36.4 A 102.991 102.991 0 0 1 13.525 38.184 L 13.525 71.387 L 0 71.387 L 0 0 L 20.605 0 L 37.5 54.59 L 37.793 54.59 L 55.713 0 L 76.318 0 L 76.318 71.387 L 62.207 71.387 L 62.207 37.598 Q 62.207 35.205 62.28 32.08 A 160.703 160.703 0 0 1 62.326 30.544 Q 62.452 26.754 62.866 17.168 A 5390.536 5390.536 0 0 1 62.939 15.479 L 62.5 15.479 L 44.092 71.387 Z"
    />,
    { width: 77, height: 75 },
  ),
);

export const FontSizeLargeIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      fill={iconFillColor(theme)}
      d="M 44.092 71.387 L 0 71.387 L 0 0 L 15.137 0 L 15.137 58.887 L 44.092 58.887 L 44.092 71.387 Z"
    />,
    { width: 45, height: 75 },
  ),
);

export const FontSizeExtraLargeIcon = React.memo(
  ({ theme }: { theme: Theme }) =>
    createIcon(
      <path
        fill={iconFillColor(theme)}
        d="M 42.578 35.4 L 66.699 71.387 L 49.414 71.387 L 32.813 44.385 L 16.211 71.387 L 0 71.387 L 23.682 34.57 L 1.514 0 L 18.213 0 L 33.594 25.684 L 48.682 0 L 64.99 0 L 42.578 35.4 Z M 119.775 71.387 L 75.684 71.387 L 75.684 0 L 90.82 0 L 90.82 58.887 L 119.775 58.887 L 119.775 71.387 Z"
      />,
      { width: 120, height: 75 },
    ),
);

export const FontFamilyHandDrawnIcon = React.memo(
  ({ theme }: { theme: Theme }) =>
    createIcon(
      <path
        fill={iconFillColor(theme)}
        d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
      />,
      { width: 448, height: 512 },
    ),
);

export const FontFamilyNormalIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path
        fill={iconFillColor(theme)}
        d="M 63.818 71.68 L 54.492 71.68 L 45.898 49.561 L 17.578 49.561 L 9.082 71.68 L 0 71.68 L 27.881 0 L 35.986 0 L 63.818 71.68 Z M 20.605 41.602 L 43.213 41.602 L 35.205 19.971 L 31.787 9.277 Q 30.322 15.137 28.711 19.971 L 20.605 41.602 Z"
      />
      <path
        fill={iconFillColor(theme)}
        d="M 68.994 71.68 L 52.686 71.68 L 47.51 54.688 L 21.484 54.688 L 16.309 71.68 L 0 71.68 L 25.195 0 L 43.701 0 L 68.994 71.68 Z M 25.293 41.992 L 43.896 41.992 A 27590.463 27590.463 0 0 1 42.2 36.532 Q 36.965 19.676 35.937 16.273 A 120.932 120.932 0 0 1 35.815 15.869 A 131.65 131.65 0 0 1 35.396 14.435 Q 34.951 12.879 34.675 11.741 A 34.866 34.866 0 0 1 34.521 11.084 A 141.762 141.762 0 0 1 33.706 14.075 Q 31.482 21.957 25.293 41.992 Z"
      />
    </>,
    { width: 70, height: 78 },
  ),
);

export const FontFamilyCodeIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <>
      <path
        fill={iconFillColor(theme)}
        d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
      />
    </>,
    { width: 640, height: 512 },
  ),
);

export const TextAlignLeftIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      d="M12.83 352h262.34A12.82 12.82 0 00288 339.17v-38.34A12.82 12.82 0 00275.17 288H12.83A12.82 12.82 0 000 300.83v38.34A12.82 12.82 0 0012.83 352zm0-256h262.34A12.82 12.82 0 00288 83.17V44.83A12.82 12.82 0 00275.17 32H12.83A12.82 12.82 0 000 44.83v38.34A12.82 12.82 0 0012.83 96zM432 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      fill={iconFillColor(theme)}
      strokeLinecap="round"
    />,
    { width: 448, height: 512 },
  ),
);

export const TextAlignCenterIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      d="M432 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zM108.1 96h231.81A12.09 12.09 0 00352 83.9V44.09A12.09 12.09 0 00339.91 32H108.1A12.09 12.09 0 0096 44.09V83.9A12.1 12.1 0 00108.1 96zm231.81 256A12.09 12.09 0 00352 339.9v-39.81A12.09 12.09 0 00339.91 288H108.1A12.09 12.09 0 0096 300.09v39.81a12.1 12.1 0 0012.1 12.1z"
      fill={iconFillColor(theme)}
    />,
    { width: 448, height: 512 },
  ),
);

export const TextAlignRightIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      d="M16 224h416a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16zm416 192H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm3.17-384H172.83A12.82 12.82 0 00160 44.83v38.34A12.82 12.82 0 00172.83 96h262.34A12.82 12.82 0 00448 83.17V44.83A12.82 12.82 0 00435.17 32zm0 256H172.83A12.82 12.82 0 00160 300.83v38.34A12.82 12.82 0 00172.83 352h262.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288z"
      fill={iconFillColor(theme)}
      strokeLinecap="round"
    />,
    { width: 448, height: 512 },
  ),
);

export const TextAlignTopIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      d="m16,132l416,0c8.837,0 16,-7.163 16,-16l0,-40c0,-8.837 -7.163,-16 -16,-16l-416,0c-8.837,0 -16,7.163 -16,16l0,40c0,8.837 7.163,16 16,16zm0,160l416,0c8.837,0 16,-7.163 16,-16l0,-40c0,-8.837 -7.163,-16 -16,-16l-416,0c-8.837,0 -16,7.163 -16,16l0,40c0,8.837 7.163,16 16,16z"
      fill={iconFillColor(theme)}
      strokeLinecap="round"
    />,
    { width: 448, height: 512 },
  ),
);

export const TextAlignBottomIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      d="M16,292L432,292C440.837,292 448,284.837 448,276L448,236C448,227.163 440.837,220 432,220L16,220C7.163,220 0,227.163 0,236L0,276C0,284.837 7.163,292 16,292ZM16,452L432,452C440.837,452 448,444.837 448,436L448,396C448,387.163 440.837,380 432,380L16,380C7.163,380 0,387.163 0,396L0,436C0,444.837 7.163,452 16,452Z"
      fill={iconFillColor(theme)}
      strokeLinecap="round"
    />,
    { width: 448, height: 512 },
  ),
);

export const TextAlignMiddleIcon = React.memo(({ theme }: { theme: Theme }) =>
  createIcon(
    <path
      transform="matrix(1,0,0,1,0,80)"
      d="M16,132L432,132C440.837,132 448,124.837 448,116L448,76C448,67.163 440.837,60 432,60L16,60C7.163,60 0,67.163 0,76L0,116C0,124.837 7.163,132 16,132ZM16,292L432,292C440.837,292 448,284.837 448,276L448,236C448,227.163 440.837,220 432,220L16,220C7.163,220 0,227.163 0,236L0,276C0,284.837 7.163,292 16,292Z"
      fill={iconFillColor(theme)}
      strokeLinecap="round"
    />,
    { width: 448, height: 512 },
  ),
);

export const publishIcon = createIcon(
  <path
    d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"
    fill="currentColor"
  />,
  { width: 640, height: 512 },
);

export const editIcon = createIcon(
  <path
    fill="currentColor"
    d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
  ></path>,
  { width: 640, height: 512 },
);

export const eraser = createIcon(
  <path d="M480 416C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H150.6C133.7 480 117.4 473.3 105.4 461.3L25.37 381.3C.3786 356.3 .3786 315.7 25.37 290.7L258.7 57.37C283.7 32.38 324.3 32.38 349.3 57.37L486.6 194.7C511.6 219.7 511.6 260.3 486.6 285.3L355.9 416H480zM265.4 416L332.7 348.7L195.3 211.3L70.63 336L150.6 416L265.4 416z" />,
);
