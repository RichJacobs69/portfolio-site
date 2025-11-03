'use client';

import * as amplitude from '@amplitude/analytics-browser';

function initAmplitude() {
  if (typeof window !== 'undefined') {
    amplitude.init('e8887d94ba449c5fa4da843bcce2d1af', {
      autocapture: true,
      serverZone: 'EU',
    });
  }
}

initAmplitude();

export const Amplitude = () => null;
export default amplitude;
