import { css } from 'styled-components';

export const fastOutSlowInTiming = css`cubic-bezier(0.4, 0, 0.2, 1)`;

export const enterFromLeft = css`
  width: 100vw;
  animation: fromLeft 350ms ${fastOutSlowInTiming};

  @keyframes fromLeft {
    from {
      margin-left: -100vw;
    }
    to {
      margin-left: 0;
    }
  }
`;

export const enterFromRight = css`
  width: 100vw;
  animation: fromRight 350ms ${fastOutSlowInTiming};

  @keyframes fromRight {
    from {
      margin-left: 100vw;
    }
    to {
      margin-left: 0;
    }
  }
`;

const fadeIn = css`
  animation: fadeIn 350ms ${fastOutSlowInTiming};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default { enterFromLeft, enterFromRight, fadeIn };
