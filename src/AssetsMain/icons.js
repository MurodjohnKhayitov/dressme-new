const SeasonSquare = ({ colors }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.6666 17.5L25.6666 10.5C25.6666 4.66669 23.3333 2.33336 17.5 2.33336L10.5 2.33336C4.66665 2.33336 2.33331 4.66669 2.33331 10.5L2.33331 17.5C2.33331 23.3334 4.66665 25.6667 10.5 25.6667L17.5 25.6667C23.3333 25.6667 25.6666 23.3334 25.6666 17.5Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4133 18.1183L16.52 14L12.4133 9.88168"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const data = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6235 14.5505 14.0673 10.986 14.0673Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9861 11.0054C13.3126 11.0054 15.1984 9.11883 15.1984 6.79224C15.1984 4.46565 13.3126 2.57994 10.9861 2.57994C8.65946 2.57994 6.77285 4.46565 6.77285 6.79224C6.76502 9.11097 8.63851 10.9976 10.9564 11.0054H10.9861Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export { SeasonSquare };
